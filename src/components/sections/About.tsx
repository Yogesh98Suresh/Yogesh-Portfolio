import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Brain, Code, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">About Me</motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <motion.p variants={itemVariants} className="text-textMuted text-lg">
            Dedicated student, builder, and lifelong learner exploring the frontiers of artificial intelligence and systems engineering.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Card 1: Academic Background */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Academic Excellence</h3>
              <p className="text-textMuted text-sm leading-relaxed mb-4">
                Pursuing Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning, maintaining an impressive CGPA of <span className="text-white font-bold">{personal.cgpa}</span>.
              </p>
            </div>
            <div className="text-xs text-primary font-medium">Expected Graduation: {personal.graduationYear}</div>
          </motion.div>

          {/* Card 2: AI & ML Focus */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary mb-6">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI & ML Passion</h3>
              <p className="text-textMuted text-sm leading-relaxed mb-4">
                Deeply interested in intelligent applications, machine learning fundamentals, and python-based AI pipelines designed to solve tangible challenges.
              </p>
            </div>
            <div className="text-xs text-secondary font-medium">Intelligent Systems</div>
          </motion.div>

          {/* Card 3: Software Engineering */}
          <motion.div variants={itemVariants} className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Full-Stack Building</h3>
              <p className="text-textMuted text-sm leading-relaxed mb-4">
                Committed to writing clean, maintainable code across modern tech stacks including React, TypeScript, Java, and Python.
              </p>
            </div>
            <div className="text-xs text-cyan-400 font-medium">Scalable & Robust Code</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
