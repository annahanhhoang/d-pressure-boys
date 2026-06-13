import { Phone, MapPin } from 'lucide-react';
import { SiInstagram } from '@icons-pack/react-simple-icons';

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p>© {new Date().getFullYear()} D Pressure Boys</p>

        {/* Info */}
        <div className="flex items-center flex-wrap gap-6 text-sm font-medium">
          <a
            href="tel:6573429683"
            className="flex items-center gap-2 text-primary"
            style={{
              transition: 'color 0.2s',
            }}
          >
            <Phone size={13} />
            657-342-9683
          </a>
          <a
            href="https://www.instagram.com/d_pressure_boys"
            className="flex items-center gap-2 text-primary"
            style={{
              transition: 'color 0.2s',
            }}
          >
            <SiInstagram size={13} />
            d_pressure_boys
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={13} />
            McKinney, TX 75069 / 75070
          </span>
        </div>

        {/* Copyright */}
        <div className="font-medium text-sm">
          <p>
            Website made by{' '}
            <a
              href="https://annahoang.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              AsiAnna
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
