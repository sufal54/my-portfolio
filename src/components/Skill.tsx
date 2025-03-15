"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Skill = () => {
  const [isAnimation, setIsAnimation] = useState<boolean>(false);

  const skills: string[] = [
    "react.png",
    "redux.png",
    "framer_motion.png",
    "nextjs.png",
    "tailwindcss.png",
    "htl.png",
    "css.png",
    "javascript.png",
    "graphql.png",
    "material_ui.png",
    "firebase.png",
    "mongodb.png",
    "nginx.png",
    "mysql.png",
    "ts.png",
    "redis.png",
    "nodejs.png",
    "docker.png",
    "github.png",
    "java.png",
    "python.png",
    "rust.png",
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
        className={`w-full min-h-40 flex flex-wrap items-start justify-evenly gap-5 p-4 overflow-hidden`}
      >
        {isAnimation &&
          skills.map((item, idx) => (
            <motion.div
              key={idx}
              viewport={{ once: false }}
              initial={{
                y: -200,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                y: 0,
                scale: 1,
                opacity: 1,
                rotate: 360,
              }}
              transition={{
                delay: idx * 0.1,
                type: "spring",
                damping: 8,
                stiffness: 80,
              }}
              className="w-[57px] h-[57px] bg-gradient-to-br from-slate-700 to-slate-800 ring-4 ring-slate-700 shadow-lg shadow-slate-700 rounded-xl"
            >
              <Image width={54} height={54} src={`/${item}`} alt={item} />
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default Skill;
