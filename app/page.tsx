"use client";

import { useEditorialEngine } from "@/hooks/useEditorialEngine";
import HeroV2 from "@/components/v2/HeroV2";
import PhilosophyBlock from "@/components/PhilosophyBlock";
import RitualsPan from "@/components/RitualsPan";
import TestimonialMarquee from "@/components/TestimonialMarquee";

export default function Home() {
  useEditorialEngine();

  return (
    <div
      id="root-viewport"
      className="w-full min-h-screen"
      style={{
        transition:
          "background-color 1.2s cubic-bezier(0.25, 1, 0.5, 1), color 1.2s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
    >
      <HeroV2 />
      <PhilosophyBlock />
      <RitualsPan />
      <TestimonialMarquee />
    </div>
  );
}
