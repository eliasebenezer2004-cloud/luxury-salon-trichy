"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-700",
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Image
          src="/logo.svg"
          alt="Aurelia Spa & Salon"
          width={168}
          height={48}
          className="h-10 w-auto"
          priority
        />
        <Button
          variant="outline"
          className="rounded-full border-gold/30 px-6 text-xs tracking-widest uppercase text-gold hover:bg-gold hover:text-[#1B2845]"
        >
          Book Appointment
        </Button>
      </div>
    </nav>
  );
}
