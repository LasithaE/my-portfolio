"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../app/globals.css";
import { usePathname } from "next/navigation";
import { Star, X, List } from "@phosphor-icons/react";
import WavyUnderline from "../WavyUnderline";

export function TopBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [clicked, setClicked] = useState(() => {
    switch (pathname) {
      case "/work":
        return "Work";
      case "/about":
        return "About";
      case "/":
        return "Home";
      default:
        return "Home";
    }
  });
  useEffect(() => {
    switch (pathname) {
      case "/work":
        setClicked("Work");
        break;
      case "/about":
        setClicked("About");
        break;
      case "/":
        setClicked("Home");
        break;
      default:
        setClicked("Home");
    }
  }, [pathname]);
  return (
    <div className="relative">
      {/* Navbar */}
      <div className="flex items-center justify-between h-16 w-full px-6 md:mt-5">
        {/* Logo */}
        <Image
          src="/sign_black_and_red.png"
          alt="Sign Icon"
          width={120}
          height={50}
          className="h-15 mt-4"
        />

        {/* Desktop Nav (Hidden on mobile) */}
        <div className="hidden md:flex justify-center items-center gap-6 flex-grow mt-4">
          <button
            className="mx-2 cursor-pointer"
            onClick={() => setClicked("Home")}
          >
            <Link href="/">
              <WavyUnderline text={"Home"} hovered={null} clicked={clicked} />
            </Link>
          </button>
          <Star size={14} weight={"fill"} />
          <button
            className="mx-2 cursor-pointer"
            onClick={() => setClicked("Work")}
          >
            <Link href="/work">
              <WavyUnderline text={"Work"} hovered={null} clicked={clicked} />
            </Link>
          </button>
          <Star size={14} weight={"fill"} />
          <button
            className="mx-2 cursor-pointer"
            onClick={() => setClicked("About")}
          >
            <Link href="/about">
              <WavyUnderline text={"About"} hovered={null} clicked={clicked} />
            </Link>
          </button>
        </div>

        {/* Connect Button (Always visible) */}
        <a
          href="https://x.com/lasitha_e"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <button
            className="px-4 py-2 text-white bg-gray-800 border border-gray-800 rounded-lg shadow-md transition shadow-2xl 
      hover:bg-white hover:text-gray-800 hover:scale-105 cursor-pointer
      active:bg-white active:text-gray-800 active:scale-105 hidden md:block"
          >
            Let’s connect
          </button>
        </a>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <div /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/50 flex flex-col items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-[400px] flex flex-col items-center">
            <button
              className="absolute top-4 right-4 text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col gap-6 text-xl mt-6">
              <button
                className="cursor-pointer"
                onClick={() => {
                  setClicked("Home");
                  setMenuOpen(false);
                }}
              >
                <Link href="/">
                  <WavyUnderline
                    text={"Home"}
                    hovered={null}
                    clicked={clicked}
                  />
                </Link>
              </button>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setClicked("Work");
                  setMenuOpen(false);
                }}
              >
                <Link href="/work">
                  <WavyUnderline
                    text={"Work"}
                    hovered={null}
                    clicked={clicked}
                  />
                </Link>
              </button>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setClicked("About");
                  setMenuOpen(false);
                }}
              >
                <Link href="/about">
                  <WavyUnderline
                    text={"About"}
                    hovered={null}
                    clicked={clicked}
                  />
                </Link>
              </button>
              <a
                href="https://x.com/lasitha_e"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <button
                  className="px-4 py-2 mt-4 text-white bg-gray-800 border border-gray-800 rounded-lg shadow-md 
            hover:bg-white hover:text-gray-800 hover:scale-105 transition cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Let’s connect
                </button>
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
