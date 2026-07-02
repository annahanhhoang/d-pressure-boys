import { Phone, MapPin } from 'lucide-react';
import { SiInstagram } from '@icons-pack/react-simple-icons';

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-5" aria-label="Site footer">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p>© {new Date().getFullYear()} D Pressure Boys</p>

        {/* Contact info */}
        <nav
          aria-label="Contact links"
          className="flex items-center flex-wrap gap-6 text-sm font-medium"
        >
          <a
            href="tel:6573429683"
            className="flex items-center gap-2 text-primary hover:underline"
            aria-label="Call D Pressure Boys at 657-342-9683"
          >
            <Phone size={14} aria-hidden="true" />
            657-342-9683
          </a>
          <a
            href="https://www.instagram.com/d_pressure_boys"
            className="flex items-center gap-2 text-primary hover:underline"
            aria-label="D Pressure Boys on Instagram (opens in new tab)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram size={14} aria-hidden="true" />
            d_pressure_boys
          </a>
          <address className="flex items-center gap-2 not-italic">
            <MapPin size={14} aria-hidden="true" />
            McKinney, TX 75069 / 75070
          </address>
        </nav>

        {/* Attribution */}
        <p className="font-medium text-sm">
          Website made by{' '}
          <a
            href="https://annahoang.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
            aria-label="AsiAnna's portfolio (opens in new tab)"
          >
            AsiAnna
          </a>
        </p>
      </div>
    </footer>
  );
}
