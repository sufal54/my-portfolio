"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Baner = () => {
  return (
    <div className="w-full mt-8 flex flex-col md:flex-row overflow-hidden">
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="w-full md:w-1/2 h-96 pl-2 flex flex-col items-start justify-center"
      >
        <div>
          <span className="text-2xl">Hi, I'm SUFAL BALA </span>
          <span className="text-xl">- Full-Stack Web Developer</span>
        </div>
        <p>
          Building Scalable & Efficient Web Application. Learing. Building.
          Innovating. Every Day
        </p>
      </motion.div>
      <motion.div
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex items-center justify-center mt-16 md:mt-0 md:w-1/2 relative"
      >
        <motion.div
          animate={{
            rotate: 360,
            borderRadius: [
              "30% 50% 20% 40%",
              "40% 30% 30% 50%",
              "50% 20% 40% 40%",
              "40% 40% 30% 50%",
              "30% 50% 20% 40%",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-4/5 sm:w-3/5 md:w-4/5 lg:w-4/5 xl:w-3/5 2xl:w-3/5 aspect-[1/1]  bg-lime-600"
        />
        <div className="w-4/5 aspect-[1/1] flex items-center justify-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            className="object-cover rounded-full"
            fill
            src={"/profile.png"}
            alt={"image"}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Baner;
