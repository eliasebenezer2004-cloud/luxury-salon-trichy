"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

const hubs = [
  {
    name: "Cantonment Hub",
    address: "18c, Warners Road, Cantonment, Trichy",
    image: "/models/cantonment-facade.webp",
    hours: "09:00 AM – 09:00 PM",
  },
  {
    name: "Thillai Nagar Hub",
    address: "2nd Floor, PLA Building, Thillai Nagar, Trichy",
    image: "/models/thillai-nagar-lounge.webp",
    hours: "09:00 AM – 09:00 PM",
  },
  {
    name: "KK Nagar Hub",
    address: "SMR Complex, KK Nagar Main Road, Trichy",
    image: "/models/kk-nagar-sanctuary.webp",
    hours: "09:00 AM – 09:00 PM",
  },
];

const artisans = [
  { name: "Ananya Ramachandran", role: "Creative Hair Director" },
  { name: "Meera Krishnan", role: "Lead Bridal Master" },
  { name: "Sarah D'Souza", role: "Advanced Dermal Specialist" },
  { name: "Priya Nadar", role: "Holistic Therapy Expert" },
  { name: "Rohan Alistair", role: "Senior Barber & Texture Stylist" },
  { name: "Nisha Pillai", role: "Color Correction Artisan" },
];

function HubCard({
  hub,
  index,
}: {
  hub: (typeof hubs)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    setTilt({ x: dy * -0.02, y: dx * 0.02 });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="relative h-[80vh] overflow-hidden border-r border-[#E8E2D2] last:border-r-0"
      style={{
        perspective: "1000px",
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={hub.image}
          alt={hub.name}
          fill
          className="object-cover opacity-70 grayscale transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:grayscale-0"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/40 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 z-20 p-12">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#6E6863]">
          Sanctuary 0{index + 1}
        </span>
        <h3 className="font-serif text-3xl text-[#3E3A37]">{hub.name}</h3>
        <p className="font-sans text-sm leading-relaxed text-[#6E6863]">
          {hub.address}
        </p>
        <p className="font-sans text-xs tracking-wider text-[#8A9A86]">
          {hub.hours}
        </p>
      </div>
    </motion.div>
  );
}

function ArtisanCard({
  artisan,
  index,
}: {
  artisan: (typeof artisans)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const tooltipX = useMotionValue(0);
  const tooltipY = useMotionValue(0);
  const springX = useSpring(tooltipX, { stiffness: 300, damping: 20 });
  const springY = useSpring(tooltipY, { stiffness: 300, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    tooltipX.set(e.clientX + 16);
    tooltipY.set(e.clientY - 32);
  };

  return (
    <div
      className="relative mb-8 inline-block w-full cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouse}
      style={{ breakInside: "avoid" }}
    >
      <Image
        src={`/models/artisan-avatar-${index + 1}.webp`}
        alt={artisan.name}
        width={600}
        height={800}
        className={`w-full object-cover transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          hovered ? "grayscale-0" : "grayscale"
        }`}
      />

      {hovered && (
        <motion.div
          className="pointer-events-none fixed z-50 border border-[#E8E2D2] bg-[#FAF9F6] px-4 py-2 font-sans text-xs"
          style={{
            left: springX,
            top: springY,
          }}
        >
          <p className="font-medium text-[#3E3A37]">{artisan.name}</p>
          <p className="text-[#6E6863]">{artisan.role}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main>
      <section className="w-full bg-[#FAF9F6] py-16">
        <div className="px-4 text-center">
          <h2 className="font-serif text-4xl text-[#3E3A37] md:text-6xl">
            The Regional Sanctuary Hubs
          </h2>
          <p className="mt-4 font-sans text-xs uppercase tracking-widest text-[#6E6863]">
            Three curated locations across Trichy
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 border-t border-[#E8E2D2] lg:grid-cols-3">
          {hubs.map((hub, i) => (
            <HubCard key={i} hub={hub} index={i} />
          ))}
        </div>
      </section>

      <section className="w-full border-t border-[#E8E2D2] bg-[#F0EBE1] py-32">
        <div className="px-4 text-center">
          <h2 className="font-serif text-4xl text-[#3E3A37] md:text-6xl">
            The Artisans
          </h2>
          <p className="mt-4 font-sans text-xs uppercase tracking-widest text-[#6E6863]">
            Meet the hands behind the sanctuary
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl columns-1 gap-8 px-4 md:columns-2 lg:columns-3">
          {artisans.map((a, i) => (
            <ArtisanCard key={i} artisan={a} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
