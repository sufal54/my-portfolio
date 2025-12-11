"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Work = () => {
  const projects = [
    {
      name: "Sonicspot",
      img: "/project/sonicspot.jpg",
      prompt: "An online music streaming platform with Google Auth, admin dashboard, song upload/delete, playlists, and top track browsing.",
      github: "https://github.com/sufal54/SonicSport",
      video: "https://www.youtube.com/embed/vvDjeB59SMk?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1",
    },
    {
      name: "Whispchat",
      img: "/project/whispchat.jpg",
      prompt: "A real-time private chat app with online/offline status, user search, and fast messaging",
      github: "https://github.com/sufal54/whispchat",
      video: "https://www.youtube.com/embed/7FU614w_C6U?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1",
    },
    {
      name: "Nova",
      img: "/project/nova.jpg",
      prompt: "A modern clothing e-commerce website with filters, cart system, and clean UI.",
      github: "https://github.com/sufal54",
      video: "https://www.youtube.com/embed/_jA4QuOJ9bo?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1",
    },
  ];


  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div id="projects" className="w-full mt-20 px-6 lg:px-16">
      <h1 className="text-3xl font-extrabold mb-8 text-white">
        Featured Projects
      </h1>

      {/* Grid with stagger */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
              },
            }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="
              p-4 rounded-2xl backdrop-blur-xl 
              bg-white/10 border border-white/20 
              shadow-[0_0_25px_rgba(0,0,0,0.4)]
              hover:shadow-[0_0_40px_rgba(132,255,0,0.35)]
              transition
              flex flex-col justify-between relative overflow-hidden
            "
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image or Video */}
            <div className="relative w-full h-52 rounded-xl overflow-hidden shadow-md">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className={`object-cover transition duration-500 ${hovered === i ? "blur-sm brightness-75" : ""}`}
              />

              {hovered === i && item.video && (
                <iframe
                  src={item.video}
                  title={item.name}
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              )}
            </div>



            {/* Info */}
            <div className="mt-4 flex flex-col">
              <h2 className="text-xl font-bold text-white">{item.name}</h2>
              <p className="text-slate-300 mt-2 text-sm">{item.prompt}</p>
            </div>

            {/* Button */}
            <div className="mt-4">
              <Link
                href={item.github}
                target="_blank"
                className="
                  inline-block text-center w-full
                  py-2 px-3 
                  bg-lime-500 text-black font-semibold 
                  rounded-lg mt-3 hover:bg-lime-400 
                  shadow-md hover:shadow-lg 
                  transition
                "
              >
                GitHub →
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
