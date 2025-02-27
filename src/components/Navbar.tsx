"use client";
import React from "react";
import { motion } from "framer-motion";
// import { IoMenuOutline } from "react-icons/io5";
// import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  return (
    <nav className="w-full h-full relative">
      <div className="w-36 h-full absolute flex items-center left-2">
        <motion.span
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
          className="font-semibold text-xl"
        >
          Sufal Bala
        </motion.span>
      </div>
      {/* <motion.div
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
        className="w-full pr-5 h-full flex items-center justify-end gap-3"
      >
        <span>Home</span>
        <span>About</span>
        <span>Work</span>
        <span>Contact</span>
      </motion.div> */}
    </nav>
  );
};

export default Navbar;
