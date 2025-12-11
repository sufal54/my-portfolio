"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full pt-24 pb-20 bg-slate-900 relative overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-lime-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-600/20 blur-[120px] rounded-full" />

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 text-3xl md:text-4xl font-extrabold tracking-wide text-white"
      >
        About Me
      </motion.h1>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="px-6 mt-8 space-y-10 text-slate-200 max-w-3xl"
      >
        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-lg leading-relaxed font-medium"
        >
          I am a{" "}
          <span className="text-lime-400 font-bold text-xl">
            Full Stack Web Developer
          </span>{" "}
          specializing in{" "}
          <span className="font-bold text-white">
            Next.js, React, Node.js, Express, MongoDB, and TypeScript
          </span>.
          I focus on building scalable, high-performance applications with clean,
          maintainable architecture.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-lg leading-relaxed font-medium"
        >
          I’m passionate about{" "}
          <span className="text-indigo-400 font-bold text-xl">
            AI, Computer Vision, Embedded Systems, and Rust
          </span>.
          I explore{" "}
          <span className="font-bold text-white">
            Deep Learning, JavaCV, Spring Boot, and ESP32
          </span>, constantly pushing my boundaries in software engineering
          and systems programming.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
