"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          I am a Software Development Engineer at Amazon Web Services (AWS) with a Master’s degree in Computer Science from North Carolina State University. I enjoy solving complex problems and building reliable, scalable software across backend engineering, full-stack development, and cloud computing.
        </p>
        <p>
          Outside of work, I enjoy exploring new technologies, playing chess, following Formula 1, and discovering the outdoors through hikes and treks.
        </p>
    </motion.section>
  );
}
