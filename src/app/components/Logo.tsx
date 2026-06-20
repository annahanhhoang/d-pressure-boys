import ImageWithFallback from '@/app/components/ImageWithFallback';
import logo from '@/assets/images/logo.svg';

export function Logo() {
  return (
    <a href="/" aria-label="logo">
      <div className="flex items-center justify-center">
        <ImageWithFallback
          src={logo}
          alt="D Pressure Boys Logo"
          width={64}
          height={64}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
      </div>
    </a>
  );
}
