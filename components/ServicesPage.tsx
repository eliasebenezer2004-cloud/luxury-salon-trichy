"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skinMenu = [
  {
    name: "The Aurelia Signature Facial",
    duration: "90 Mins",
    price: "₹4,500",
    desc: "Deep dermal infusion using wild botanical serums, manual lymphatic drainage, and customized organic clay masks.",
  },
  {
    name: "Gold Leaf Cell Awakening",
    duration: "75 Mins",
    price: "₹6,000",
    desc: "Rejuvenation therapy utilizing 24k gold leaf elements to accelerate cell turnover and restore illumination.",
  },
  {
    name: "Custom Marine Peel Matrix",
    duration: "60 Mins",
    price: "₹3,800",
    desc: "Targeted alpha-hydroxy resurfacing paths derived from sustainable marine plants.",
  },
];

const hairMenu = [
  {
    name: "Botanical Keratin Realignment",
    duration: "120 Mins",
    price: "₹7,500",
    desc: "Clean plant-derived protein sealing process to eradicate texture damage and establish structural gloss.",
  },
  {
    name: "Essential Oil Steam Therapy",
    duration: "45 Mins",
    price: "₹3,000",
    desc: "High-pressure vapor treatment driving pure rosemary and cedar oil deep into root pathways.",
  },
  {
    name: "Sculpted Couture Styling & Cut",
    duration: "90 Mins",
    price: "₹2,500",
    desc: "Individualized profile assessment, architectural cutting execution, and natural blow-out presentation.",
  },
];

const nailMenu = [
  {
    name: "Sandstone Mineral Pedicure",
    duration: "75 Mins",
    price: "₹2,800",
    desc: "Warm mineral water soak, raw volcanic stone scrub, raw honey wrap, and detailed nail shaping.",
  },
  {
    name: "Alabaster Hand Sanctuary",
    duration: "60 Mins",
    price: "₹2,200",
    desc: "Intense exfoliation utilizing organic almond meal followed by a deep moisturizing cashmere wax glove treatment.",
  },
];

function MenuCanvasHeader() {
  const hdrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(hdrRef.current, {
        y: () => window.innerHeight * 0.17,
        ease: "none",
        scrollTrigger: {
          trigger: hdrRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, hdrRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={hdrRef} className="relative h-[60vh] w-full overflow-hidden">
      <Image
        src="/models/salon-interior-arches.webp"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#FAF9F6]/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="font-serif text-5xl text-[#3E3A37] md:text-7xl">
          The Canvas of Care
        </h2>
        <p className="mt-4 font-sans text-sm uppercase tracking-[0.25em] text-[#6E6863]">
          A comprehensive menu of deliberate aesthetic practices.
        </p>
      </div>
    </div>
  );
}

interface MenuRowProps {
  category: string;
  items: { name: string; duration: string; price: string; desc: string }[];
  imageSrc: string;
  imageAlt: string;
  invert?: boolean;
  hoverEffect?: boolean;
  reveal?: boolean;
}

function MenuRow({
  category,
  items,
  imageSrc,
  imageAlt,
  invert,
  hoverEffect,
  reveal,
}: MenuRowProps) {
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!reveal || !maskRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        maskRef.current,
        { x: "0%" },
        {
          x: "100%",
          duration: 0.9,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: imageWrapRef.current,
            start: "top 75%",
            end: "center 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, imageWrapRef);
    return () => ctx.revert();
  }, [reveal]);

  const textCol = invert ? "md:col-span-5 md:col-end-13" : "md:col-span-5";
  const imageCol = invert
    ? "md:col-span-6 md:col-start-1"
    : "md:col-span-6 md:col-start-7";

  return (
    <section className="w-full bg-[#FAF9F6] py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-12">
        <div className={textCol}>
          <h3 className="font-serif text-2xl uppercase tracking-[0.15em] text-[#8A9A86] md:text-3xl">
            {category}
          </h3>
          <div className="mt-10 space-y-10">
            {items.map((item, i) => (
              <div
                key={i}
                className={`group ${hoverEffect ? "cursor-pointer" : ""}`}
              >
                <div className="flex items-baseline justify-between">
                  <h4 className="font-serif text-xl text-[#3E3A37] transition-all duration-[0.3s] ease-linear group-hover:translate-x-3 group-hover:text-[#8A9A86] md:text-2xl">
                    {item.name}
                  </h4>
                  <span className="font-sans text-sm text-[#6E6863]">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 font-sans text-sm leading-relaxed text-[#6E6863] transition-all duration-[0.3s] ease-linear group-hover:translate-x-3">
                  {item.duration} — {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div ref={imageWrapRef} className={`relative h-[400px] overflow-hidden ${imageCol}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
          {reveal && (
            <div
              ref={maskRef}
              className="absolute inset-0 z-10 bg-[#E8E2D2]"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <MenuCanvasHeader />
      <MenuRow
        category="Advanced Skin Restorations"
        items={skinMenu}
        imageSrc="/models/serum-dropper-capture.webp"
        imageAlt="Serum dropper botanical"
        reveal
      />
      <MenuRow
        category="Therapeutic Hair & Scalp Artistry"
        items={hairMenu}
        imageSrc="/models/towel-steam-scalp.webp"
        imageAlt="Towel steam scalp treatment"
        invert
        hoverEffect
      />
      <MenuRow
        category="Intentional Hand & Foot Therapies"
        items={nailMenu}
        imageSrc="/models/manicure-sandstone.webp"
        imageAlt="Sandstone mineral manicure"
      />
    </main>
  );
}
