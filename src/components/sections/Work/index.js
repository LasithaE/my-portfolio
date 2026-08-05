"use client";
import React, { useEffect, useRef, useState } from "react";
import WavyUnderline from "@/components/WavyUnderline";
import ResumeTimeline from "@/components/ResumeTimeline";

export default function Work() {
  const [selected, setSelected] = useState(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="scroll-mt-24 md:scroll-mt-28 w-full px-6 sm:px-4 mt-12"
    >
      <div className="w-full max-w-[92vw] md:max-w-screen-md mx-auto">
        <div
          className="mb-5"
          onMouseEnter={() => setSelected("My Experience")}
          onMouseLeave={() => setSelected(null)}
        >
          <WavyUnderline
            text={"My Experience"}
            selected={selected || (inView ? "My Experience" : null)}
            textClassName="text-[16px] md:text-[22px]"
          />
        </div>
        <ResumeTimeline />
      </div>
    </section>
  );
}
