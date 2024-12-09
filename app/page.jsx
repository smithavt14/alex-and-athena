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
        <div className="relative z-10 w-5/6 md:w-1/2">
          <Title className="w-full h-full" />
        </div>
        <ScrollButton targetId="thank-you" />
      </section>

      <Section id="thank-you">
        <h1 className="text-4xl text-slate-950">
          {`Thank You`}
        </h1>
        <div className="text-lg text-slate-950 text-center md:columns-2 md:gap-8 md:text-left space-y-4">
          <p>{`Why hello there! Thank you for visiting our little site. Living so far away in Shanghai, it can be hard for family and friends to keep up with everything we're up to. That's why we created this space—to share our story, highlight moments from our lives together in China and Asia, and reconnect with you all across the miles.`}</p>

          <p>{`We've included photos and stories that give a glimpse into our world, and we hope you enjoy getting to know this chapter of our journey a little better. We're so grateful for your love and support, no matter how far apart we may be.`}</p>

          <p>{`Thank you for being part of our lives, and we can't wait to celebrate with you soon!`}</p>
        </div>
        <div className="w-1/2">
          <CloudinaryImage
            src="alex-and-athena/thanks/1"
            alt="Description of image"
            width={800}
            height={600}
            className="rounded-lg shadow-lg w-full"
            onClick={() => setSelectedImage("alex-and-athena/thanks/1")}
          />
        </div>
        <ScrollButton targetId="our-story" />
      </Section>

      <Section id="our-story">
        <h1 className="text-4xl text-slate-950">Our Story</h1>
        <div className="text-lg text-slate-950 text-center md:columns-2 md:gap-8 md:text-left space-y-4">
          <p>{`In the spring of 2022, the entire city of Shanghai went into lockdown due to Covid. Nobody was allowed to leave their homes, and we were subjected to daily Covid tests. A positive result meant being forcibly transferred to a quarantine facility.`}</p>

          <p>{`Needless to say, it was a stressful and isolating time that lasted for two months.`}</p>

          <p>{`When the lockdown finally lifted, allowing us to leave our apartments and reconnect with neighbors, friends, and family, everyone seized the opportunity.`}</p>

          <p>{`A mutual friend of Athena's and mine invited us—separately—to a small gathering at a local bar called Shanghai Love. The name couldn't have been more fitting. That night, Athena and I met for the first time and immediately clicked.`}</p>

          <p>{`From that night on, Athena and I started dating. Much of our time together was shaped by our love for sports. Our early dates often involved runs, bike rides, and gym sessions -- much to Athena's dismay (hah!).`}</p>
        </div>
        <ImageGrid
          albumName="alex-and-athena/our-story"
          imageCount={6}
          onImageSelect={setSelectedImage}
        />
        <ScrollButton targetId="shanghai" />
      </Section>

      <Section id="shanghai">
        <h1 className="text-4xl text-slate-950">Shanghai</h1>
        <div className="text-lg text-slate-950 text-center md:columns-2 md:gap-8 md:text-left space-y-4">
          <p>{`Shanghai has been at the heart of our stories for over a decade—a city where our dreams brought us and where we grew into the people we are today.`}</p>

          <p>{`Athena left Vancouver, leaving behind a career as a hygienist to chase her passion for fashion and advertising. Alex, after three years in the serene mountains of Guilin, came to Shanghai with ambitions of breaking into the tech industry.`}</p>

          <p>{`In this vibrant, fast-paced city, we've built careers, formed lifelong friendships, joined inspiring communities, and discovered a place that constantly pushes us to grow. Shanghai hasn't just been a home—it's been a catalyst for the lives we've built, and the life we're building together.`}</p>

          <p>{`Now, we live in our “dream” apartment in the heart of the city with our dog, Heizi. We moved here in late summer 2023, and every day we wake up grateful to call such a beautiful space our home. Athena spends her time tending to our ever-growing collection of green plants, while Alex enjoys cooking and taking on the handy work around the house.`}</p>

          <p>{`Our apartment has become a hub for gatherings with friends—whether hosting dinners, celebrations, or just casual hangouts, it's one of the things we love most about our life here. If we ever leave Shanghai, it will be with heavy hearts—not just for the city, but for this home that holds so many cherished memories.`}</p>
        </div>
        <ImageGrid
          albumName="alex-and-athena/shanghai"
          imageCount={6}
          onImageSelect={setSelectedImage}
        />
      </Section>

      <Section id="life">
        <h1 className="text-4xl text-slate-950">Life</h1>
        <p className="text-lg text-slate-950">{`We met on the first night after the great Shanghai lockdown of 2022. Introduced by a mutual friend at a party, we clicked instantly and have been building this wonderful life together ever since. We're so excited to celebrate our next chapter with you!`}</p>
      </Section>

      <Section id="faq">
        <h1 className="text-4xl text-slate-950">FAQ</h1>
        <p className="text-lg text-slate-950">{`We met on the first night after the great Shanghai lockdown of 2022. Introduced by a mutual friend at a party, we clicked instantly and have been building this wonderful life together ever since. We're so excited to celebrate our next chapter with you!`}</p>
      </Section>

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