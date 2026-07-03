"use client";

import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticWrapperProps {
  children: ReactNode;
  className?: string;
}

export function MagneticWrapper({ children, className }: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const onMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}
