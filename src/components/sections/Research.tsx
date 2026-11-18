import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { BookOpen } from 'lucide-react';

export default function Research() {
  const { research } = PORTFOLIO_DATA;

  return (
    <section id="research" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Research & Publications</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
        </div>

        <div className="max-w-4xl mx-auto glass p-8 md:p-10 rounded-3xl border border-white/10 hover:border-primary/40 transition-all">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary flex-shrink-0">
              <BookOpen size={32} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {research.status}
                </span>
                <span className="text-sm text-textMuted">{research.publicationDate}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{research.title}</h3>
              <p className="text-sm font-medium text-textMuted mb-4">Journal: {research.journal}</p>
              <p className="text-textMuted text-sm leading-relaxed mb-6">{research.abstract}</p>

              <div className="text-sm text-textMuted">
                <span className="font-semibold text-white">Authors: </span>
                {research.authors.join(', ')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
