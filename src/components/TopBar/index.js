"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import "../../app/globals.css";
import {
  X,
  List,
  FileArrowDown,
  XLogo,
  LinkedinLogo,
  InstagramLogo,
  Envelope,
} from "@phosphor-icons/react";
import WavyUnderline from "../WavyUnderline";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "thoughts", label: "Thoughts" },
];

const SOCIALS = [
  { href: "https://x.com/lasitha_e", icon: XLogo, label: "X" },
  {
    href: "https://www.linkedin.com/in/lasithae/",
    icon: LinkedinLogo,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/lassinotlassi/",
    icon: InstagramLogo,
    label: "Instagram",
  },
  {
    href: "mailto:lasithaeaswaran@gmail.com",
    icon: Envelope,
    label: "Email",
  },
];

const iconButtonClass =
  "flex items-center justify-center w-9 h-9 rounded-full text-gray-700 hover:bg-gray-800 hover:text-white transition-colors duration-200";

function IconLink({ href, download, icon: Icon, label }) {
  const linkProps = download
    ? { download }
    : { target: "_blank", rel: "noopener noreferrer" };

  return (
    <div className="relative group flex items-center justify-center">
      <a href={href} {...linkProps} aria-label={label} className={iconButtonClass}>
        <Icon size={18} weight="bold" />
      </a>
      <span
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap
rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 scale-95
transition-all duration-150 group-hover:opacity-100 group-hover:scale-100 z-50"
      >
        {label}
      </span>
    </div>
  );
}

export function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clicked, setClicked] = useState("Home");

  useEffect(() => {
    const elements = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      Boolean
    );
    if (elements.length === 0) return;

    const idToLabel = Object.fromEntries(
      SECTIONS.map(({ id, label }) => [id, label])
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setClicked(idToLabel[entry.target.id]);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback(
    (id) => (e) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        el.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }
      setMenuOpen(false);
    },
    []
  );

  return (
    <div className="relative w-full px-6 sm:px-4">
      {/* Floating pill navbar */}
      <div className="mt-4 md:mt-5 max-w-[92vw] md:max-w-screen-md mx-auto rounded-full bg-white/70 backdrop-blur-md shadow-md">
        <div className="flex items-center h-16 w-full px-4 md:px-6">
          {/* Logo */}
          <a href="#hero" onClick={scrollToSection("hero")}>
            <div className="flex-shrink-0">
              <Image
                src="/sign_black_and_red.png"
                alt="Sign Icon"
                width={90}
                height={36}
              />
            </div>
          </a>

          {/* Desktop Nav (Centered) */}
          <div className="hidden md:flex items-center justify-center gap-5 flex-1">
            {SECTIONS.map(({ id, label }) => (
              <a key={id} href={`#${id}`} onClick={scrollToSection(id)}>
                <WavyUnderline
                  text={label}
                  selected={clicked}
                  textClassName="text-[15.3px]"
                  weightClassName="font-semibold"
                />
              </a>
            ))}
          </div>

          {/* Desktop Action Icons (Right aligned) */}
          <div className="hidden md:flex items-center gap-1">
            {SOCIALS.map((social) => (
              <IconLink key={social.label} {...social} />
            ))}

            <div className="w-px h-6 bg-gray-300 mx-2" />

            <IconLink
              href="/resume.pdf"
              download="Lasitha_E_PM_Resume.pdf"
              icon={FileArrowDown}
              label="Resume"
            />
          </div>

          {/* Mobile: hamburger */}
          <div className="md:hidden flex items-center text-gray-800 ml-auto">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
              <List size={26} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: persistent floating bottom bar (socials + resume, always visible) */}
      <div className="md:hidden fixed bottom-4 inset-x-4 z-50 flex items-center justify-center gap-1 rounded-full bg-white/70 backdrop-blur-md shadow-md py-2">
        {SOCIALS.map((social) => (
          <IconLink key={social.label} {...social} />
        ))}
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <IconLink
          href="/resume.pdf"
          download="Lasitha_E_PM_Resume.pdf"
          icon={FileArrowDown}
          label="Resume"
        />
      </div>

      {/* Mobile Menu Overlay (nav links only — socials live in the floating bottom bar) */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/50 flex flex-col items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-[400px] flex flex-col items-center">
            <button
              className="absolute top-4 right-4 text-gray-800"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col gap-6 text-xl mt-6">
              {SECTIONS.map(({ id, label }) => (
                <a key={id} href={`#${id}`} onClick={scrollToSection(id)}>
                  <WavyUnderline text={label} selected={clicked} />
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
