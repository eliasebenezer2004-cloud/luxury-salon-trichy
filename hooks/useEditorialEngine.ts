"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const sectionThemes = {
  hero: { bg: "#FAF9F6", text: "#3E3A37", accent: "#8A9A86" },
  hair: { bg: "#F0EBE1", text: "#3E3A37", accent: "#D4C4B7" },
  skin: { bg: "#4E584A", text: "#FAF9F6", accent: "#E6D5B8" },
  nails: { bg: "#A89689", text: "#FAF9F6", accent: "#FAF9F6" },
  booking: { bg: "#FAF9F6", text: "#3E3A37", accent: "#8A9A86" },
};

export function useEditorialEngine() {
  useEffect(() => {
    const viewContainer = document.getElementById("root-viewport");
    if (!viewContainer) return;

    const colorTriggers = [
      { id: "#section-hero", bg: "#FAF9F6", text: "#3E3A37" },
      { id: "#section-hair", bg: "#F0EBE1", text: "#3E3A37" },
      { id: "#section-skin", bg: "#4E584A", text: "#FAF9F6" },
      { id: "#section-nails", bg: "#A89689", text: "#FAF9F6" },
      { id: "#section-booking", bg: "#FAF9F6", text: "#3E3A37" },
    ];

    colorTriggers.forEach((triggerZone) => {
      ScrollTrigger.create({
        trigger: triggerZone.id,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(viewContainer, {
            backgroundColor: triggerZone.bg,
            color: triggerZone.text,
            duration: 1.2,
            ease: "power2.out",
          });
        },
        onEnterBack: () => {
          gsap.to(viewContainer, {
            backgroundColor: triggerZone.bg,
            color: triggerZone.text,
            duration: 1.2,
            ease: "power2.out",
          });
        },
      });
    });

    let proxy = { velocity: 0 };
    const clamp = gsap.utils.clamp(-10, 10);

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / 300);
        const headers = document.querySelectorAll(".kinetic-header");
        gsap.to(headers, {
          letterSpacing: `${0.02 + Math.abs(skew) * 0.05}em`,
          fontWeight: String(300 + Math.abs(skew) * 20),
          overwrite: "auto",
          duration: 0.4,
        });
      },
    });

    ScrollTrigger.create({
      onUpdate: (self) => {
        proxy.velocity = self.getVelocity();
        const track = document.getElementById("scroll-track-indicator");
        if (track) {
          const scaleY = 1 + Math.abs(proxy.velocity) * 0.005;
          gsap.to(track, {
            scaleY: Math.min(scaleY, 3),
            duration: 0.2,
            overwrite: "auto",
          });
          gsap.to(track, {
            opacity: 1,
            duration: 0.1,
          });
        }
      },
      onLeave: () => {
        const track = document.getElementById("scroll-track-indicator");
        if (track) {
          gsap.to(track, { opacity: 0, duration: 0.8, delay: 0.8 });
        }
      },
      onLeaveBack: () => {
        const track = document.getElementById("scroll-track-indicator");
        if (track) {
          gsap.to(track, { opacity: 0, duration: 0.8, delay: 0.8 });
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
