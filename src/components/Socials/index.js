"use client";

import {
  XLogo,
  YoutubeLogo,
  InstagramLogo,
  LinkedinLogo,
  Envelope,
  Bookmark,
} from "@phosphor-icons/react";
import React from "react";
import Image from "next/image";

const Socials = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center mb-3 text-center">
        <p className="w-full sm:w-auto">
          Would I rather be feared or loved? Easy.{" "}
          <strong>Loved. On socials.</strong>
        </p>
        <span className="flex items-center mx-2 p-1 border-[0.5] border-gray-800/10 shadow-md hover:scale-110 hover:rotate-[5deg] rounded-md bg-white backdrop-blur-md">
          <Image
            src="/michael.png"
            alt="Landing Page Photo"
            width={70}
            height={70}
            className="rounded-md"
          />
        </span>
      </div>
      <div
        className="grid grid-cols-3 md:grid-cols-6 gap-4  items-center justify-center my-8 
     sm:max-w-md md:max-w-none mx-auto"
      >
        <a
          className="flex cursor-pointer items-center justify-center border-2 border-[#000] bg-transparent 
shadow-xl w-10 h-10 aspect-square rounded-full 
transition-transform duration-300 hover:scale-110 text-[#000] hover:bg-[#000] hover:text-[#fff]"
          href="https://x.com/lasitha_e"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XLogo size={22} className="" weight="bold" />
        </a>
        <a
          className="flex cursor-pointer items-center justify-center border-2 border-[#FF5555] bg-[#fff] shadow-xl w-10 h-10 aspect-square rounded-full 
transition-transform duration-300 hover:scale-110 hover:bg-[#FF5555] text-[#FF5555] hover:text-white"
          href="https://www.youtube.com/@lassinotlassi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeLogo size={22} weight="fill" />
        </a>

        <a
          className="flex cursor-pointer items-center justify-center border-2 border-[#C13584] bg-[#fff] shadow-xl w-10 h-10 aspect-square rounded-full 
transition-transform duration-300 hover:scale-110 hover:bg-[#C13584] text-[#C13584] hover:text-white"
          href="https://www.instagram.com/lassinotlassii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo size={22} weight="bold" />
        </a>

        <a
          className="flex cursor-pointer items-center justify-center border-2 border-[#0072b1] bg-[#fff] shadow-xl w-10 h-10 aspect-square rounded-full 
transition-transform duration-300 hover:scale-110 hover:bg-[#0072b1] text-[#0072b1] hover:text-white"
          href="https://www.linkedin.com/in/lasithae/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogo size={22} weight="bold" />
        </a>

        <a
          className="flex cursor-pointer items-center justify-center border-2 border-[#000] bg-[#fff] shadow-xl w-10 h-10 aspect-square rounded-full 
transition-transform duration-300 hover:scale-110 hover:bg-[#000] text-[#000] hover:text-white"
          href="mailto:lasithaeaswaran@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Envelope size={22} weight="bold" />
        </a>

        <a
          className="flex cursor-pointer items-center justify-center border-2 border-[#424242] bg-[#fff] shadow-xl w-10 h-10 aspect-square rounded-full 
transition-transform duration-300 hover:scale-110 hover:bg-[#424242] text-[#424242] hover:text-white"
          href="https://lasithae.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Bookmark size={22} weight="bold" />
        </a>
      </div>
    </>
  );
};

export default Socials;
