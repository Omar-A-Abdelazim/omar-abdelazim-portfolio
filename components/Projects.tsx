"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2 } from "lucide-react";
import SectionWrapper, {
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from "./SectionWrapper";
import TiltCard from "./TiltCard";
import { projects } from "@/lib/data";

const statusColors: Record<string, string> = {
  Production:
    "bg-green-500/10 text-green-400 border-green-500/30",
  "Under Development":
    "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  "Coming Soon":
    "bg-purple-500/10 text-purple-400 border-purple-500/30",
};

// Staggered tag animations on card hover
const tagContainerVariants = {
  rest: {},
  hover: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05,
    },
  },
};

const tagItemVariants = {
  rest: { opacity: 0.85, scale: 1, y: 0 },
  hover: {
    opacity: 1,
    scale: 1.06,
    y: -2,
    transition: { type: "spring", stiffness: 450, damping: 18 },
  },
};

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionLabel text="Recent Work" />
      <SectionTitle>Featured Projects</SectionTitle>

      <StaggerContainer className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <StaggerItem key={project.id} className="h-full">
            <TiltCard className="group h-full flex flex-col">
              {/* Image / Visual Area */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                {project.status === "Under Development" ||
                project.status === "Coming Soon" ? (
                  // Placeholder visual for in-progress projects
                  <div className="absolute inset-0 bg-[#0d0d14] flex flex-col items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="text-center"
                    >
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <Code2
                          size={40}
                          className="text-yellow-400/60"
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="text-yellow-400/80 text-sm font-semibold tracking-widest uppercase mb-1">
                        Under Development
                      </p>
                      <p className="text-text-secondary/60 text-xs italic">
                        Coming Soon
                      </p>
                    </motion.div>
                  </div>
                ) : (
                  // Production project image
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-40">
                  <span
                    className={`inline-block px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase rounded-full border ${statusColors[project.status]}`}
                  >
                    {project.status === "Under Development"
                      ? "In Progress"
                      : project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>

                {/* Problem */}
                <div className="mb-3">
                  <span className="text-accent text-sm font-semibold">
                    The Problem:
                  </span>
                  <p className="text-text-secondary text-sm leading-relaxed mt-0.5">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-5">
                  <span className="text-accent text-sm font-semibold">
                    The Solution:
                  </span>
                  <p className="text-text-secondary text-sm leading-relaxed mt-0.5">
                    {project.solution}
                  </p>
                </div>

                {/* Tech Stack — denser grid, more tags */}
                <motion.div
                  variants={tagContainerVariants}
                  className="flex flex-wrap gap-2 mb-2 mt-auto"
                >
                  {project.tech.map((t) => (
                    <motion.span
                      key={t}
                      variants={tagItemVariants}
                      className="px-3 py-1.5 text-xs font-medium bg-surface text-text-secondary rounded-lg border border-border/80 hover:border-accent/30 hover:text-accent transition-colors duration-300 will-change-transform"
                    >
                      {t}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}