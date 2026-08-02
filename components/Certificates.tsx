"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SectionWrapper, {
  SectionLabel,
  SectionTitle,
  StaggerContainer,
  StaggerItem,
} from "./SectionWrapper";
import TiltCard from "./TiltCard";
import { certificates } from "@/lib/data";

export default function Certificates() {
  return (
    <SectionWrapper id="certificates">
      <SectionLabel text="Recognition" />
      <SectionTitle>Certificates</SectionTitle>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert) => (
          <StaggerItem key={cert.id}>
            <TiltCard className="group block h-full">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />

                  {/* Hover overlay icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/50 backdrop-blur-sm z-40">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      className="p-3 rounded-full bg-accent/20 border border-accent/30"
                    >
                      <ExternalLink className="text-accent" size={24} />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded border border-accent/20">
                      {cert.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-text-secondary text-xs mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between text-xs text-text-secondary">
                    <span>{cert.period}</span>
                    <span>{cert.duration}</span>
                  </div>
                </div>
              </a>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}