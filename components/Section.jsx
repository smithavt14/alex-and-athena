import ScrollButton from '@components/ScrollButton';
import CloudinaryImage from '@components/CloudinaryImage';
import ImageGrid from '@components/ImageGrid';

export default function Section({ id, children, section, onImageSelect }) {
  // If no section data is provided, render the basic section (for the home section)
  if (!section) {
    return (
      <section 
        id={id} 
        className="relative min-h-screen flex flex-col items-center justify-center box-border font-reenieBeanie overflow-hidden space-y-10 py-8 md:py-16 lg:py-24 xl:py-32"
      >
        {children}
      </section>
    );
  }

  return (
    <section 
      id={section.id} 
      className="relative min-h-screen flex flex-col items-center justify-center box-border font-reenieBeanie overflow-hidden space-y-10 py-8 md:py-16 lg:py-24 xl:py-32"
    >
      <h1 className="text-4xl text-slate-950">{section.title}</h1>
      
      <div className="text-lg text-slate-950 text-center md:columns-2 md:gap-8 md:text-left space-y-4">
        {section.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {section.image && (
        <div className="w-1/2">
          <CloudinaryImage
            src={section.image}
            alt={section.title}
            width={800}
            height={600}
            className="rounded-lg shadow-lg w-full"
            onClick={() => onImageSelect(section.image)}
          />
        </div>
      )}

      {section.albumName && (
        <ImageGrid
          albumName={section.albumName}
          onImageSelect={onImageSelect}
        />
      )}

      {section.nextSection && <ScrollButton targetId={section.nextSection} />}
    </section>
  );
} 