"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Expr() {
  const expr_cert = [
    {
      img: "1",
      prompt:
        "Worked 1.1 years as a Full Stack Developer, building interactive UI components, secure backend APIs, and optimized database structures with real-world production deployments.",
      is_y_axis: false,
    },
    {
      img: "2",
      prompt:
        "Worked 3 months as a Full Stack Developer Intern, creating responsive UI, integrating REST APIs, solving performance issues, and deploying full applications.",
      is_y_axis: true,
    },
  ];

  const exprDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const el = exprDiv.current;
      if (!el) return;

      const width = el.clientWidth;

      el.scrollTo({
        left:
          width *
          ((Math.floor(el.scrollLeft / width) + 1) % expr_cert.length),
        behavior: "smooth",
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-900 py-16 mt-20 overflow-hidden">
      {/* Header */}
      <div className="px-6 flex items-center gap-3">
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Experience
        </h1>
        <span className="text-2xl text-lime-400 font-bold">1.4 Years</span>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-x-hidden mt-10">
        <div
          ref={exprDiv}
          className="
            flex 
            snap-x snap-mandatory 
            overflow-x-scroll scroll-smooth 
            no-scrollbar
            w-full
          "
        >
          {expr_cert.map((item, i) => (
            <div
              key={i}
              className="
                shrink-0 
                w-full 
                snap-start 
                flex flex-col lg:flex-row 
                items-center justify-center
                px-6 gap-10
              "
            >
              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="
                  w-full lg:w-1/2 
                  bg-gradient-to-br from-slate-800 to-slate-900 
                  shadow-xl shadow-black/50 
                  rounded-2xl p-6 border border-slate-700/40
                "
              >
                <p className="text-lg md:text-xl font-medium text-slate-200 leading-relaxed">
                  {item.prompt}
                </p>
              </motion.div>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`
                  relative w-full lg:w-1/2 
                  rounded-2xl overflow-hidden shadow-2xl border border-slate-700/40
                  ${item.is_y_axis
                    ? "h-[580px] md:h-[700px] lg:h-[780px]"
                    : "h-[350px] md:h-[450px] lg:h-[600px]"
                  }
                `}
              >
                <Image
                  fill
                  src={`/expr/${item.img}.jpg`}
                  alt=""
                  className="object-cover scale-[1.01]"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
