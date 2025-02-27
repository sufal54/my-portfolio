"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const Work = () => {
  const parentVariants = {
    initial: {
      opacity: 0,
      borderRadius: "50%",
      rotate: 360,
      scale: 0,
    },
    whileInView: {
      opacity: 1,
      rotate: 0,
      borderRadius: "5%",
      scale: 1,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 260,
        damping: 25,
      },
    },
  };

  return (
    <div className="w-full mt-7 flex flex-col">
      <h1 className="ml-4 font-extrabold text-2xl">Works</h1>
      <div className="w-full p-4 flex flex-wrap justify-evenly gap-5">
        <motion.div
          variants={parentVariants}
          initial={"initial"}
          whileInView={"whileInView"}
          className="w-11/12 aspect-[1:1] sm:w-1/2 md:w-1/3 lg:w-1/4 h-96 p-1 relative flex bg-gradient-to-br from-slate-700 to-slate-800 ring-4 ring-slate-700 shadow-lg shadow-slate-700"
        >
          <motion.div
            variants={childVariants}
            initial={"initial"}
            whileInView={"whileInView"}
            className="h-96 gap-3 p-1 relative flex flex-col items-center"
          >
            <span className="font-semibold text-xl ">Sonicspot</span>
            <div className="w-full h-2/3 relative">
              <Image
                fill
                loading="lazy"
                src={"/sonicspot.jpg"}
                alt="Sonicspot"
                className="object-cover rounded-xl"
              />
            </div>
            <div className="w-full h-1/4 flex justify-start items-center">
              <p className="text-lg font-medium">
                Music listening Site- Admin access, song play, push, next,
                previous{" "}
                <Link
                  href={"https://github.com/sufal54/SonicSport"}
                  className="text-base text-blue-600 underline"
                >
                  Read More
                </Link>
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={parentVariants}
          initial={"initial"}
          whileInView={"whileInView"}
          className="w-11/12 aspect-[1:1] sm:w-1/2 md:w-1/3 lg:w-1/4 h-96 p-1 relative flex bg-gradient-to-br from-slate-700 to-slate-800 ring-4 ring-slate-700 shadow-lg shadow-slate-700"
        >
          <motion.div
            variants={childVariants}
            initial={"initial"}
            whileInView={"whileInView"}
            className="h-96 gap-3 p-1 relative flex flex-col items-center"
          >
            <span className="font-semibold text-xl ">Whispchat</span>
            <div className="w-full h-2/3 relative">
              <Image
                fill
                loading="lazy"
                src={"/whispchat.jpg"}
                alt="Whispchat"
                className="object-cover rounded-xl"
              />
            </div>
            <div className="w-full h-1/4 flex justify-start items-center">
              <p className="text-lg font-medium">
                private user to user chat Web Application search user using
                user_name{" "}
                <Link
                  href={"https://github.com/sufal54/whispchat"}
                  className="text-base text-blue-600 underline"
                >
                  Read More
                </Link>
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={parentVariants}
          initial={"initial"}
          whileInView={"whileInView"}
          className="w-11/12 aspect-[1:1] sm:w-1/2 md:w-1/3 lg:w-1/4 h-96 p-1 relative flex bg-gradient-to-br from-slate-700 to-slate-800 ring-4 ring-slate-700 shadow-lg shadow-slate-700"
        >
          <motion.div
            variants={childVariants}
            initial={"initial"}
            whileInView={"whileInView"}
            className="h-96 gap-3 p-1 relative flex flex-col items-center"
          >
            <span className="font-semibold text-xl ">Nova</span>
            <div className="w-full h-2/3 relative">
              <Image
                fill
                loading="lazy"
                src={"/nova.jpg"}
                alt="nova"
                className="object-cover rounded-xl"
              />
            </div>
            <div className="w-full h-1/4 flex justify-start items-center">
              <p className="text-lg font-medium">
                Cloth shopping site categorise according gender, adults and kids{" "}
                <Link
                  href={"https://github.com/sufal54"}
                  className="text-base text-blue-600 underline"
                >
                  Read More
                </Link>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
