import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Experience & Achievements</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-textMuted text-lg">
            Hackathons, leadership milestones, and practical engineering journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
            {experience.map((item) => (
              <div key={item.id} className="relative pl-8 md:pl-10 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-surface border-2 border-primary flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Briefcase size={14} />
                </div>

                <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                      {item.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-textMuted font-medium">
                      <Calendar size={14} /> {item.period}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                  <div className="text-sm font-medium text-textMuted mb-4">{item.organization}</div>

                  <ul className="list-disc list-inside text-textMuted text-sm space-y-2">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
