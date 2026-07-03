"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const philosophyText =
  "True luxury is born from quiet intervals. At Aurelia, we strip away the noise of the external grid to curate an internal ecosystem of recovery. We do not chase superficial, fast aesthetic transformations; instead, we nurture sustainable wellbeing by honoring the natural rhythm of your skin, hair, and biological self. Every formula is measured, every motion deliberate, every moment designed to anchor you back to complete structural balance.";

export default function PhilosophyBlock() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        const words = textRef.current.querySelectorAll<HTMLSpanElement>(".word");
        gsap.fromTo(
          words,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.03,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 75%",
              end: "bottom 25%",
              scrub: 1,
            },
          }
        );
      }

      if (leftRef.current) {
        gsap.to(leftRef.current, {
          y: () => window.innerHeight * 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (rightRef.current) {
        gsap.to(rightRef.current, {
          y: () => -window.innerHeight * 0.22,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#F0EBE1] py-48"
    >
      <div className="relative mx-auto max-w-4xl px-4">
        <div
          ref={leftRef}
          className="absolute -left-[180px] top-[10%] hidden shadow-xl lg:block"
        >
          <Image
            src="/models/eucalyptus-minimalist.webp"
            alt=""
            width={280}
            height={400}
            className="object-cover"
            style={{ width: 280, height: 400 }}
          />
        </div>

        <div
          ref={rightRef}
          className="absolute -right-[140px] bottom-[5%] hidden shadow-xl lg:block"
        >
          <Image
            src="/models/massage-oil-botanical.webp"
            alt=""
            width={240}
            height={360}
            className="object-cover"
            style={{ width: 240, height: 360 }}
          />
        </div>

        <p
          ref={textRef}
          className="font-sans text-lg leading-relaxed text-[#3E3A37] md:text-2xl"
        >
          {philosophyText.split(" ").map((word, i) => (
            <span key={i} className="word inline-block opacity-15">
              {word}&nbsp;
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
