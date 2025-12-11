"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Baner = () => {
  return (
    <div className="w-full mt-24 px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden">

      {/* LEFT TEXT */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex flex-col justify-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
          Hi, I'm{" "}
          <span className="text-lime-400 drop-shadow-[0_0_10px_rgba(132,255,0,0.7)]">
            SUFAL BALA
          </span>
        </h1>

        <span className="text-2xl md:text-3xl mt-2 font-semibold text-slate-200">
          Full-Stack Web Developer
        </span>

        <p className="mt-5 text-slate-300 max-w-md leading-relaxed text-lg">
          I build smooth, scalable, and high-performance web applications using
          modern technologies like Next.js, Express, MongoDB, and more.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-6 py-3 bg-lime-500 text-black font-semibold rounded-lg shadow-lg hover:bg-lime-400 transition"
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-3 border border-slate-400 text-white font-semibold rounded-lg hover:bg-slate-800 transition"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex items-center justify-center mt-16 md:mt-0 w-full md:w-1/2"
      >
        {/* Rotating Blob Background */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
            borderRadius: [
              "40% 60% 60% 40%",
              "60% 40% 50% 50%",
              "55% 45% 60% 40%",
              "40% 60% 60% 40%",
            ],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            w-72 h-72 md:w-[22rem] md:h-[22rem]
            bg-lime-600/80 
            blur-xl
            shadow-[0_0_40px_rgba(132,255,0,0.6)]
          "
        />

        {/* Floating Profile Image */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute 
            w-48 h-48 md:w-64 md:h-64 
            rounded-full 
            shadow-[0_4px_30px_rgba(0,0,0,0.4)]
            overflow-hidden
            ring-4 ring-slate-700
          "
        >
          <Image
            src="/profile.png"
            alt="profile"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Baner;
