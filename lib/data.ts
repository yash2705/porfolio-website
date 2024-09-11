import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import tipMeAnEtherImg from "@/public/tip-me-an-ether.png";
import muscleCrazeImg from "@/public/muscle-craze.png";
import multilingualHateSpeechDetectionImg from "@/public/multilingual-hate-speech-detection.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education"
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    location: "nVent",
    description:
      "Developed a data-processing tool in Angular for reading and filtering Excel data and generating custom CSV exports. Implemented unit and functional tests using Karma, Jasmine, Gherkin, and Cucumber to ensure software reliability.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - July 2024",
  },
  {
    title: "Software Developer Intern",
    location: "Adigos Soft Technologies",
    description:
      "Worked on multiple client projects, including the development of the BidWise mobile app using React Native, Express.Js and Web Sockets for real-time auctions of antiques and reverse auctions for government projects.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2022 - September 2022",
  },
  {
    title: "Software Team Member",
    location: "The Marine Robotics Team, KJSCE",
    description:
      "Optimized object detection algorithms using TensorFlow and OpenCV to enhance the robot's perception by 30% in complex underwater environments.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2020 - August 2021",
  },
] as const;

export const educationData = [
  {
    title: "North Carolina State University",
    location: "Raleigh, NC",
    description:
      "Master of Computer Science",
    icon: React.createElement(LuGraduationCap),
    date: "August 2024 - May 2026 (expected)",
  },
  {
    title: "K.J.Somaiya College of Engineering",
    location: "Mumbai, IN",
    description:
      "Bachelor of Technology in Computer Engineering with Honors in Data Science and Analytics (CGPA - 9.72/10)",
    icon: React.createElement(LuGraduationCap),
    date: "September 2020 - June 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Multilingual Hate Speech Detection",
    description:
      "Built data preprocessing pipelines and trained a multilingual Natural Language Processing model on processed data to classify hate speech in social media comments.",
    tags: ["Python", "NLTK", "scikit-learn", "Natural Language Processing"],
    imageUrl: multilingualHateSpeechDetectionImg,
    sourceUrl: "https://colab.research.google.com/drive/1BPiLUjzuByx8xsS3xATK7af1JGXWhSo9"
  },
  {
    title: "Tip Me An Ether",
    description:
      "Developed a decentralized application on the Ethereum blockchain that allows fans to tip content creators in cryptocurrency without requiring bank account/ credit card details",
    tags: ["React.js", "Solidity", "web3.js", "Blockchain", "TailwindCSS"],
    imageUrl: tipMeAnEtherImg,
    sourceUrl: "https://github.com/yash2705/tip-me-an-ether"
  },
  {
    title: "MuscleCraze",
    description:
      "Created an e-commerce platform that enables users to purchase health supplements and efficiently managed user sessions and data storage and retreivals",
    tags: ["React.js", "Express.js", "Node.js", "MongoDB", "Redux"],
    imageUrl: muscleCrazeImg,
    sourceUrl: "https://github.com/yash2705/mern-ecommerce"
  },

] as const;

export const skillsData = [
"C/C++", "Java", "Python", "JavaScript", "TypeScript", "Dart", "Golang", "YAML", "HTML", "CSS", "NodeJs", "ExpressJs", "ReactJs", "Angular", "Flutter", "TailwindCSS", "MySQL", "PostgreSQL", "MongoDB", "Firebase", "Git", "AWS", "DevOps", "CI/CD", "Heroku", "Vercel"
] as const;
