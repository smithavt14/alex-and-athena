'use client'
import { useState } from 'react';
import { Title } from "@components/Title";
import ScrollButton from "@components/ScrollButton";
import Section from "@components/Section";
import CloudinaryImage from '@components/CloudinaryImage';
import { sections } from '@content/sections';


export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Section id="home">
        <div className="relative z-10 w-5/6 md:w-1/2">
          <Title className="w-full h-full" />
        </div>
        <ScrollButton targetId="thank-you" />
      </Section>

      {Object.values(sections).map((section) => (
        <Section
          key={section.id}
          section={section}
          onImageSelect={setSelectedImage}
        />
      ))}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-7xl max-h-[80vh]">
            <CloudinaryImage
              src={selectedImage}
              alt=""
              width={1200}
              height={900}
              className="rounded-lg object-contain max-h-[80vh] overflow-hidden"
              isExpanded={true}
            />
          </div>
        </div>
      )}
    </>
  );
}