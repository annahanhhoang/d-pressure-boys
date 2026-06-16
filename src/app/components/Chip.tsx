import { LucideProps } from 'lucide-react';

interface ChipProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  iconColor?: string;
  className?: string;
  role?: string;
}

export function Chip({
  icon: Icon,
  className,
  label,
  bgColor,
  borderColor,
  textColor,
  iconColor,
  role,
}: ChipProps) {
  return (
    <div
      role={role}
      className={`flex items-center gap-2 rounded-full font-semibold tracking-widest uppercase text-xs px-4 py-1.5 ${bgColor ?? 'bg-accent/15'} ${borderColor ?? 'border-bg-accent/35'} ${textColor ?? 'text-accent'} ${className ?? ''}`}
    >
      <Icon size={14} strokeWidth={2.5} className={iconColor ?? textColor} aria-hidden="true" />
      {label}
    </div>
  );
}
