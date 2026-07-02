import { Car, Trash2, MapPin, Calendar, Phone, Home } from 'lucide-react';
import { Chip } from '@/app/components/Chip';
import { ServiceCard } from '@/app/components/ServiceCard';

const carFeatures = [
  'Full exterior hand wash',
  'Safe on all paint finishes',
  'Wheel and tire cleaning',
  'Spot-free rinse',
];

const binFeatures = [
  'Eliminates odors',
  'Removes bacteria & grime',
  'Leaves bins sparkling clean',
  'Service on trash day',
];

const homeFeatures = [
  'Siding, brick & stucco cleaning',
  'Driveways, sidewalks, patios & decks washing',
  'Storefront & facade washing',
  'Safe on all exterior surfaces',
];

const chips = [
  { icon: MapPin, text: 'McKinney, TX 75069 / 75070' },
  { icon: Calendar, text: 'Service on Trash Day' },
  { icon: Phone, text: 'Call 657-342-9683' },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-5 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2>Our Services</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From gleaming cars to sparkling homes and storefronts — we handle the dirty work so you
            don't have to.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            imgSrc="https://images.unsplash.com/photo-1779121467076-1080a7e7d3d4?crop=entropy&cs=tinysrgb&fit=max&fm=webp&w=600&q=80"
            imgAlt="Clean light blue home exterior"
            icon={Home}
            title="Home & Business Wash"
            description="Restore your home's curb appeal with a thorough pressure wash that removes years of dirt, mildew, and grime."
            features={homeFeatures}
            pricing="Quote"
            unit="per job"
            subtext="Clear pricing before work starts"
          />

          <ServiceCard
            imgSrc="https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?crop=entropy&cs=tinysrgb&fit=max&fm=webp&w=600&q=80"
            imgAlt="Car wash service close up"
            icon={Car}
            title="Car Wash"
            description="Full exterior wash that blasts away grime, road salt, and dirt - leaving your car looking showroom fresh."
            features={carFeatures}
            pricing="$40"
            unit="per car"
            subtext="Wax and tire shine for an extra $15"
          />

          <ServiceCard
            imgSrc="https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?crop=entropy&cs=tinysrgb&fit=max&fm=webp&w=600&q=80"
            imgAlt="Black wheeled trash bin ready for cleaning"
            icon={Trash2}
            title="Trash Can Wash"
            description="High-pressure cleaning that eliminates odors, bacteria, and grime from your bins. Clean Bins. Healthier Homes."
            features={binFeatures}
            pricing="$20"
            unit="per bin"
            subtext="Each additional bin: $10"
          />
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-4"
          role="list"
          aria-label="Service details"
        >
          {chips.map(chip => (
            <Chip
              key={chip.text}
              icon={chip.icon}
              label={chip.text}
              bgColor="bg-card"
              borderColor="border-border"
              iconColor="text-primary"
              textColor="text-muted-foreground"
              role="listitem"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
