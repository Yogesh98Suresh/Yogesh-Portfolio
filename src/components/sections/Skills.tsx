import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Code2, Cpu, Brain, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  const getCategoryIcon = (category: string) => {
    if (category.includes('Programming')) return <Code2 className="text-primary" size={24} />;
    if (category.includes('Frontend')) return <Cpu className="text-secondary" size={24} />;
    if (category.includes('AI')) return <Brain className="text-cyan-400" size={24} />;
    return <Wrench className="text-emerald-400" size={24} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Technical Expertise</motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <motion.p variants={itemVariants} className="text-textMuted text-lg">
            Core technologies, languages, and frameworks I leverage to design robust applications.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((group, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/40 transition-all flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-lg font-semibold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-text hover:bg-primary/20 hover:border-primary/40 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
