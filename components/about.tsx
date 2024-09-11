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
        Currently pursuing a Master’s degree in Computer Science at North Carolina State University, I specialize in developing high-impact software, architecting scalable solutions, and solving complex problems. My core competencies lie in web development across frameworks like Angular and React, and backend technologies such as Django and Express.js. 
      </p>

      <p>
        I am deeply passionate about technology and enthusiastic about exploring opportunities that allow me to leverage my skills across Blockchain, Software Engineering, DevOps and Data Science. I am keen to contribute to innovative projects and collaborate with teams focused on creating solutions that have a meaningful impact.
      </p>
    </motion.section>
  );
}
