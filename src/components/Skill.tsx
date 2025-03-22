"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Skill = () => {
  const [isAnimation, setIsAnimation] = useState<boolean>(false);
  const [selectSkil, setSelectSkil] = useState<number>(-1);
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
    <div className="w-full pb-6 h-full mt-14 bg-slate-900 overflow-x-hidden">
      <h1 className="p-2 text-2xl font-extrabold">Skills</h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onViewportEnter={() => setIsAnimation(true)}
        onViewportLeave={() => setIsAnimation(false)}
        transition={{
          delayChildren: 0.3,
          staggerChildren: 0.2,
        }}
        className={`w-full h-[500px] sm:h-80 md:h-60 lg:h-40 xl:h-40 flex flex-wrap items-start justify-evenly gap-5 p-4 overflow-hidden`}
      >
        {isAnimation &&
          skills.map((item, idx) => (
            <motion.div
              key={idx}
              viewport={{ once: false }}
              initial={{
                y: -200,
                scale: 0,
              }}
              animate={{
                y: 0,
                scale: 1,
                rotate: 360,
              }}
              transition={{
                delay: idx * 0.1,
                type: "spring",
                damping: 7,
                stiffness: 100,
              }}
              onHoverStart={() => setSelectSkil(idx)}
              onHoverEnd={() => setSelectSkil(-1)}
              onClick={() => setSelectSkil((prv) => (prv === idx ? -1 : idx))}
              className="w-[57px] h-[57px] relative bg-gradient-to-br from-slate-700 to-slate-800 ring-4 ring-slate-700 shadow-lg shadow-slate-700 rounded-xl"
            >
              {idx == selectSkil && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="min-w-[57px] h-[40px] rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 flex flex-wrap items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 ring-4 ring-slate-700 shadow-lg shadow-slate-700"
                >
                  <span className="text-xl">{item}</span>
                </motion.div>
              )}

              <Image width={54} height={54} src={`/${item}.png`} alt={item} />
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default Skill;
