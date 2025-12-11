"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Skill() {
  const [active, setActive] = useState<number | null>(null);

  const skills: string[] = [
    "React",
    "React_Redux",
    "Framer_Motion",
    "NextJS",
    "TailwindCss",
    "Html",
    "Css",
    "JavaScript",
    "GraphQL",
    "Material_UI",
    "Firebase",
    "MongoDB",
    "Nginx",
    "MySQL",
    "ExpressJS",
    "TypeScript",
    "Redis",
    "NodeJS",
    "NestJS",
    "Docker",
    "Github",
    "Java",
    "Python",
    "Rust",
  ];

  return (
    <div className="w-full pb-16 mt-20 bg-slate-900 overflow-hidden">
      <h1 className="p-4 text-4xl font-extrabold tracking-wide">
        <span className="bg-gradient-to-r from-lime-300 to-emerald-500 text-transparent bg-clip-text">
          Skills
        </span>
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full flex flex-wrap gap-8 justify-center px-6 mt-4"
      >
        {skills.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.7, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              delay: idx * 0.04,
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            onHoverStart={() => setActive(idx)}
            onHoverEnd={() => setActive(null)}
            onClick={() => setActive((prev) => (prev === idx ? null : idx))}
            className={`
              relative w-[70px] h-[70px] rounded-2xl
              bg-slate-800/60 backdrop-blur-xl
              flex items-center justify-center 
              border border-slate-700/60
              transition-all duration-300 cursor-pointer 
              shadow-lg shadow-black/40
              hover:shadow-lime-400/30 hover:scale-110
              ${active === idx ? "scale-110 ring-4 ring-lime-400/70" : "ring-2 ring-slate-700/60"}
            `}
          >
            <AnimatePresence>
              {active === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: -58, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="
                    absolute px-3 py-1 rounded-lg 
                    bg-slate-900/90 border border-slate-700 
                    text-sm text-slate-200 
                    shadow-xl backdrop-blur-xl 
                    whitespace-nowrap
                  "
                >
                  {item.replace("_", " ")}
                </motion.div>
              )}
            </AnimatePresence>

            <Image
              width={50}
              height={50}
              src={`/${item}.png`}
              alt={item}
              className="object-contain drop-shadow-md"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
