"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 450, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 450, damping: 40 });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest("[data-interactive]")) {
        setHovering(true);
      }
    };

    const out = (e: MouseEvent) => {
      if (!(e.target as HTMLElement)?.closest("[data-interactive]")) {
        setHovering(false);
      } else {
        setTimeout(() => setHovering(false), 50);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        left: springX,
        top: springY,
        width: hovering ? 44 : 8,
        height: hovering ? 44 : 8,
        backgroundColor: hovering ? "transparent" : "#8A9A86",
        border: hovering ? "1px solid #8A9A86" : "none",
        transition:
          "width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), background-color 0.3s cubic-bezier(0.16,1,0.3,1), border 0.3s cubic-bezier(0.16,1,0.3,1)",
      }}
    />
  );
}
