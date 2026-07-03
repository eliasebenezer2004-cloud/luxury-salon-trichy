"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";

export function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-[1200ms] ease-[cubic-bezier(0.83,0,0.17,1)]",
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 backdrop-blur-xl">
        <Image
          src="/logo.svg"
          alt="Aurelia Spa & Salon"
          width={168}
          height={48}
          className="h-10 w-auto"
          priority
        />
        <MagneticWrapper>
          <button
            type="button"
            className="rounded-full border border-gold/30 px-6 py-2 font-mono text-xs tracking-[0.3em] uppercase text-gold transition-colors duration-500 hover:bg-gold hover:text-[#1B2845]"
          >
            Book Appointment
          </button>
        </MagneticWrapper>
      </div>
    </nav>
  );
}
