"use client";

import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-secondary text-sm"
          >
            &copy; {new Date().getFullYear()} Omar Ahmed Abdelazim.
          </motion.p>

          

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-text-secondary hover:text-accent transition-colors duration-300"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-text-secondary hover:text-accent transition-colors duration-300"
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
