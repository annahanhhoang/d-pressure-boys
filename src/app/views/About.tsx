import { Star, Award, Heart } from 'lucide-react';
import { Chip } from '@/app/components/Chip';
import ImageWithFallback from '@/app/components/ImageWithFallback';
import ownersPhoto from '@/assets/owners-photo.webp';

export function About() {
  const values = [
    { icon: Star, label: 'Hard Working' },
    { icon: Award, label: 'Responsible' },
    { icon: Heart, label: 'Community First' },
  ];

  return (
    <section id="about" className="py-24 px-5 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute top-4 left-4 -right-4 -bottom-4 rounded-xl border-2 border-solid border-[#0ea5e94d]" />
            <ImageWithFallback
              src={ownersPhoto}
              alt="Donavan Tran and Kip Killough, owners of D Pressure Boys"
              width={450}
              height={600}
              loading="lazy"
              decoding="async"
              className="block relative z-1 w-full h-full max-h-[520px] object-cover object-top rounded-xl"
            />
            <div className="absolute z-2 -bottom-5 right-6 bg-accent text-accent-foreground text-barlow rounded-xl px-5 py-3 shadow-lg">
              <p className="font-extrabold text-2xl leading-none">100%</p>
              <p className="font-semibold text-xs tracking-wider">SATISFACTION</p>
            </div>
          </div>

          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Meet the founders
            </p>
            <h2 className="mb-6">
              STUDENT-OWNED. LOCAL. <span className="text-primary">DEPENDABLE.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                D Pressure Boys is a young local company with a simple promise: show up, work hard,
                communicate clearly, and leave each job looking cleaner than it started.
              </p>
              <p>
                Founded by Donavan Tran and Kip Killough, the company is focused on building a
                dependable local business through discipline, customer service, and steady work.
              </p>
              <p>
                Donavan brings the drive behind the original D Pressure Boys idea and is hands-on
                with scheduling, service, and quality.
              </p>
              <p>
                Kip helps keep jobs moving with attention to detail and a practical eye for what
                each property needs. He offers detail-focused exterior cleaning support and is a
                reliable help on residential and business jobs.
              </p>
            </div>

            {/* Value pills */}
            <div className="flex flex-wrap gap-2">
              {values.map(({ icon, label }) => (
                <Chip key={label} icon={icon} label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
