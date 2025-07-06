"use client";
import React from "react";
import "./globals.css";
import Socials from "@/components/Socials";
import { BlockQuotes } from "@/components/BlockQuotes";
import { ImageTray } from "@/components/ImageTray";

export default function Home() {
  return (
    <div className="w-full px-6 sm:px-4">
      <div className="w-full max-w-[92vw] md:max-w-screen-md mx-auto flex flex-col items-center justify-center">
        {/* Responsive layout for image + blockquote */}
        <div className="flex flex-col md:flex-row gap-6 mt-6 md:mt-12 w-full">
          <div className="w-full md:w-auto">
            <ImageTray />
          </div>
          <div className="w-full flex flex-col justify-between">
            <BlockQuotes />
          </div>
        </div>

        <div className="text-[20px] md:text-[22px] font-bold justify-start items-start flex w-full mt-8">
          <span className="text-start mb-2">Quick Links</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-[16px] md:text-[18px] mb-10">
          {[
            { href: "https://x.com/lasitha_e", label: "📜 Case Studies" },
            { href: "https://x.com/lasitha_e", label: "🚀 My Journey" },
            { href: "https://x.com/lasitha_e", label: "💼 Experience" },
            { href: "https://x.com/lasitha_e", label: "✨ About" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center hover:scale-105 transition-transform border bg-white border-gray-300 shadow-md rounded-md px-4 py-3"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Socials />
      </div>
    </div>
  );
}
