'use client'
import { CldImage } from 'next-cloudinary';
import { useState, useEffect } from 'react';

export default function CloudinaryImage({ src, alt, width, height, className, onClick, isExpanded }) {
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch(`/api/cloudinary?publicId=${encodeURIComponent(src)}`);
        const data = await response.json();
        setMetadata(data.metadata.custom);
      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    };

    fetchMetadata();
  }, [src]);

  if (isExpanded) {
    return (
      <div className="flex flex-col items-center gap-4">
        <CldImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
        <p className="text-white text-center px-4">
          {metadata?.alt}
        </p>
      </div>
    );
  }

  return (
    <div className="relative break-inside-avoid group cursor-pointer max-w-fit rounded-lg" onClick={onClick}>
      <CldImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <p className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {metadata?.alt}
        </p>
      </div>
    </div>
  );
} 