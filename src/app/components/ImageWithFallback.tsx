import React, { memo, useState } from 'react';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Rendered width in px — helps browsers avoid layout shift (CLS) */
  imgWidth?: number;
  /** Rendered height in px — helps browsers avoid layout shift (CLS) */
  imgHeight?: number;
}

/**
 * Renders an <img> with lazy loading and async decoding by default.
 * Falls back to a placeholder SVG on error.
 *
 * WCAG / performance notes
 * - loading="lazy"    → defers off-screen images (improves LCP for above-fold)
 * - decoding="async"  → browser decodes on background thread
 * - width/height      → prevents CLS; override with imgWidth/imgHeight props
 * - alt required      → passed through from caller (enforced by React.ImgHTMLAttributes)
 */
const ImageWithFallback = memo(
  ({
    src,
    alt,
    style,
    className,
    imgWidth,
    imgHeight,
    loading = 'lazy',
    decoding = 'async',
    ...rest
  }: ImageWithFallbackProps) => {
    const [didError, setDidError] = useState(false);

    if (didError) {
      return (
        <div
          className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
          style={style}
          role="img"
          aria-label={alt ?? 'Image unavailable'}
        >
          <div className="flex items-center justify-center w-full h-full">
            <img
              src={ERROR_IMG_SRC}
              alt=""
              aria-hidden="true"
              data-original-url={src}
              width={imgWidth ?? 88}
              height={imgHeight ?? 88}
            />
          </div>
        </div>
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        loading={loading}
        decoding={decoding}
        width={imgWidth}
        height={imgHeight}
        onError={() => setDidError(true)}
        {...rest}
      />
    );
  }
);
export default ImageWithFallback;
