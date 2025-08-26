"use client";
import React from "react";
import Image from "next/image";

export const BlockQuotes = () => {
  return (
    <div className="flex flex-col mx-auto">
      <div className="mb-5">
        <span className="font-bold text-[22px] md:text-[26px] italic">Hey, I am Lasitha E 👋🏻</span>
        <br />
        <i>
          <span style={{
              fontFamily: "Jost", fontStyle:"normal"
          }} className="text-[16px] text-[#364153]">
            Product Manager in the making with{" "}
            <strong>3+ years of experience in fast-paced startups</strong> as a{" "}
            <strong>frontend developer and project lead</strong>.
            <br />
            Skilled in collaboration, user-first thinking, and
            execution. Currently building case studies and
            doing user research to move into product.
          </span>
        </i>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between gap-4 text-[16px] md:text-[18px] items-center text-center md:mt-6">
        <div className="flex flex-col justify-center gap-6 w-full mb-2 text-[16px] md:text-[18px] text-[#364153]">
          <div className="relative">
            <span className="absolute -top-3 -left-3 text-[24px] rotate-[-36deg] z-10">
              🎧
            </span>
            <div className="flex items-center justify-between gap-4 border bg-white border-gray-300 shadow-md rounded-md p-2 pl-6">
              <div className="text-start">
                <p className="text-[16px]">
                  <span className="font-bold italic">
                    Currently listening to:
                  </span>{" "}
                  Lenny's Podcast
                </p>
              </div>

              <div className="p-1 border border-gray-300 shadow-md hover:scale-110 hover:rotate-[5deg] transition rounded-md bg-white backdrop-blur-md">
                <Image
                  src="/current_podcast.png"
                  alt="Podcast Icon"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <span className="absolute -top-3 -left-3 text-[24px] rotate-[-36deg] z-10">
              📖
            </span>
            <div className="flex items-center justify-between gap-4 border bg-white border-gray-300 shadow-md rounded-md p-2 pl-6">
              <div className="text-start">
                <p className="text-[16px]">
                  <span className="font-bold italic">Currently reading:</span>{" "}
                  Cracking the PM Interview
                </p>
              </div>

              <div className="p-1 border border-gray-300 shadow-md hover:scale-110 hover:rotate-[5deg] transition rounded-md bg-white backdrop-blur-md">
                <Image
                  src="/current_book.png"
                  alt="Podcast Icon"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
