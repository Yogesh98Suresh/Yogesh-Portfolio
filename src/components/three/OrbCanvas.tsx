import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        {/* Core Glowing Sphere */}
        <Sphere ref={sphereRef} args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            bumpScale={0.05}
          />
        </Sphere>
        {/* Outer Wireframe / Glass Shell */}
        <Sphere args={[1.8, 32, 32]}>
          <meshStandardMaterial
            color="#8b5cf6"
            wireframe
            transparent
            opacity={0.15}
          />
        </Sphere>
      </group>
    </Float>
  );
}

export default function OrbCanvas() {
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
      }
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  if (!webGLSupported) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center glass rounded-2xl">
        <div className="text-center p-6">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-tr from-primary to-secondary animate-pulse opacity-80" />
          <p className="text-sm text-textMuted">Interactive 3D Visual (WebGL Fallback)</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] lg:h-[500px] cursor-grab active:cursor-grabbing relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#3b82f6" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#8b5cf6" />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
