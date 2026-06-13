import { Droplets } from "lucide-react";

export function Logo() {

  return (
    <button aria-label="home" className="cursor-pointer flex items-center gap-4 text-decoration-none">
      <div className="w-[38px] h-[38px] bg-primary flex items-center justify-center rounded-full">
        <Droplets size={20} strokeWidth={2.5} />
      </div>
      <span className="text-barlow font-extrabold text-xl tracking-wider leading-none">
        D PRESSURE BOYS
      </span>
    </button>
  );
}
