"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (borderRef.current) {
        gsap.fromTo(
          borderRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.4,
            ease: "cubic-bezier(0.19, 1, 0.22, 1)",
            scrollTrigger: {
              trigger: borderRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, borderRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer className="fixed inset-x-0 bottom-0 z-0 min-h-screen bg-[#3E3A37]">
      {/* Watermark */}
      <div className="pointer-events-none flex h-full w-full select-none items-center justify-center">
        <span className="font-serif text-[15vw] font-light text-[#FAF9F6] opacity-[0.03]">
          AURELIA
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-8 pb-16 md:px-16 lg:px-24">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: Directory */}
          <div>
            <h4 className="mb-6 font-sans text-xs uppercase tracking-[0.2em] text-[#8A9A86]">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Sanctuary Home", href: "/" },
                { label: "The Treatment Menu", href: "/services" },
                { label: "The Sanctuary", href: "/about" },
                { label: "The Artisans", href: "/about" },
                { label: "Secure Reservations", href: "/booking" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-[#E8E2D2] transition-colors hover:text-[#FAF9F6]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 className="mb-6 font-sans text-xs uppercase tracking-[0.2em] text-[#8A9A86]">
              Connect
            </h4>
            <div className="space-y-4 font-sans text-sm leading-relaxed text-[#E8E2D2]">
              <p>Direct Line: +91 431 AURELIA</p>
              <p>Concierge Inbox: sanctuary@aureliasalon.in</p>
              <p>
                Central Office: 18c, Warners Road, Cantonment, Trichy, Tamil
                Nadu
              </p>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h4 className="mb-6 font-sans text-xs uppercase tracking-[0.2em] text-[#8A9A86]">
              Inner Circle
            </h4>
            <p className="mb-6 font-sans text-sm leading-relaxed text-[#E8E2D2]">
              Provide your digital delivery line for inner circle priority
              notifications.
            </p>
            <div className="relative">
              <div
                ref={borderRef}
                className="h-px origin-left bg-[rgba(250,249,246,0.15)]"
              />
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-2 w-full border-0 bg-transparent p-3 font-sans text-sm text-[#FAF9F6] placeholder-[#6E6863] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 w-full max-w-7xl border-t border-[rgba(250,249,246,0.08)] pt-8 text-center">
          <p className="font-sans text-xs text-[#6E6863]">
            &copy; {new Date().getFullYear()} Aurelia Spa & Salon. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
