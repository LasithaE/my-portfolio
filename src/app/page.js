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
        {/* <div className="flex flex-col md:flex-row gap-6 mt-6 md:mt-12 w-full">
          <div className="w-full md:w-auto">
            <ImageTray />
          </div>
          <div className="w-full flex flex-col justify-between">
            <BlockQuotes />
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row gap-6 mt-6 md:mt-12 w-full items-center md:items-start">
          <div className="w-full flex justify-center md:block">
            <ImageTray />
          </div>
          <div className="w-full flex justify-center md:block">
            <BlockQuotes />
          </div>
        </div>

        <div className="text-[20px] md:text-[22px] font-bold justify-start items-start flex w-full mt-8">
          <span className="text-start mb-2">Quick Links</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-[16px] md:text-[18px] mb-6">
        {[
  { href: "/articles", label: "📂  Case Studies" },
  { href: "/resume.pdf", label: "📜  Resume" },
  { href: "/work", label: "💼  Experience" },
  { href: "/about", label: "✨  About" },
].map((link, index) => (
  link.href === "/resume.pdf" ? (
    <a
      key={index}
    href="/resume.pdf"
  download="Lasitha_E_PM_Resume.pdf"
      className="block w-full text-center hover:scale-105 transition-transform border bg-white border-gray-300 shadow-md rounded-md px-4 py-3"
    >
      {link.label}
    </a>
  ) : (
    <a
      key={index}
      href={link.href}
      className="block w-full text-center hover:scale-105 transition-transform border bg-white border-gray-300 shadow-md rounded-md px-4 py-3"
    >
      {link.label}
    </a>
  )
))}

        </div>

        <Socials />
      </div>
    </div>
  );
}
