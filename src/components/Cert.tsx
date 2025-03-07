"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
const Cert = () => {
  const certImg: string[] = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
  ];

  const scrollContainer = useRef<HTMLDivElement>(null);
  let scrollDirection: "left" | "right" = "left";
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

  useEffect(() => {
    const scroll = setInterval(() => {
      if (scrollContainer.current) {
        if (scrollDirection === "left") {
          scrollContainer.current.scrollLeft += 425;
          if (
            scrollContainer.current.scrollLeft +
              scrollContainer.current.clientWidth >=
            scrollContainer.current.scrollWidth
          ) {
            scrollDirection = "right";
          }
        } else {
          scrollContainer.current.scrollLeft -= 425;
          if (scrollContainer.current.scrollLeft <= 0) {
            scrollDirection = "left";
          }
        }
      }
    }, 3000);

    return () => clearInterval(scroll);
  }, []);
  return (
    <div className="w-full h-full flex flex-col mt-14 bg-slate-900">
      <h1 className="p-2 text-2xl font-extrabold">Certificate</h1>
      <div
        ref={scrollContainer}
        style={{ scrollbarWidth: "none" }}
        className="w-full h-96 flex flex-wrap flex-col justify-center gap-10 scroll-smooth overflow-x-scroll"
      >
        {certImg.map((item, i) => (
          <motion.div
            key={i}
            className="w-96 h-80 relative rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 ring-4 ring-slate-700 shadow-lg shadow-slate-700"
          >
            <Image
              className="rounded-xl"
              src={`/cert/${item}`}
              fill
              loading="lazy"
              alt="certificate"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cert;
