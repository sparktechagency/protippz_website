"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import download from "@/Assets/download.png";
import qrCode from "@/Assets/qrcode.png";
import appsore from "@/Assets/appsore.png";
import playstore from "@/Assets/playstore.png";
import Link from "next/link";

const DownloadSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const translateX = useTransform(mouseX, [-200, 200], [-20, 20]);
  const translateY = useTransform(mouseY, [-200, 200], [-20, 20]);

  return (
    <section className="flex justify-center items-center bg-white px-4 mt-20 md:mt-0 min-h-screen flex-col gap-10">
      <div>
        <h3 className="text-3xl text-center text-[#053697]">Download Today</h3>
        <p className="text-xl text-center text-[#2FC191]">
          Available at Google Play & Apple Store
        </p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 relative">
        <motion.div
          className="bg-[#2FC191] relative p-1 lg:h-[500px] h-[400px] text-white w-full max-w-lg md:max-w-lg lg:max-w-xl md:px-12 text-center z-10 flex flex-col justify-center items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            mouseX.set(0);
            mouseY.set(0);
          }}
          onMouseMove={handleMouseMove}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
          style={{ translateX, translateY, borderRadius: "500px" }}
        >
          <h2 className="text-2xl font-bold mb-4">Download Our App</h2>
          <p className="mb-6">
            Tip your favorite players and teams, earn rewards, win prizes, and
            join a community of passionate sports lovers.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-between items-center gap-2">
              <div className="bg-white rounded-md">
                <Image
                  src={qrCode}
                  alt="Qr Code"
                  width={3000}
                  height={6000}
                  className="w-[90px] h-[90px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.protipz.cory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={playstore}
                    alt="app store"
                    width={100}
                    height={100}
                  />
                </Link>
                <a
                  href="https://apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={appsore}
                    alt="app store"
                    width={100}
                    height={100}
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute md:relative  md:right-20 md:ml-10 md:top-0  lg:ml-20 md:z-20 ">
          <Image src={download} alt="Mobile Mockup" width={300} height={600} />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
