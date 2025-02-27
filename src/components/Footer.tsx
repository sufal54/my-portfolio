"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <span className="font-semibold text-xl">Contact Deatils</span>
        <span className="text-lg">Email: sufalbala29@gmail.com</span>
        <div className="flex gap-4">
          <Link
            href={
              "https://www.linkedin.com/in/sufal-bala-b404242a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
          >
            <FaLinkedin className="cursor-pointer" />
          </Link>
          <Link href={"https://github.com/sufal54"}>
            <IoLogoGithub className="cursor-pointer" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
