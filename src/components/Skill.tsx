"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Skill = () => {
  const containerVariants = {
    initial: {
      x: 100,
      rotate: 180,
    },
    whileInView: {
      x: 0,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 30,
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const childVarriants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 40,
      },
    },
  };

  return (
    <div className="w-full pb-6 h-full mt-14 bg-slate-900 overflow-x-hidden">
      <h1 className="p-2 text-2xl font-extrabold">Skills</h1>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delayChildren: 0.3,
          staggerChildren: 0.2,
        }}
        className="flex flex-wrap items-start justify-evenly gap-5 p-4 overflow-hidden"
      >
        <motion.div
          variants={containerVariants}
          initial={"initial"}
          whileInView={"whileInView"}
          className="w-52 h-80 p-1 flex flex-col items-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 ring-4 ring-slate-700 shadow-lg shadow-slate-700"
        >
          <motion.span
            variants={childVarriants}
            initial={"initial"}
            whileInView={"whileInView"}
            className="font-semibold text-xl "
          >
            Frontend
          </motion.span>
          <motion.div
            variants={childVarriants}
            initial={"initial"}
            whileInView={"whileInView"}
            className="flex flex-wrap p-4 "
          >
            <Image width={56} height={56} src={"/nextjs.png"} alt="nextjs" />
            <Image
              width={56}
              height={56}
              src={"/framer_motion.png"}
              alt="framer_motion"
            />
            <Image width={56} height={56} src={"/react.png"} alt="reactjs" />
            <Image width={56} height={56} src={"/redux.png"} alt="reduxjs" />
            <Image
              width={56}
              height={56}
              src={"/tailwindcss.png"}
              alt="tailwindcss"
            />
            <Image width={56} height={56} src={"/htl.png"} alt="html" />
            <Image width={56} height={56} src={"/css.png"} alt="css" />
            <Image
              width={56}
              height={56}
              src={"/javascript.png"}
              alt="javascript"
            />
            <Image width={56} height={56} src={"/graphql.png"} alt="graphql" />
            <Image
              width={56}
              height={56}
              src={"/material_ui.png"}
              alt="material_ui"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={"initial"}
          whileInView={"whileInView"}
          className="w-52 h-80 p-1 flex flex-col items-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 ring-4 ring-slate-700 shadow-lg shadow-slate-700"
        >
          <motion.span
            variants={childVarriants}
            initial={"initial"}
            whileInView={"whileInView"}
            className="font-semibold text-xl"
          >
            Backend
          </motion.span>
          <motion.div
            variants={childVarriants}
            initial={"initial"}
            whileInView={"whileInView"}
            className="flex flex-wrap p-4"
          >
            <Image
              width={56}
              height={56}
              src={"/firebase.png"}
              alt="firebase"
            />
            <Image width={56} height={56} src={"/nextjs.png"} alt="nextjs" />
            <Image width={56} height={56} src={"/mongodb.png"} alt="mongodb" />
            <Image width={56} height={56} src={"/nginx.png"} alt="nginx" />
            <Image width={56} height={56} src={"/mysql.png"} alt="mysql" />
            <Image width={56} height={56} src={"/ts.png"} alt="typescript" />
            <Image width={56} height={56} src={"/graphql.png"} alt="graphql" />
            <Image width={56} height={56} src={"/nestjs.png"} alt="nestjs" />
            <Image width={56} height={56} src={"/redis.png"} alt="redis" />
            <Image width={56} height={56} src={"/nodejs.png"} alt="nodejs" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={"initial"}
          whileInView={"whileInView"}
          className="w-52 h-80 p-1 flex flex-col items-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 ring-4 ring-slate-700 shadow-lg shadow-slate-700"
        >
          <motion.span
            variants={childVarriants}
            initial={"initial"}
            whileInView={"whileInView"}
            className="font-semibold text-xl"
          >
            Others
          </motion.span>
          <motion.div
            variants={childVarriants}
            initial={"initial"}
            whileInView={"whileInView"}
            className="flex flex-wrap p-4"
          >
            <Image width={56} height={56} src={"/docker.png"} alt="docker" />
            <Image width={56} height={56} src={"/github.png"} alt="github" />
            <Image width={56} height={56} src={"/java.png"} alt="java" />
            <Image width={56} height={56} src={"/python.png"} alt="python" />
            <Image width={56} height={56} src={"/rust.png"} alt="rust" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skill;
