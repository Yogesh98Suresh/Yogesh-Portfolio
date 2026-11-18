import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/10 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-wider text-text flex items-center gap-2 group">
          <span className="w-3 h-3 rounded-full bg-primary group-hover:scale-125 transition-transform"></span>
          <span>{PORTFOLIO_DATA.personal.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-textMuted hover:text-text transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium rounded-full bg-primary/20 text-primary border border-primary/40 hover:bg-primary/30 transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-text p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base text-textMuted hover:text-text py-2 border-b border-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex items-center justify-between">
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textMuted hover:text-text"
            >
              <Github size={20} />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textMuted hover:text-text"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
