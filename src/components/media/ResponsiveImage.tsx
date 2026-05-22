import Image from 'next/image';
import type { ImgHTMLAttributes } from 'react';

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
}

export default function ResponsiveImage({ src, alt, width = 1200, height = 800, priority = false, fill = false, ...rest }: ResponsiveImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      style={{ width: fill ? '100%' : '100%', height: fill ? '100%' : 'auto', objectFit: 'cover' }}
      priority={priority}
      {...rest}
    />
  );
}
