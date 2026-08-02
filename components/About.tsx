"use client";

import { motion } from "framer-motion";
import SectionWrapper, {
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from "./SectionWrapper";
import { personalInfo } from "@/lib/data";

const stats = [
  { label: "Production Apps", value: personalInfo.productionApps },
  { label: "GitHub Commits", value: personalInfo.githubCommits },
  { label: "Certifications", value: personalInfo.certificationsCount },
  { label: "Years Experience", value: personalInfo.yearsExperience },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-surface/30">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <SectionLabel text="Introduction" />
          <SectionTitle>
            A dedicated developer with a passion for clean code.
          </SectionTitle>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-lg leading-relaxed mb-8"
          >
            I&apos;m {personalInfo.name}, a passionate {personalInfo.role} with
            professional experience building high-quality applications. I
            specialize in developing production-ready apps with Scalable
            Architecture, Clean Code, and modern UI/UX practices.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text-secondary leading-relaxed"
          >
            Currently, I&apos;m expanding my skills by learning new technologies
            for backend development to build complete full-stack solutions. I
            enjoy turning complex ideas into reliable and user-friendly
            experiences.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <StaggerContainer className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                whileHover={{ y: -5, borderColor: "rgba(0, 212, 255, 0.3)" }}
                className="p-6 bg-card border border-border rounded-2xl transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
