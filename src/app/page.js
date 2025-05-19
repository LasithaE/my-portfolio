"use client";
import React from "react";
import Image from "next/image";
import "./globals.css";
import {
  XLogo,
  YoutubeLogo,
  InstagramLogo,
  Bookmark,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Envelope } from "@phosphor-icons/react";
import TypingEffect from "@/components/TypingEffect";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mt-5 md:mt-20">
        <div className="relative flex justify-center items-center w-full md:w-1/2 group">
          {/* First Image - Left */}
          <Image
            src="/monitor.JPG"
            alt="Landing Page Photo"
            width={300}
            height={300}
            className="absolute left-[-30%] opacity-0 scale-75 rotate-[-10deg] transition-all duration-500 ease-in-out 
         group-hover:opacity-100 group-hover:scale-100 group-hover:left-[0px] group-hover:rotate-[-10deg] rounded-[10%]"
          />

          {/* Second Image - Right */}
          <Image
            src="/cute.JPG"
            alt="Landing Page Photo"
            width={300}
            height={300}
            className="absolute right-[-30%] opacity-0 scale-75 rotate-[10deg] transition-all duration-500 ease-in-out 
         group-hover:opacity-100 group-hover:scale-100 group-hover:right-[0px] group-hover:rotate-[10deg] rounded-[10%]"
          />

          {/* Corner Image */}
          {/* <Image
    src="/corner.png"
    alt="Corner Image"
    width={100}
    height={100}
    className="absolute opacity-0 md:opacity-100 -top-8 group-hover:opacity-0 left-42 z-20 rounded-tl-[10%] transition-all duration-500 ease-in-out group-hover:scale-110"
  /> */}

          {/* Main Image */}
          <Image
            src="/landing.JPG"
            alt="Landing Page Photo"
            width={300}
            height={300}
            className="relative z-10 rounded-[10%] transition-all duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
        {/* Typing Effect */}
        <div className="relative flex justify-center items-center w-full md:w-[900px] h-[50px] text-center mt-10 md:mt-25 md:mb-5">
          <TypingEffect />
        </div>
      </div>

      <div className="text-[22px] ml-2 font-jost cursor-default text-[#424141] flex flex-col items-center justify-center mx-auto mt-10 md:mt-5 px-4">
        <div className="text-[26px] font-semibold mb-4 italic text-center">
          Frontend dev by day, aspiring product manager by ambition.
          <br />
        </div>

        {/* Text Block 1 */}
        <div className="flex flex-wrap justify-center items-center mb-3 text-center">
          <p className="w-full sm:w-auto">
            I’ve worked in <strong className="ml-2">four startups</strong>,
            picking up lessons and debugging nightmares here
          </p>
          <span className="flex items-center mx-2 p-1 border-1 border-gray-800/10 shadow-md hover:scale-110 hover:rotate-[5deg] rounded-md bg-white backdrop-blur-md">
            <Image
              src="/setup.jpg"
              alt="Landing Page Photo"
              width={50}
              height={50}
              className="rounded-md"
            />
          </span>
          <p> along the way.</p>
        </div>

        {/* Text Block 2 */}
        <div className="flex flex-wrap justify-center items-center mb-3 text-center">
          <p className="w-full sm:w-auto">
            I believe that<strong className="ml-2">filter coffee</strong>
          </p>
          <span className="flex items-center mx-2 p-1 border-1 border-gray-800/10 shadow-md hover:scale-110 hover:rotate-[5deg] rounded-md bg-white backdrop-blur-md">
            <Image
              src="/coffee.jpg"
              alt="Landing Page Photo"
              width={50}
              height={50}
              className="rounded-md"
            />
          </span>
          <p> can fix literally anything/anyone.</p>
        </div>

        {/* Text Block 3 */}
        <div className="flex flex-wrap justify-center items-center mb-3 text-center">
          <p className="w-full sm:w-auto">
            Born a <strong className="ml-2">Malayali</strong>
          </p>
          <span className="flex w-[52px] mr-2 h-[52px] items-center ml-2 p-1 border-1 border-gray-800/10 shadow-md hover:scale-110 hover:rotate-[5deg] rounded-md bg-white backdrop-blur-md">
            <Image
              src="/sadhya.jpg"
              alt="Landing Page Photo"
              width={45}
              height={45}
              className="rounded-md"
            />
          </span>
          <p>
            {" "}
            in Mumbai, now in <strong className="ml-2">Bangalore</strong>
          </p>
          <span className="flex items-center mx-2 p-1 border-1 border-gray-800/10 shadow-md hover:scale-110 hover:rotate-[5deg] rounded-md bg-white backdrop-blur-md">
            <Image
              src="/blr.jpg"
              alt="Landing Page Photo"
              width={50}
              height={50}
              className="rounded-md"
            />
          </span>
          <p>
            —where I build slick interfaces, make home films, and break down
            what makes a product tick.
          </p>
        </div>

        {/* Text Block 4 */}
        <div className="flex flex-wrap justify-center items-center mb-3 text-center">
          <p className="w-full sm:w-auto">
            When I’m not coding, I’m in the{" "}
            <strong className="ml-2">kitchen experimenting</strong>
          </p>
          <span className="flex items-center mx-2 p-1 border-1 border-gray-800/10 shadow-md hover:scale-110 hover:rotate-[5deg] rounded-md bg-white backdrop-blur-md">
            <Image
              src="/homefood.jpg"
              alt="Landing Page Photo"
              width={50}
              height={50}
              className="rounded-md"
            />
          </span>
          <p>
            {" "}
            or hunting for{" "}
            <strong className="ml-2">Bangalore’s next food gem.</strong>
          </p>
          <span className="flex items-center mx-2 p-1 border-1 border-gray-800/10 shadow-md hover:scale-110 hover:rotate-[5deg] rounded-md bg-white backdrop-blur-md">
            <Image
              src="/waffle.jpg"
              alt="Landing Page Photo"
              width={50}
              height={50}
              className="rounded-md"
            />
          </span>
        </div>
      </div>

      <div className="mt-10 text-[14px] md:text-[18px] text-[#aeaeae] flex items-center justify-center text-center italic hover:text-[#000] max-w-xs sm:max-w-md mx-auto">
        <div className="flex flex-row justify-center items-center mb-3 text-center">
          <p className="w-full sm:w-auto">
          Would I rather be feared or loved? Easy. <strong>Loved. On socials.</strong>
          </p>
          <span className="flex items-center mx-2 p-1 border-[0.5] border-gray-800/10 shadow-md hover:scale-110 hover:rotate-[5deg] rounded-md bg-white backdrop-blur-md">
            <Image
              src="/dwight.jpg"
              alt="Landing Page Photo"
              width={70}
              height={70}
              className="rounded-md"
            />
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center my-8 max-w-xs sm:max-w-md mx-auto">
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
}
