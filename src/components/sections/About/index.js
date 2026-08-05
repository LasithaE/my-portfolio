"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import WavyUnderline from "@/components/WavyUnderline";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const supperClubPhotos = [
  { src: "/supper-club/parsi-people.jpg", alt: "Parsi Night" },
  { src: "/supper-club/parsi-food.jpg", alt: "Parsi Night - the spread" },
  { src: "/supper-club/bridgerton-people.jpg", alt: "Bridgerton Night" },
  { src: "/supper-club/bridgerton-food.jpg", alt: "Bridgerton Night - the spread" },
  { src: "/supper-club/friends-people.jpg", alt: "F.R.I.E.N.D.S Night" },
  { src: "/supper-club/friends-food.jpg", alt: "F.R.I.E.N.D.S Night - the spread" },
  { src: "/supper-club/kerala-people.jpg", alt: "Kerala Night" },
  { src: "/supper-club/kerala-food.jpg", alt: "Kerala Night - the spread" },
];

function SupperClubSlider() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const goTo = (nextIndex) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(nextIndex, supperClubPhotos.length - 1));
    setIndex(clamped);
    const card = track.children[clamped];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  return (
    <div className="relative mt-5">
      <div
        ref={trackRef}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {supperClubPhotos.map((photo) => (
          <div
            key={photo.src}
            className="flex-shrink-0 snap-center w-[62%] sm:w-[38%] md:w-[28%] flex flex-col items-center gap-1.5"
          >
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
            </div>
            <span className="text-xs text-gray-500 text-center">{photo.alt}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous photo"
        className="hidden sm:flex absolute left-[-14px] top-[38%] -translate-y-1/2 items-center justify-center w-8 h-8 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-100"
      >
        <CaretLeft size={16} weight="bold" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next photo"
        className="hidden sm:flex absolute right-[-14px] top-[38%] -translate-y-1/2 items-center justify-center w-8 h-8 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-100"
      >
        <CaretRight size={16} weight="bold" />
      </button>
    </div>
  );
}

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
            text={"About Me"}
            selected={inView ? "About Me" : null}
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
              So yeah, this is me - trying to balance work, life, hobbies &
              a million ideas, all at once.
            </p>

            <div>
              <p>
                Cooking wasn’t just weeknight experiments - I used to run{" "}
                <span className="bg-orange-100 text-orange-900 rounded px-1.5 py-0.5 font-semibold">
                  Supper Soirée
                </span>
                , themed dinner nights for the women I met through{" "}
                <span className="bg-blue-100 text-blue-900 rounded px-1.5 py-0.5 font-semibold">
                  Leap Club
                </span>
                . Started it because I wanted a space for good food and real
                conversation - not another networking event.
              </p>

              <ul className="flex flex-col gap-2.5 mt-4">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">★</span>
                  <span>Parsi Night - doogh, berry pulao & bread pudding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">★</span>
                  <span>
                    Bridgerton Night - pink lemonade & pizza samosas on a
                    rented terrace
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">★</span>
                  <span>
                    F.R.I.E.N.D.S Night - deconstructed lasagna + an episode,
                    obviously
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">★</span>
                  <span>
                    Kerala Night - idiappam, stew & pothi porotta, straight
                    from my roots
                  </span>
                </li>
              </ul>

              <SupperClubSlider />
            </div>

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
