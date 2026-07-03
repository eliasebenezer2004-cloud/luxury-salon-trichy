"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useTransition } from "@/components/providers/PageTransitionProvider";

const navLinks = [
  { label: "Rituals", href: "/" },
  { label: "The Salon Menu", href: "/services" },
  { label: "Sanctuary Locations", href: "/about" },
  { label: "Our Artisans", href: "/about" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const { navigate } = useTransition();

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY.current;
      if (!navRef.current) return;

      if (delta > 5 && currentY > 80) {
        navRef.current.style.transform = "translateY(-100%)";
      } else if (delta < -5) {
        navRef.current.style.transform = "translateY(0%)";
      }
      lastY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 z-40 w-full transition-transform duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        height: 80,
        background: "rgba(250,249,246,0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(62,58,55,0.05)",
      }}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Left: Logo */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          className="font-serif text-lg tracking-[0.25em] text-[#3E3A37]"
        >
          AURELIA
        </Link>

        {/* Center: Links */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(link.href);
                }}
                className="font-sans text-xs uppercase tracking-[0.15em] text-[#6E6863] transition-colors hover:text-[#3E3A37]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: CTA */}
        <Link
          href="/booking"
          onClick={(e) => {
            e.preventDefault();
            navigate("/booking");
          }}
          data-interactive
          className="font-sans text-xs uppercase tracking-[0.2em] text-[#8A9A86] transition-colors hover:text-[#3E3A37]"
        >
          Request Reservation
        </Link>
      </nav>
    </header>
  );
}
