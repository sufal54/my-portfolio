"use client";
import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="w-full h-full mt-14 bg-slate-900 overflow-hidden">
      <h1 className="p-2 text-2xl font-extrabold">About</h1>
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{
          opacity: [0.2, 0.5, 0.7, 1],
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 100,
        }}
        transition={{
          duration: 1,
        }}
        className="w-full flex flex-col"
      >
        <p className="p-2 font-semibold">
          I am a{" "}
          <span className="text-xl font-bold">Full Stack Web Developer</span>{" "}
          with experience in building modern, scalable web applications. My
          expertise includes{" "}
          <span className="text-xl font-bold">
            Next.js, React, Redux, Node.js, Express, MongoDB, and TypeScript,
          </span>{" "}
          allowing me to create fast, responsive, and user-friendly
          applications. On the backend, I design{" "}
          <span className="text-xl font-bold">
            robust APIs and real-time systems
          </span>{" "}
          using{" "}
          <span className="text-xl font-bold">
            Node.js, Express, and MongoDB,
          </span>{" "}
          ensuring{" "}
          <span className="text-xl font-bold">
            efficient data handling and security. On the frontend,
          </span>{" "}
          I build{" "}
          <span className="text-xl font-bold">dynamic and intuitive UIs</span>{" "}
          using{" "}
          <span className="text-xl font-bold">
            Next.js, React, Tailwind CSS, and TypeScript
          </span>{" "}
          to enhance user experience. Beyond web development,
          <span className="mt-3 block" />
        </p>
        <motion.p
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="p-2 font-semibold"
        >
          I have a strong interest in{" "}
          <span className="text-xl font-bold">
            AI, computer vision, and embedded systems,
          </span>{" "}
          working on projects involving{" "}
          <span className="text-xl font-bold">
            Spring Boot, Rust, JavaCV, WebRTC, and ESP32
          </span>
          . I also enjoy exploring deep learning and cybersecurity to expand my
          skill set. I'm{" "}
          <span className="text-xl font-bold">
            passionate about solving complex problems
          </span>{" "}
          with clean, efficient code and continuously learning new technologies
          to stay ahead in the ever-evolving tech world.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
