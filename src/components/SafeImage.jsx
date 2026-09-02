import { useEffect, useState } from "react";

/**
 * Image with a clean fallback placeholder so a broken URL never breaks layout.
 */
export default function SafeImage({ src, alt, className = "", fallbackLabel = "Image unavailable", ...rest }) {
  const [failed, setFailed] = useState(!src);

  useEffect(() => {
    setFailed(!src);
  }, [src]);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt || fallbackLabel}
        className={`flex items-center justify-center bg-surface dot-pattern text-center text-xs font-semibold tracking-wide text-muted-foreground ${className}`}
      >
        <span className="px-3">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
