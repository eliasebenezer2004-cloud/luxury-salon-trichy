"use client";

import { motion } from "framer-motion";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";

const ease = [0.83, 0, 0.17, 1] as const;

const headlineVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease, delay: 0.3 },
  },
};

const taglineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease, delay: 0.6 },
  },
};

export function Hero() {
  return (
    <section className="relative flex h-dvh w-full items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-40"
          poster="/hero-poster.jpg"
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
          className="font-mono mb-8 text-xs tracking-[0.4em] text-gold uppercase"
        >
          Aurelia Spa & Salon
        </motion.p>

        <motion.h1
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-5xl leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Experience True Elegance
          <br />
          <span className="text-gold">at Aurelia Spa &amp; Salon.</span>
        </motion.h1>

        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 text-sm tracking-[0.3em] text-muted-foreground uppercase sm:text-base"
        >
          A sanctuary of beauty in the heart of Trichy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1 }}
          className="mt-10"
        >
          <MagneticWrapper>
            <button
              type="button"
              className="rounded-full border border-gold/40 px-10 py-3 font-mono text-xs tracking-[0.3em] uppercase text-gold transition-colors duration-500 hover:bg-gold hover:text-[#1B2845]"
            >
              Book Your Visit
            </button>
          </MagneticWrapper>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-12 w-px bg-gradient-to-b from-gold/60 to-transparent"
        />
      </div>
    </section>
  );
}
