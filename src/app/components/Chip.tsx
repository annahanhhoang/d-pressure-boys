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
}

export function Chip({
  icon: Icon,
  className,
  label,
  bgColor,
  borderColor,
  textColor,
  iconColor,
}: ChipProps) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full font-semibold tracking-widest uppercase text-xs px-4 py-1.5 ${bgColor ?? 'bg-primary/10'} ${borderColor ?? 'border-bg-primary/20'} ${textColor ?? 'text-primary'} ${className ?? ''}`}
    >
      <Icon size={14} strokeWidth={2.5} className={iconColor ?? textColor} />
      {label}
    </div>
  );
}
