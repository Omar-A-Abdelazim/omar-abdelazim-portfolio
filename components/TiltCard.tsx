"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse position within card (0–1)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Spring-smoothed position for fluid, organic motion
  const springConfig = { damping: 25, stiffness: 200 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  // 3D tilt: image "looks toward" cursor (-10° to 10°)
  const rotateX = useTransform(ySpring, [0, 1], [10, -10]);
  const rotateY = useTransform(xSpring, [0, 1], [-10, 10]);

  // Spotlight follows cursor
  const spotlightX = useTransform(xSpring, [0, 1], [0, 100]);
  const spotlightY = useTransform(ySpring, [0, 1], [0, 100]);
  const spotlightBg = useMotionTemplate`radial-gradient(600px circle at ${spotlightX}% ${spotlightY}%, rgba(0, 212, 255, 0.15), transparent 40%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  // Parent variants so children can stagger-respond to hover
  const cardVariants = {
    rest: { y: 0, scale: 1 },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { type: "spring", damping: 20, stiffness: 300 },
    },
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      className={`relative overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-500 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(0,212,255,0.08)] will-change-transform ${className}`}
    >
      {/* Mouse-following spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.7 : 0,
          background: spotlightBg,
        }}
      />

      {/* Shine sweep — plays once on viewport entry */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: "200%", opacity: [0, 0.5, 0] }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.07) 45%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.07) 55%, transparent 70%)",
        }}
      />

      {/* Content layer */}
      <div className="relative z-30">{children}</div>
    </motion.div>
  );
}