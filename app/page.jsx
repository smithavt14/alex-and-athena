'use client'
import { useState } from 'react';
import { Title } from "@components/Title";
import ScrollButton from "@components/ScrollButton";
import Section from "@components/Section";
import CloudinaryImage from '@components/CloudinaryImage';
import ImageGrid from '@components/ImageGrid';


export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative box-border">
        <div className="relative z-10 w-5/6 md:w-2/3">
          <Title className="w-full h-full" />
        </div>
        <ScrollButton targetId="thank-you" />
      </section>

      <Section id="thank-you">
        <h1 className="text-4xl text-slate-950">
          {`Thank You`}
        </h1>
        <p className="text-base text-slate-950">{`Hi! We're Alex and Athena, a couple based in Shanghai, China, where we share our home with our mischievous and lovable dog, Heizi. Our days are a mix of working on exciting projects, running (literally), and racing across Asia, with plenty of time spent around the dinner table enjoying meals with friends. As for how we met—it all started on the very first night after the great Shanghai lockdown of 2022. Introduced by a mutual friend at a party, we clicked instantly and have been building this wonderful life together ever since. We're so excited to celebrate our next chapter with you!`}</p>
        <CloudinaryImage
          src="alex-and-athena/thanks/1" 
          alt="Description of image"
          width={800}
          height={600}
          className="rounded-lg shadow-lg w-1/2"
          onClick={() => setSelectedImage("alex-and-athena/thanks/1")}
        />
        <ScrollButton targetId="our-story" />
      </Section>

      <Section id="our-story">
        <h1 className="text-4xl text-slate-950">Our Story</h1>
        <p className="text-base text-slate-950">{`We met on the first night after the great Shanghai lockdown of 2022. Introduced by a mutual friend at a party, we clicked instantly and have been building this wonderful life together ever since. We're so excited to celebrate our next chapter with you!`}</p>
        <ImageGrid 
          albumName="alex-and-athena/our-story"
          imageCount={6}
          onImageSelect={setSelectedImage}
        />
        <ScrollButton targetId="shanghai" />
      </Section>

      <Section id="shanghai">
        <h1 className="text-4xl text-slate-950">Shanghai</h1>
        <p className="text-base text-slate-950">{`We met on the first night after the great Shanghai lockdown of 2022. Introduced by a mutual friend at a party, we clicked instantly and have been building this wonderful life together ever since. We're so excited to celebrate our next chapter with you!`}</p>
      </Section>

      <Section id="life">
        <h1 className="text-4xl text-slate-950">Life</h1>
        <p className="text-base text-slate-950">{`We met on the first night after the great Shanghai lockdown of 2022. Introduced by a mutual friend at a party, we clicked instantly and have been building this wonderful life together ever since. We're so excited to celebrate our next chapter with you!`}</p>
      </Section>

      <Section id="faq">
        <h1 className="text-4xl text-slate-950">FAQ</h1>
        <p className="text-base text-slate-950">{`We met on the first night after the great Shanghai lockdown of 2022. Introduced by a mutual friend at a party, we clicked instantly and have been building this wonderful life together ever since. We're so excited to celebrate our next chapter with you!`}</p>
      </Section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-7xl max-h-[90vh]">
            <CloudinaryImage
              src={selectedImage}
              alt="Expanded view"
              width={1200}
              height={900}
              className="rounded-lg object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </>
  );
}