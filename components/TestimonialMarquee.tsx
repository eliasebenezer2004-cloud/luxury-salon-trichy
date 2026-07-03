"use client";

import { useEffect, useRef, useState } from "react";

const MARQUEE_TEXT =
  "• AURELIA SETS A HIGHER STANDARD OF COMFORT • REINVENTING HOLISTIC WELLNESS IN TRICHY • AN ABSOLUTE SANCTUARY FROM THE OUTSIDE WORLD • EVERY TREATMENT WAS METICULOUSLY POISED •";

export default function TestimonialMarquee() {
  const innerRef = useRef<HTMLDivElement>(null);
  const [scrollDir, setScrollDir] = useState(1);
  const [scrollVel, setScrollVel] = useState(0);

  useEffect(() => {
    let lastY = 0;
    let rafId: number;

    const onScroll = () => {
      const dy = window.scrollY - lastY;
      setScrollDir(dy >= 0 ? 1 : -1);
      setScrollVel(Math.min(Math.abs(dy), 100));
      lastY = window.scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const baseDuration = 40;
    const speedFactor = Math.max(0.5, 1 - scrollVel * 0.008);
    const duration = baseDuration * speedFactor;

    el.style.animationDuration = `${duration}s`;
    el.style.animationDirection = scrollDir >= 0 ? "normal" : "reverse";
  }, [scrollDir, scrollVel]);

  const items = Array(4).fill(MARQUEE_TEXT);

  return (
    <div className="w-full overflow-hidden border-y border-[#E8E2D2] bg-[#F0EBE1] py-16">
      <div
        ref={innerRef}
        className="marquee-track flex whitespace-nowrap"
        style={{
          animationName: "marquee",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {items.map((text, i) => (
          <span
            key={i}
            className="font-serif text-4xl tracking-wide text-[#3E3A37] md:text-5xl"
          >
            {text}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
