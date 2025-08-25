"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../app/globals.css";
import { usePathname } from "next/navigation";
import {
  Star,
  X,
  List,
  DownloadSimple,
  ChatTeardropText,
} from "@phosphor-icons/react";
import WavyUnderline from "../WavyUnderline";

export function TopBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [clicked, setClicked] = useState(() => {
    switch (pathname) {
      case "/work":
        return "Work";
      case "/articles":
        return "Articles";
      case "/about":
        return "About";
      case "/":
        return "Home";
      default:
        return "Home";
    }
  });
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    switch (pathname) {
      case "/work":
        setClicked("Work");
        break;
      case "/about":
        setClicked("About");
        break;
      case "/articles":
        setClicked("Articles");
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
      <div className="flex items-center justify-between h-16 w-full md:max-w-screen-md mx-auto px-6 md:mt-5">
        {/* Logo */}
        <Link href="/">
          <button onClick={() => setClicked("Home")}>
            <div className="flex-shrink-0 mt-4">
              <Image
                src="/sign_black_and_red.png"
                alt="Sign Icon"
                width={100}
                height={40}
              />{" "}
            </div>
          </button>
        </Link>

        {/* Desktop Nav (Centered) */}
        <div className="hidden md:flex items-center justify-center gap-4 flex-1 mt-4">
          <Link href="/">
            <button onClick={() => setClicked("Home")}>
              <WavyUnderline text={"Home"} selected={clicked} />
            </button>
          </Link>
          <Star size={14} weight={"fill"} />
          <Link href="/work">
            <button onClick={() => setClicked("Work")}>
              <WavyUnderline text={"Work"} selected={clicked} />
            </button>
          </Link>
          <Star size={14} weight={"fill"} />
          <Link href="/articles">
            <button onClick={() => setClicked("Articles")}>
              <WavyUnderline text={"Articles"} selected={clicked} />
            </button>
          </Link>
          <Star size={14} weight={"fill"} />
          <Link href="/about">
            <button onClick={() => setClicked("About")}>
              <WavyUnderline text={"About"} selected={clicked} />
            </button>
          </Link>
        </div>

        {/* Desktop Action Buttons (Right aligned) */}
        <div className="hidden md:flex gap-3 items-center mt-4">
          <a
            href="https://x.com/lasitha_e"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center h-10 bg-gray-800 text-white pl-2 pr-0 hover:pr-3 rounded-full transition-all duration-200"
          >
            <span className="w-6 h-6 flex items-center justify-center">
              <ChatTeardropText size={14} />
            </span>
            <span className="ml-2 overflow-hidden max-w-0 opacity-0 group-hover:max-w-[160px] group-hover:opacity-100 transition-all duration-300 text-sm whitespace-nowrap">
              Connect
            </span>
          </a>

          <a
            href="/resume.pdf"
        download="Lasitha_E_PM_Resume.pdf"
            className="group flex items-center h-10 bg-gray-800 text-white pl-2 pr-0 hover:pr-3 rounded-full transition-all duration-200"
          >
            <span className="w-6 h-6 flex items-center justify-center">
              <DownloadSimple size={14} />
            </span>
            <span className="ml-2 overflow-hidden max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-300 text-sm whitespace-nowrap">
              Resume
            </span>
          </a>
        </div>

        {/* Mobile: Scroll-dependent action buttons */}
        <div className="md:hidden flex items-center gap-2 text-gray-800 mt-4">
          {scrolledDown ? (
            <>
              <a
                href="https://x.com/lasitha_e"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white p-1 rounded-full"
              >
                <ChatTeardropText size={16} />
              </a>
              <a
                href="/resume.pdf"
              download="Lasitha_E_PM_Resume.pdf"
                className="bg-gray-900 text-white p-1 rounded-full"
              >
                <DownloadSimple size={16} />
              </a>
            </>
          ) : (
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <List size={28} />
            </button>
          )}
        </div>
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
                className="cursor-default"
                onClick={() => {
                  setClicked("Home");
                  setMenuOpen(false);
                }}
              >
                <Link href="/">
                  <WavyUnderline text={"Home"} selected={clicked} />
                </Link>
              </button>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setClicked("Articles");
                  setMenuOpen(false);
                }}
              >
                <Link href="/articles">
                  <WavyUnderline text={"Articles"} selected={clicked} />
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
                  <WavyUnderline text={"Work"} selected={clicked} />
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
                  <WavyUnderline text={"About"} selected={clicked} />
                </Link>
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
