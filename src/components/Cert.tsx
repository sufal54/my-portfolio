"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Card } from "./CertCaed";
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

  const [index, setIndex] = useState(0);
  return (
    <div className="w-full h-full flex flex-col mt-14 bg-slate-900">
      <h1 className="p-2 text-2xl font-extrabold">Certificate</h1>
      <div

        style={{ scrollbarWidth: "none" }}
        className="w-full min-h-96 flex flex-wrap flex-col items-center justify-center"
      >
        <motion.div style={{ position: "relative" }}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="w-[600] h-[500] md:w-[700] md:h-[590]"></div>
          <AnimatePresence initial={false}>
            <Card
              certImg={certImg} key={index + 1}
              frontCard={false} index={index + 1} setIndex={setIndex} />
            <Card
              key={index}
              frontCard={true}
              index={index}
              setIndex={setIndex}
              drag="x"
              certImg={certImg}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Cert;
