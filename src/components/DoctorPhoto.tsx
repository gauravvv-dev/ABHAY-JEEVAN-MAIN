type DoctorPhotoProps = {
  src: string | null;
  alt: string;
  className?: string;
  missingFile: string;
  width?: number;
  height?: number;
};

export function DoctorPhoto({ src, alt, className, missingFile, width, height }: DoctorPhotoProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        width={width}
        height={height}
      />
    );
  }

  return (
    <div
      className={`${className ?? ""} flex flex-col items-center justify-center bg-brand-soft p-4 text-center`}
      role="img"
      aria-label={`${alt} — photo pending`}
    >
      <span className="text-xs font-medium text-muted-foreground">{alt}</span>
      <span className="mt-2 text-[10px] leading-snug text-muted-foreground/80">
        Add image: <span className="font-mono">{missingFile}</span>
      </span>
    </div>
  );
}
