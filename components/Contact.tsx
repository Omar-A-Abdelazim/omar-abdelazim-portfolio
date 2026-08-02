"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import SectionWrapper, {
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from "./SectionWrapper";
import { personalInfo, contactInfo } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Mail: <Mail size={24} />,
  Phone: <Phone size={24} />,
  Linkedin: <Linkedin size={24} />,
  Github: <Github size={24} />,
};

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-surface/30">
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          Available for freelance and full-time opportunities
        </div>
      </motion.div>

      <div className="text-center mb-12">
        <SectionLabel text="Get in Touch" />
        <SectionTitle>Let&apos;s Connect</SectionTitle>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary max-w-2xl mx-auto"
        >
          Have a project in mind? I&apos;d love to hear from you. Let&apos;s
          collaborate and build exceptional experiences together.
        </motion.p>
      </div>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {contactInfo.map((item) => (
          <StaggerItem key={item.label}>
            <motion.a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{
                y: -5,
                borderColor: "rgba(0, 212, 255, 0.3)",
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.08)",
              }}
              className="block p-6 bg-card border border-border rounded-2xl text-center transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-white font-semibold mb-1">{item.label}</h3>
              <p className="text-text-secondary text-xs mb-3">{item.sublabel}</p>
              <span className="text-accent text-sm font-medium group-hover:underline">
                {item.value}
              </span>
            </motion.a>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Closing message */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center text-text-secondary text-sm mt-12 max-w-xl mx-auto"
      >
        If you&apos;re working on a project, exploring a new idea, or looking for
        a developer to collaborate with, I&apos;d love to be part of it.
      </motion.p>
    </SectionWrapper>
  );
}
