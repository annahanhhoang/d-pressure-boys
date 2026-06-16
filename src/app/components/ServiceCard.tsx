import { CheckCircle2, LucideProps } from 'lucide-react';
import ImageWithFallback from '@/app/components/ImageWithFallback';

interface ServiceCardProps {
  imgSrc: string;
  imgAlt: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  unit: string;
  subtext: string;
}

export function ServiceCard({
  imgSrc,
  imgAlt,
  icon: Icon,
  title,
  description,
  features,
  pricing,
  unit,
  subtext,
}: ServiceCardProps) {
  return (
    <article
      className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary transition-colors duration-300"
      aria-label={`${title} service`}
    >
      <div className="h-52 overflow-hidden bg-muted">
        <ImageWithFallback
          src={imgSrc}
          alt={imgAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8 text-muted-foreground">
        <div
          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
          aria-hidden="true"
        >
          <Icon size={24} className="text-primary" aria-hidden="true" />
        </div>
        <h3 className="mb-2 text-foreground">{title}</h3>
        <p className="mb-5">{description}</p>
        <ul className="space-y-2 mb-6" aria-label={`${title} features`}>
          {features.map(f => (
            <li key={f} className="flex items-center gap-2 text-sm">
              <CheckCircle2 size={15} className="text-primary shrink-0" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
        <div className="bg-muted rounded-xl p-4">
          <p className="text-xs uppercase tracking-wide font-semibold text-foreground">
            Starting at
          </p>
          <p className="text-foreground text-4xl font-extrabold">
            {pricing} <span className="text-base font-medium text-muted-foreground">{unit}</span>
          </p>
          <p className="text-xs mt-0.5">{subtext}</p>
        </div>
      </div>
    </article>
  );
}
