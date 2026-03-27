"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonial";

export const TestimonialCarousel = ({ testimonials }: CarouselProps) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  // Position mapping for wheel effect
  const getPosition = (i: number) => {
    if (i === index) return "center";
    if (i === (index - 1 + testimonials.length) % testimonials.length)
      return "left";
    if (i === (index + 1) % testimonials.length) return "right";
    return "hidden";
  };

  const variants = {
    center: {
      scale: 1,
      opacity: 1,
      x: 0,
      rotateY: 0,
      zIndex: 10,
    },
    left: {
      scale: 0.7,
      opacity: 0.35,
      x: -180,
      rotateY: 25,
      zIndex: 0,
    },
    right: {
      scale: 0.7,
      opacity: 0.35,
      x: 180,
      rotateY: -25,
      zIndex: 0,
    },
    hidden: {
      scale: 0.5,
      opacity: 0,
      x: 0,
      rotateY: 0,
      zIndex: -10,
    },
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative flex items-center justify-center h-87 md:h-64">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            animate={variants[getPosition(i)]}
            initial={false}
            transition={{ duration: 0.6 }}
            className="absolute w-full md:w-1/2 text-sm"
          >
            <TestimonialCard {...t} />
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-6">
        <button
          onClick={prev}
          className="px-4 py-1 rounded-4xl border border-border/60 text-muted-foreground font-bold hover:text-foreground hover:border-border hover:bg-primary/20 transition-all"
        >
          {"<<"}
        </button>

        <button
          onClick={next}
          className="px-4 py-1 rounded-4xl border border-border/40 text-muted-foreground font-bold hover:text-foreground hover:border-border hover:bg-primary/20 transition-all"
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};
