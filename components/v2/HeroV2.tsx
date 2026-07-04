"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const floatingImages = [
  {
    src: "/models/bridal-glow-portrait.webp",
    alt: "Botanical shadow",
    speed: -0.1,
    className:
      "absolute top-[15%] left-[8%] w-[14vw] min-w-[120px] rotate-[-3deg] shadow-2xl",
  },
  {
    src: "/models/salon-interior-arches.webp",
    alt: "Architectural detail",
    speed: 0.25,
    className:
      "absolute bottom-[12%] right-[6%] w-[12vw] min-w-[100px] rotate-[2deg] shadow-2xl",
  },
  {
    src: "/models/eucalyptus-minimalist.webp",
    alt: "Botanical element",
    speed: -0.15,
    className:
      "absolute top-[55%] left-[72%] w-[10vw] min-w-[80px] rotate-[-1deg] shadow-xl",
  },
];

export default function HeroV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroEl = sectionRef.current;
      if (!heroEl) return;

      imagesRef.current.forEach((img, i) => {
        if (!img) return;
        gsap.to(img, {
          y: () => floatingImages[i].speed * window.innerHeight * 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: heroEl,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      ScrollTrigger.create({
        trigger: heroEl,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const titleEl = heroEl.querySelector(".hero-title");
          if (titleEl) {
            gsap.set(titleEl, {
              scale: 1 + progress * 0.15,
              opacity: 1 - progress * 0.8,
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      imagesRef.current.forEach((img) => {
        if (!img) return;
        const rect = img.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.03;
        const dy = (e.clientY - cy) * 0.03;
        gsap.to(img, {
          x: dx,
          y: dy,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="hero-title absolute inset-0 z-10 flex items-center justify-center">
        <h1 className="w-[80vw] text-center font-serif text-[18vw] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-cover bg-center"
          style={{
            backgroundImage: "url(/models/hero-fluid-stone.mp4)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          AURELIA
        </h1>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-0"
        >
          <source src="/models/hero-fluid-stone.mp4" type="video/mp4" />
        </video>
      </div>

      {floatingImages.map((img, i) => (
        <div
          key={i}
          ref={(el) => { imagesRef.current[i] = el; }}
          className={img.className}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={300}
            height={400}
            className="h-auto w-full object-cover transition-transform duration-500 ease-out"
          />
        </div>
      ))}

      <div className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#6E6863]">
          Your private sanctuary in the heart of Trichy
        </p>
      </div>
    </section>
  );
}
