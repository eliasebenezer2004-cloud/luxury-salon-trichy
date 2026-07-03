"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const rituals = [
  {
    number: "01",
    title: "The Bridal Artistry Portfolio",
    description:
      "Bespoke beauty alignment designed for timeless elegance. Setting a new premium standard above traditional options like Zazzle and Pretty Queen.",
    type: "image" as const,
    src: "/models/bridal-glow-portrait.webp",
  },
  {
    number: "02",
    title: "The Hair Artistry Lab",
    description:
      "Structural hair correction, organic color restorations, and premium steam-infused botanical conditioning paths.",
    type: "video" as const,
    src: "/models/hair-spa-fluidity.mp4",
  },
  {
    number: "03",
    title: "Advanced Skin Formulations",
    description:
      "Cellular rejuvenation treatments utilizing localized organic raw clays, gold leaf elements, and modern dermal serums.",
    type: "image" as const,
    src: "/models/clay-bowl-botanical.webp",
  },
  {
    number: "04",
    title: "Deep Tissue Restoration",
    description:
      "Therapeutic hot basalt stone layouts combined with intentional lymphatic drainage sequences.",
    type: "image" as const,
    src: "/models/hot-stones-towel.webp",
  },
];

export default function RitualsPan() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".ritual-panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () =>
            `+=${(trackRef.current?.offsetWidth ?? 0) - window.innerWidth}`,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-[#FAF9F6] md:h-screen md:overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex flex-col md:h-screen md:w-[400vw] md:flex-row"
      >
        {rituals.map((ritual, i) => (
          <div
            key={i}
            className="ritual-panel group relative flex min-h-[80vh] w-full flex-shrink-0 items-center justify-center overflow-hidden md:h-screen md:w-screen"
          >
            {ritual.type === "video" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover transition-all duration-[0.8s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              >
                <source src={ritual.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={ritual.src}
                alt={ritual.title}
                fill
                className="object-cover transition-all duration-[0.8s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAF9F6]/90" />

            <div className="pointer-events-none relative z-10 flex h-full w-full flex-col justify-between p-8 md:p-16">
              <span className="font-serif text-2xl text-[#FAF9F6] md:text-4xl">
                {ritual.number}
              </span>

              <div className="max-w-lg">
                <h3 className="font-serif text-2xl text-[#3E3A37] md:text-4xl">
                  {ritual.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-[#6E6863] md:text-base">
                  {ritual.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
