import { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Copy, Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Let's Connect</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-textMuted text-lg">
            Feel free to reach out for collaborations, project inquiries, or just to say hi.
          </p>
        </div>

        <div className="max-w-xl mx-auto glass p-8 md:p-12 rounded-3xl border border-white/10 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>

          <div className="flex flex-col gap-4">
            <button
              onClick={copyEmail}
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-text hover:text-white transition-all w-full"
            >
              <Mail size={20} />
              <span>{personal.socials.email}</span>
              <Copy size={16} className={copied ? "text-emerald-400" : "text-textMuted"} />
            </button>
            {copied && <p className="text-xs text-emerald-400 animate-fadeIn">Email copied!</p>}
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <a href={personal.socials.linkedin} className="text-textMuted hover:text-primary transition-colors">
              <Linkedin size={28} />
            </a>
            <a href={personal.socials.github} className="text-textMuted hover:text-primary transition-colors">
              <Github size={28} />
            </a>
          </div>
        </div>
      </div>

      <footer className="py-8 text-center text-xs text-textMuted">
        &copy; {new Date().getFullYear()} {personal.name}. All rights reserved. Built with passion.
      </footer>
    </section>
  );
}
