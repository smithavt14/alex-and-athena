'use client'
import { Title } from "@components/Title";
import ScrollButton from "@components/ScrollButton";
import Section from "@components/Section";

export default function Home() {
  return (
    <>
      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative box-border">
        <div className="relative z-10 w-5/6 md:w-2/3">
          <Title className="w-full h-full" />
        </div>
        <ScrollButton targetId="thank-you" />
      </section>

      <Section id="thank-you">
        <h1 className="text-4xl text-slate-950">Thank You</h1>
        <p className="text-base text-slate-950">Hi! We're Alex and Athena, a couple based in Shanghai, China, where we share our home with our mischievous and lovable dog, Heizi. Our days are a mix of working on exciting projects, running (literally), and racing across Asia, with plenty of time spent around the dinner table enjoying meals with friends. As for how we met—it all started on the very first night after the great Shanghai lockdown of 2022. Introduced by a mutual friend at a party, we clicked instantly and have been building this wonderful life together ever since. We're so excited to celebrate our next chapter with you!</p>
      </Section>

      <Section id="our-story">
        <h1 className="text-4xl text-slate-950">Our Story</h1>
        <p className="text-base text-slate-950">We met on the first night after the great Shanghai lockdown of 2022. Introduced by a mutual friend at a party, we clicked instantly and have been building this wonderful life together ever since. We're so excited to celebrate our next chapter with you!</p>
      </Section>

      {/* Continue with other sections... */}
    </>
  );
}