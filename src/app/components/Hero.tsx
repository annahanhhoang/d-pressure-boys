import { Phone, MapPin } from 'lucide-react';
import { Chip } from '@/app/components/Chip';
import ImageWithFallback from '@/app/components/ImageWithFallback';

const HERO_URL =
  'https://images.unsplash.com/photo-1592365559101-19adfefdf294?crop=entropy&cs=tinysrgb&fit=max&fm=webp&w=1600&q=80';

// Provide a low-quality placeholder for the hero image (base64 tiny blurred preview)
// This gives a colored background instantly while the full image loads (LQIP pattern).
const HERO_LQIP =
  'data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoIAAUAAkA4JZACdAEO/gHOAAA=';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        {/* fetchpriority="high" + loading="eager" ensures the LCP image starts loading immediately */}
        <ImageWithFallback
          src={HERO_URL}
          alt=""
          aria-hidden="true"
          role="presentation"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1600}
          height={1067}
          style={{ backgroundImage: `url(${HERO_LQIP})`, backgroundSize: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* id="main-content" fulfils the skip-link target (WCAG 2.4.1 / Bypass Blocks) */}
      <div id="main-content" className="relative z-10 text-center px-5 max-w-3xl mx-auto pt-16">
        <div className="inline-block">
          <Chip icon={MapPin} label="McKinney, TX · Serving 75069 & 75070" />
        </div>
        <h1 id="hero-heading" className="text-white mb-4">
          SPOTLESS. <span className="text-accent">EVERY TIME.</span>
        </h1>
        <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto">
          Home &amp; business exterior washing, car wash, trash can cleaning - all in McKinney. A
          clean that speaks for itself.
        </p>

        <a
          href="tel:6573429683"
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2"
          aria-label="Call D Pressure Boys at 657-342-9683"
        >
          <Phone size={20} aria-hidden="true" />
          Call Now - 657-342-9683
        </a>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-white/60" />
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
