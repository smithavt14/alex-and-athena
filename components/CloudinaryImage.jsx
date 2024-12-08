import { CldImage } from 'next-cloudinary';

export default function CloudinaryImage({ src, alt, ...props }) {
  return (
    <CldImage
      src={src}
      alt={alt}
      width={props.width || 800}
      height={props.height || 600}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      loading="lazy"
      {...props}
    />
  );
} 