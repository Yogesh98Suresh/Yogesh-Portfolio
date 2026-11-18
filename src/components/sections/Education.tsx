import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Education</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
        </div>

        <div className="max-w-3xl mx-auto glass p-8 md:p-10 rounded-3xl border border-white/10 hover:border-primary/40 transition-all">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-secondary flex-shrink-0">
              <GraduationCap size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
              <p className="text-lg font-medium text-primary mb-4">{education.specialization}</p>
              <div className="text-textMuted mb-6">{education.institution}</div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-4 rounded-xl border border-white/5">
                  <div className="text-xs text-textMuted mb-1">CGPA</div>
                  <div className="text-xl font-bold text-white">{education.cgpa}</div>
                </div>
                <div className="glass p-4 rounded-xl border border-white/5">
                  <div className="text-xs text-textMuted mb-1">Expected Grad</div>
                  <div className="text-xl font-bold text-white">{education.expectedGraduation}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
