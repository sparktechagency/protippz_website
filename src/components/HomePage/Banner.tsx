"use client";
import { useContextData } from "@/provider/ContextProvider";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const Banner = () => {
  const data = useContextData();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/cXf1gL5/image-1.png)",
        }}
      >
        <div className="absolute w-full h-full bg-black opacity-50 z-10"></div>
        <motion.div
          className="container mx-auto text-left text-white z-30 md:p-0 p-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={childVariants}
          >
            Start Tipping
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6 max-w-md"
            variants={childVariants}
          >
            Tip your favorite players and teams, earn rewards, win prizes, and
            join a community of passionate sports lovers.
          </motion.p>
          {data?.userData?._id ? (
            <motion.div variants={childVariants}>
              <Link
                href={`/playerz`}
                className="bg-[#053697] hover:bg-[#6491eb] text-white font-semibold py-3 px-6 rounded-lg transition-all"
              >
                Start Tip
              </Link>
            </motion.div>
          ) : (
            <motion.div variants={childVariants}>
              <Link
                href={`/sign-up`}
                className="bg-[#053697] hover:bg-[#6491eb] text-white font-semibold py-3 px-6 rounded-lg transition-all"
              >
                Sign up Now
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Banner;