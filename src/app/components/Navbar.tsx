import { useState } from 'react';
import { Phone, Sun, Moon, Menu, X } from 'lucide-react';
import { Logo } from '@/app/components/Logo';

interface NavbarProps {
  dark: boolean;
  onToggleTheme: () => void;
}

const navLinks = [
  { label: 'Services', id: 'services' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'About', id: 'about' },
];

export function Navbar({ dark, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-5 h-24 flex items-center justify-between"
      >
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {l.label}
            </button>
          ))}
          <a
            href="tel:6573429683"
            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
            aria-label="Call us at 657-342-9683"
          >
            <Phone size={14} aria-hidden="true" />
            657-342-9683
          </a>
          <button
            onClick={onToggleTheme}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            {dark ? (
              <Sun size={16} className="text-primary" aria-hidden="true" />
            ) : (
              <Moon size={16} className="text-muted-foreground" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center"
          >
            {dark ? (
              <Sun size={16} className="text-primary" aria-hidden="true" />
            ) : (
              <Moon size={16} className="text-muted-foreground" aria-hidden="true" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="w-9 h-9 flex items-center justify-center"
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-background border-b border-border px-5 pb-4 flex flex-col gap-3"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map(l => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              {l.label}
            </button>
          ))}
          <a
            href="tel:6573429683"
            className="flex items-center gap-1.5 text-sm font-medium text-primary py-1"
            aria-label="Call us at 657-342-9683"
          >
            <Phone size={14} aria-hidden="true" />
            657-342-9683
          </a>
        </div>
      )}
    </header>
  );
}
