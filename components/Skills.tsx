"use client";

import { motion } from "framer-motion";
import SectionWrapper, {
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from "./SectionWrapper";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-surface/30">
      <SectionLabel text="Abilities" />
      <SectionTitle>Skills & Expertise</SectionTitle>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <StaggerItem key={category.title}>
            <motion.div
              whileHover={{
                y: -5,
                borderColor: "rgba(0, 212, 255, 0.2)",
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.05)",
              }}
              className="p-6 bg-card border border-border rounded-2xl transition-all duration-300 h-full"
            >
              <div className="text-2xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-bold text-white mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-text-secondary text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
