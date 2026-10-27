import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Education", hash: "#education" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Software Development Engineer",
    location: "Amazon Web Services",
    description: "Designed and launched a high-throughput Java service on ECS backed by DynamoDB, using autoscaling and read-path warming to sustain 2,500 TPS at 50ms p99 latency. Built an event-driven ingestion pipeline with SNS, SQS, and an EventBridge-triggered Lambda reconciler; idempotent DynamoDB writes prevent data drift from duplicate events.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2026 - Present",
  },
  {
    title: "Software Developer",
    location: "Khayrallah Center for Lebanese Diaspora Studies",
    description: "Architected a FastAPI and Elasticsearch search system deployed on EC2 to index and retrieve 450,000+ Arabic document pages, with a React frontend featuring real-time text highlighting. Integrated Celery and Redis OCR pipelines to extract metadata and store results in S3, reducing processing time by 60%.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2025 - May 2026",
  },
  {
    title: "Software Development Engineer Intern",
    location: "Amazon Web Services",
    description: "Engineered a graph-based TypeScript validation engine to catch schema inconsistencies at build time, preventing 97% of runtime errors and saving 6 hours of manual debugging per week. Fixed two long-standing visual bugs on high-traffic pages serving 1M+ users by tracing them to misconfigured TOML files.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2025 - August 2025",
  },
  {
    title: "Software Engineer Intern",
    location: "nVent",
    description: "Redesigned a legacy Excel reporting system in Angular with asynchronous XLSX batch processing using RxJS, eliminating timeout errors and achieving reliable processing. Built a testing framework with 92% coverage using Karma, Jasmine, Gherkin, and Cucumber, cutting regression defects by half.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - July 2024",
  },
  {
    title: "Software Engineer Intern",
    location: "Adigos Soft Technologies",
    description: "Designed a low-latency Java/Spring Boot bid-processing engine with event-driven architecture and Kafka for ordered, durable processing. Scaled persistence with PostgreSQL sharding and WAL optimizations, supporting fault-tolerant recovery and sub-100ms bid latency under concurrent load.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2022 - September 2022",
  },
  {
    title: "Technical Team Member",
    location: "Marine Robotics Team, K. J. Somaiya College of Engineering",
    description: "Improved object detection and boundary/edge identification accuracy by 24.2% using OpenCV. Applied TensorFlow and Python deep learning to improve robot perception by 33.4% in complex underwater environments.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2021 - August 2022",
  },
] as const;

export const educationData = [
  {
    title: "North Carolina State University",
    location: "Raleigh, NC",
    description: "M.S. in Computer Science | GPA: 4.0/4.0. Coursework: Operating Systems, Software Security, DevOps, Generative AI, Software Architecture & Design.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2024 - May 2026",
  },
  {
    title: "K. J. Somaiya College of Engineering",
    location: "Mumbai, India",
    description: "B.S. in Computer Engineering (Minor in Data Science) | GPA: 3.8/4.0. Coursework: Computer Networks, Database Management, Object-Oriented Programming, Machine Learning.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2020 - June 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Distributed Key-Value Store with Consistent Hashing",
    description: "Built a horizontally scalable Java key-value store using consistent hashing and gRPC, with replication, leader election, and automatic rebalancing. Stress-tested the system at 5,000 concurrent requests.",
    tags: ["Java", "gRPC", "Kubernetes"],
  },
  {
    title: "Distributed Transaction Manager",
    description: "Implemented atomic multi-node writes across PostgreSQL shards using two-phase commit, ZooKeeper-based leader election, and crash recovery. Added a Kafka-backed write-ahead log with replayable commits and tested failure scenarios at 50,000+ TPS.",
    tags: ["Java", "ZooKeeper", "Kafka", "PostgreSQL"],
  },
  {
    title: "POSIX-Compliant File System",
    description: "Implemented a C++ file system with FUSE, inodes, block allocation, journaling, and crash recovery. Added client-side caching, lazy writes, and multithreaded I/O, achieving 3x the throughput of a baseline NFS-style prototype.",
    tags: ["C++", "FUSE", "File Systems"],
  },
] as const;

export const skillsData = [
  "Java", "C/C++", "JavaScript", "TypeScript", "Go", "Python", "HTML", "CSS",
  "Spring Boot", "React", "Node.js", "Angular", "Express.js", "React Native",
  "Django", "FastAPI", "Flask", "DynamoDB", "MySQL", "PostgreSQL", "MongoDB",
  "Firebase", "Redis", "Git", "AWS", "Azure", "GCP", "GitHub Actions", "Docker",
  "Kubernetes", "Terraform", "Ansible", "Jenkins", "Heroku",
] as const;
