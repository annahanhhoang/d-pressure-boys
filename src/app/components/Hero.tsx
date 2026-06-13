import { Phone, MapPin } from 'lucide-react';
import { Chip } from '@/app/components/Chip';

const HERO_URL =
  'https://images.unsplash.com/photo-1592365559101-19adfefdf294?crop=entropy&cs=tinysrgb&fit=max&fm=webp&w=1600&q=80';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={HERO_URL}
          alt="Professional car wash with water spray on wheel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto pt-16">
        <div className="inline-block">
          <Chip icon={MapPin} label="McKinney, TX· Serving 75069 & 75070." />
        </div>
        <h1 className="text-white mb-4">
          SPOTLESS. <span className="text-primary">EVERY TIME.</span>
        </h1>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Home & business exterior washing, car wash, trash can cleaning - all in McKinney. A clean
          that speaks for itself.
        </p>
        <a
          href="tel:6573429683"
          className="inline-flex items-center gap-3 bg-primary px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
        >
          <Phone size={20} />
          Call Now - 657-342-9683
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <div className="w-px h-10 bg-white/60" />
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
