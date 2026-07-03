"use client";

import { motion } from "framer-motion";

const ease = [0.83, 0, 0.17, 1] as const;

const services = [
  {
    title: "Advanced Hair Artistry",
    description:
      "Precision cutting, luxury coloring, and transformative treatments tailored to your essence.",
    number: "01",
  },
  {
    title: "Skin Sanctuary",
    description:
      "Rejuvenating facials, micro-needling, and advanced peels for a luminous, ageless complexion.",
    number: "02",
  },
  {
    title: "Medi-Facials & Contouring",
    description:
      "Clinical-grade skin therapies and non-invasive contouring for refined, sculpted beauty.",
    number: "03",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease,
    },
  },
};

export function ServicesPreview() {
  return (
    <section className="relative w-full px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="mb-20"
        >
          <span className="font-mono text-xs tracking-[0.4em] text-gold uppercase">
            Our Craft
          </span>
          <h2 className="font-serif mt-4 text-4xl leading-tight text-foreground md:text-6xl">
            Services curated
            <br />
            <span className="text-gold">for the discerning.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 md:grid-cols-3 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={itemVariants}
              className="group relative border-t border-gold/20 pt-8"
            >
              <span className="font-mono text-6xl font-light tracking-tighter text-gold/10 md:text-8xl">
                {service.number}
              </span>
              <h3 className="font-serif -mt-2 text-2xl text-foreground md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-6 h-px w-0 bg-gold/60 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
