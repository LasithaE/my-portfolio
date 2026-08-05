"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WavyUnderline from "@/components/WavyUnderline";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="scroll-mt-24 md:scroll-mt-28 w-full px-6 sm:px-4 mt-8 md:mt-12"
    >
      <div className="w-full max-w-[92vw] md:max-w-screen-md mx-auto">
        <div className="mb-5">
          <WavyUnderline
            text={"Get to know me more!"}
            selected={inView ? "Get to know me more!" : null}
            textClassName="text-[16px] md:text-[22px]"
          />
        </div>
        <div className="p-6 text-[22px] text-[#424141]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="flex flex-col sm:flex-row gap-6 my-7 items-center justify-center"
          >
            <Image
              src="/thinking.png"
              alt="Me questioning my life choices"
              width={100}
              height={140}
              className="h-[250px] w-[185px] rounded-lg shadow-2xl"
            />
            <Image
              src="/monitor.png"
              alt="A roadmap to my career switch"
              width={100}
              height={140}
              className="h-[250px] w-[185px] my-5 rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="max-w-xl mx-auto text-left text-[16px] md:text-[18px] leading-relaxed space-y-6 mb-8"
          >
            <p>When I’m not building my next product move, you’ll probably find me:</p>

            <ul className="flex flex-col gap-2.5">
              <li className="flex items-start gap-2">
                <span aria-hidden="true">★</span>
                <span>reading</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true">★</span>
                <span>
                  cooking, aka playing{" "}
                  <span className="bg-orange-100 text-orange-900 rounded px-1.5 py-0.5 font-semibold">
                    MasterChef
                  </span>{" "}
                  in my kitchen
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true">★</span>
                <span>
                  hunting for new places to eat in{" "}
                  <span className="bg-blue-100 text-blue-900 rounded px-1.5 py-0.5 font-semibold">
                    Bangalore
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true">★</span>
                <span>
                  debating{" "}
                  <span className="bg-purple-100 text-purple-900 rounded px-1.5 py-0.5 font-semibold">
                    beaches
                  </span>{" "}
                  vs. mountains (beaches, secretly, always win)
                </span>
              </li>
            </ul>

            <p>
              So yeah, this is me — trying to balance work, life, hobbies &
              a million ideas, all at once.
            </p>

            <p>
              If you relate, or need food/travel reccos in 📍Bangalore,{" "}
              <a
                href="https://x.com/lasitha_e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bg-purple-100 text-purple-900 rounded px-1.5 py-0.5 font-semibold">
                  let’s connect 💬
                </span>
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
