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
        className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between"
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
          >
            <Phone size={14} />
            657-342-9683
          </a>
          <button
            onClick={onToggleTheme}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            {dark ? (
              <Sun size={16} className="text-primary" />
            ) : (
              <Moon size={16} className="text-muted-foreground" />
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
              <Sun size={16} className="text-primary" />
            ) : (
              <Moon size={16} className="text-muted-foreground" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation menu"
            className="w-9 h-9 flex items-center justify-center"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-5 pb-4 flex flex-col gap-3">
          {navLinks.map(l => (
            <button
              key={l.id}
              aria-label={`mobile nav bar ${l.label}`}
              onClick={() => scrollTo(l.id)}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              {l.label}
            </button>
          ))}
          <a
            href="tel:6573429683"
            className="flex items-center gap-1.5 text-sm font-medium text-primary py-1"
          >
            <Phone size={14} />
            657-342-9683
          </a>
        </div>
      )}
    </header>
  );
}
