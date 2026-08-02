"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper, {
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from "./SectionWrapper";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionLabel text="My Journey" />
      <SectionTitle>Work Experience</SectionTitle>

      <StaggerContainer className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {experiences.map((exp, index) => (
          <StaggerItem key={exp.id}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background -translate-x-1/2 mt-6 z-10">
                <motion.div
                  className="absolute inset-0 bg-accent rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <motion.div
                  whileHover={{
                    borderColor: "rgba(0, 212, 255, 0.2)",
                    boxShadow: "0 0 30px rgba(0, 212, 255, 0.05)",
                  }}
                  className="p-6 bg-card border border-border rounded-2xl transition-all duration-300"
                >
                  <div
                    className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <h3 className="text-lg font-bold text-white">
                        {exp.company}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`mb-3 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    <span className="text-accent text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <h4
                    className={`text-white font-semibold mb-3 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.role}
                  </h4>

                  <ul
                    className={`space-y-2 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-text-secondary text-sm leading-relaxed"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Empty space for the other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
