"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <div id="contact" className="w-full bg-slate-900 py-16 flex items-center justify-center">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center gap-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-slate-300">
          Email: <span className="text-lime-400">sufalbala29@gmail.com</span>
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4 text-2xl text-white">
          <Link
            href="https://www.linkedin.com/in/sufal-bala-b404242a9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-lime-400"
            >
              <FaLinkedin />
            </motion.div>
          </Link>

          <Link
            href="https://github.com/sufal54"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-lime-400"
            >
              <IoLogoGithub />
            </motion.div>
          </Link>
        </div>

        <p className="mt-6 text-slate-500 text-sm">
          © {new Date().getFullYear()} Sufal Bala. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
