"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current || !videoRef.current) return;

    const text = titleRef.current.innerText;
    titleRef.current.innerHTML = text
      .split("")
      .map((char) =>
        char === " "
          ? `<span class="inline-block">&nbsp;</span>`
          : `<span class="inline-block letter">${char}</span>`
      )
      .join("");

    const letters = titleRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 80, filter: "blur(12px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.04,
        duration: 1.6,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      }
    );

    gsap.to(videoRef.current, {
      scale: 1.15,
      scrollTrigger: {
        trigger: "#hero-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="hero-container"
      className="relative h-screen w-full overflow-hidden bg-[#FAF9F6]"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-multiply"
      >
        <source src="/models/hero-fluid-stone.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAF9F6]/20" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <h1
          ref={titleRef}
          className="font-serif text-6xl font-light tracking-tight text-[#3E3A37] md:text-9xl"
        >
          Breathe. Restore. Evolve.
        </h1>
        <p className="mt-8 font-sans text-sm uppercase tracking-[0.3em] text-[#6E6863] md:text-base">
          Your private sanctuary in the heart of Trichy
        </p>
      </div>
    </section>
  );
}
