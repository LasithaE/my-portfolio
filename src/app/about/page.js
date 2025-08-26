"use client";

import React from "react";
import Image from "next/image";
import "@/app/globals.css";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
<div className="w-full max-w-[92vw] md:max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <div className="font-jost text-[22px] mt-10 md:text-[30px] font-semibold text-gray-800 italic">
        Get to know me more!
      </div>
      <div className="mx-10 p-6 font-jost text-[22px] text-[#424141]">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center text-[16px] md:text-[20px]"
        >
          Hey there! I’m a <strong>developer-turned-prompt-wrangler</strong> —
          thanks to AI, my front-end job now feels like 80% writing prompts. But
          truth is, I’ve always loved <strong>building things</strong>, and
          lately, I’ve been craving more of the{" "}
          <strong>people + product side</strong>. So now, I’m on a mission to{" "}
          <strong>transition into Product Management</strong>. 🚀
        </motion.p>
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
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center text-[16px] md:text-[20px]"
        >
          When I’m <strong>not coding or writing case studies</strong>, you’ll
          probably find me:
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center text-[16px] md:text-[20px]"
        >
          Reading, cooking aka playing MasterChef in my kitchen, Finding new
          places to eat in Bangalore or debating between beaches & mountains
          (but secretly leaning towards beaches)
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="flex flex-col sm:flex-row gap-6 my-7 items-center justify-center"
        >
          <Image
            src="/reading.png"
            alt="reading"
            width={100}
            height={140}
            className="h-[250px] w-[150px] my-5 rounded-lg shadow-2xl"
          />
          <Image
            src="/cooking.png"
            alt="cooking"
            width={100}
            height={140}
            className="h-[250px] w-[150px] my-5 rounded-lg shadow-2xl"
          />
          <Image
            src="/beach.png"
            alt="beach"
            width={100}
            height={140}
            className="h-[250px] w-[185px] my-5 rounded-lg shadow-2xl"
          />
          <Image
            src="/mountain.png"
            alt="mountain"
            width={100}
            height={140}
            className="h-[250px] w-[185px] my-5 rounded-lg shadow-2xl"
          />
        </motion.div>{" "}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center text-[16px] md:text-[20px]"
        >
          On weekends, I’m either <strong>visiting my parents in Kochi</strong>,
          <strong>chilling at Cubbon</strong>,{" "}
          <strong>working on my next &lsquo;big&apos; idea</strong> 💡😂, or
          just{" "}
          <strong>
            vibing at a cafe editing my oversharing content for Instagram &
            YouTube.
          </strong>
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="flex flex-col sm:flex-row gap-6 my-7 items-center justify-center"
        >
          <Image
            src="/flight.png"
            alt="travel"
            width={100}
            height={140}
            className="h-[250px] w-[165px] my-5 rounded-lg shadow-2xl"
          />
          <Image
            src="/cute.png"
            alt="cubbon"
            width={100}
            height={140}
            className="h-[250px] w-[185px] my-5 rounded-lg shadow-2xl"
          />
          <Image
            src="/vlog.png"
            alt="log"
            width={100}
            height={140}
            className="h-[250px] w-[165px] my-5 rounded-lg shadow-2xl"
          />{" "}
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center mb-8 text-[16px] md:text-[20px]"
        >
          So yeah, this is me—
          <strong>
            {" "}
            trying to balance work, life, hobbies, and a million ideas{" "}
          </strong>{" "}
          all at once. If you relate or are in need for food/travel reccos in
          📍Bangalore,{" "}
          <a
            href="https://x.com/lasitha_e"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span className="border-b border-dashed border-gray-600">
              let’s connect! 💬.
            </span>
          </a>
        </motion.p>
      </div>
    </div>
  );
}
