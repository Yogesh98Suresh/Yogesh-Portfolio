import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import OrbCanvas from '../three/OrbCanvas';

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-primary/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-textMuted">{personal.availability}</span>
          </div>

          <p className="text-primary font-medium text-lg mb-2">{personal.introduction}</p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Building intelligent solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">tomorrow.</span>
          </h1>

          <div className="text-xl font-semibold text-textMuted mb-4">
            {personal.role}
          </div>

          <p className="text-textMuted text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
            {personal.bio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-primary text-white font-medium flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Explore Projects <ArrowRight size={18} />
            </a>
            <a
  href="/resume.pdf"
  download="Yogesh_S_Resume.pdf"
  className="px-6 py-3 rounded-xl glass border border-white/20 text-text font-medium flex items-center gap-2 hover:bg-white/10 transition-all"
>
  <Download size={18} /> Download Resume
</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-textMuted">
            <span className="text-xs uppercase tracking-wider text-textMuted/60">Connect:</span>
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass hover:text-white hover:border-primary/50 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass hover:text-white hover:border-primary/50 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personal.socials.email}`}
              className="p-2 rounded-lg glass hover:text-white hover:border-primary/50 transition-colors"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: 3D Orb */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl -z-10" />
            <OrbCanvas />
          </div>
        </div>

      </div>
    </section>
  );
}
