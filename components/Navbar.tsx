"use client";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <span className="font-serif text-lg tracking-[0.2em] text-foreground/90">
          LUMINA
        </span>
        <Button
          variant="outline"
          className="rounded-full border-foreground/20 px-6 text-xs tracking-widest uppercase hover:bg-foreground hover:text-background"
        >
          Book Sanctuary
        </Button>
      </div>
    </nav>
  );
}
