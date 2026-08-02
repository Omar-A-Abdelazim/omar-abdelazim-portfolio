"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper, {
  SectionLabel,
  SectionTitle,
  FadeIn,
} from "./SectionWrapper";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-surface/30">
      <SectionLabel text="Academic Background" />
      <SectionTitle>Education</SectionTitle>

      <FadeIn>
        <motion.div
          whileHover={{
            borderColor: "rgba(0, 212, 255, 0.2)",
            boxShadow: "0 0 40px rgba(0, 212, 255, 0.05)",
          }}
          className="max-w-3xl mx-auto p-8 bg-card border border-border rounded-2xl transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-surface border border-border flex-shrink-0">
              <Image
                src={education.logo}
                alt={education.institution}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">
                  {education.institution}
                </h3>
                <span className="text-accent text-sm font-medium">
                  {education.period}
                </span>
              </div>

              <h4 className="text-lg text-text-secondary mb-1">
                {education.degree}
              </h4>
              <p className="text-text-secondary text-sm mb-4">
                {education.location}
              </p>

              <div className="flex flex-wrap gap-2">
                {education.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </FadeIn>
    </SectionWrapper>
  );
}
