"use client";
import React from "react";
import { ImageTray } from "@/components/ImageTray";
import { BlockQuotes } from "@/components/BlockQuotes";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 md:scroll-mt-28 w-full px-6 sm:px-4">
      <div className="w-full max-w-[92vw] md:max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-6 md:mt-12 w-full items-center md:items-stretch md:justify-center md:h-[285px]">
          <div className="w-full flex justify-center md:block md:w-auto md:min-w-0 md:h-full md:overflow-hidden">
            <BlockQuotes />
          </div>
          <div className="hidden md:flex md:justify-center md:w-auto md:min-w-0 md:flex-shrink-0 md:h-full">
            <ImageTray />
          </div>
        </div>
      </div>
    </section>
  );
}
