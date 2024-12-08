import CloudinaryImage from './CloudinaryImage';

export default function ImageGrid({ albumName, imageCount, onImageSelect }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full px-4">
      {[...Array(imageCount)].map((_, i) => (
        <div 
          key={i + 1} 
          className="cursor-pointer transition-transform hover:scale-105"
          onClick={() => onImageSelect(`${albumName}/${i + 1}`)}
        >
          <CloudinaryImage
            src={`${albumName}/${i + 1}`}
            alt={`Image ${i + 1}`}
            width={400}
            height={300}
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      ))}
    </div>
  );
} 