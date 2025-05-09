"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const Work = () => {

  const projects: { name: string, img: string, prompt: string, github: string }[] = [
    {
      name: "Sonicspot",
      img: "/project/sonicspot.jpg",
      prompt: "I built an online song streaming site where users can play, skip, and navigate songs, view songs by artist, top tracks, and new releases, and sign in with Google Authentication. It includes a secure admin dashboard where admins can upload or delete songs and block users. Tech stack: ReactJS, React-Redux, Firebase, and MongoDB.",
      github: "https://github.com/sufal54/SonicSport"
    },
    {
      name: "Whispchat",
      img: "/project/whispchat.jpg",
      prompt: "I built a real-time chat web app where users can privately message each other, see online/offline status, and search for other users by username. The tech stack includes React, React-Redux, TailwindCSS, Express, MongoDB, and custom APIs.",
      github: "https://github.com/sufal54/whispchat"
    },
    {
      name: "Nova",
      img: "/project/nova.jpg",
      prompt: "I built an e-commerce website for clothing, where items are categorized by gender, with support for different colors, sizes, and prices. Users can add selected items to a shopping cart. My main focus was on the frontend, using Next.js, TailwindCSS, React-Redux, while the backend is powered by Express, MongoDB, and custom APIs.",
      github: "https://github.com/sufal54"
    },
    {
      name: "ChessGame",
      img: "/project/chess.jpg",
      prompt: "I'm building an online chess game from scratch using Next.js, TypeScript, Express, and Socket.io, where two players can play and chat in real-time. The entire chess logic is built by me without using any libraries, fully based on OOP principles.",
      github: "https://github.com/sufal54/chess-game-client"
    },
    {
      name: "JacksDB",
      img: "/project/jacks_db.png",
      prompt: "I'm working on a custom database project called jacks_db, built completely from scratch in Rust. It tackles low-level challenges such as deadlocks, data overlap, and implements encryption using bit manipulation. I'm also developing a custom serialization/deserialization system—a lightweight clone of serde_json—tailored for the database's performance needs. While the core logic is in Rust, I'm creating a bridge to expose its capabilities to other languages like TypeScript, making jacks_db both powerful and accessible.",
      github: "https://github.com/sufal54/jsondb-server"
    }
  ];

  return (
    <div className="w-full mt-7 flex flex-col">
      <h1 className="ml-4 font-extrabold text-2xl">Works</h1>
      <div className="w-full p-4 flex flex-wrap justify-evenly gap-5 overflow-hidden">
        <AnimatePresence>
          {
            projects.map((item, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  scale: 0.75
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1
                }}

                exit={{
                  opacity: 0,
                  scale: 0.75
                }}
                className="w-11/12 aspect-[1:1] sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 rounded-xl relative flex bg-gradient-to-br from-slate-700 to-slate-800 ring-4 ring-slate-700 shadow-lg shadow-slate-700"
              >
                <motion.div
                  initial={{
                    opacity: 0
                  }}

                  whileInView={{
                    opacity: [0.3, 0.6, 1]
                  }}

                  transition={{
                    delay: 0.1
                  }}
                  className="gap-3 p-1 relative flex flex-col items-center"
                >
                  <span className="font-semibold text-xl ">{item.name}</span>
                  <div className="w-full min-h-48 h-2/3 relative">
                    <Image
                      fill
                      loading="lazy"
                      src={item.img}
                      alt={item.name}
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="w-full  flex justify-start items-center">
                    <p className="text-lg font-medium">
                      {item.prompt}
                      <Link
                        href={item.github}
                        className="text-base text-blue-600 underline"
                      >
                        Read More
                      </Link>
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))
          }
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Work;
