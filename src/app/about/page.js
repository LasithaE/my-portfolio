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
    <div className="mt-6 flex justify-center flex-col items-center">
    <div className="font-jost text-[36px] font-semibold text-gray-800 italic">Get to know me more!</div>
      <div className="mx-40 p-6 font-jost text-[22px] text-[#424141]">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center"
        >
          Hey there! I&apos;m a{" "}
          <strong>developer-turned-prompt-engineer</strong> (or at least
          that&lsquo;s what my job feels like now). Three years of coding later,
          AI came along and changed everything. Now, I find myself questioning
          my purpose as my front-end dev job slowly morphs into just… writing
          prompts.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center"
        >
          But beyond that existential crisis, I realized something—while I love
          building things, I{" "}
          <strong>miss using my soft skills & managerial side</strong>. That’s
          why I’m on my{" "}
          <strong>journey to switch into Product Management.</strong> 🚀
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="flex flex-row gap-6 my-15 items-center justify-center"
        >
          <Image
            src="/thinking.jpg"
            alt="Me questioning my life choices"
            width={100}
            height={140}
            className="h-[250px] w-[185px] rounded-lg shadow-2xl"
          />
          <Image
            src="/monitor.jpg"
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
          className="text-center"
        >
          When I’m <strong>not coding or writing case studies</strong>, you’ll
          probably find me:
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center"
        >
          Reading, cooking aka playing MasterChef in my kitchen, Finding new
          places to eat in Bangalore or Debating between beaches & mountains
          (but secretly leaning towards beaches)
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="flex flex-row gap-6 my-15 items-center justify-center"
        >
          <Image
            src="/reading.jpg"
            alt="reading"
            width={100}
            height={140}
            className="h-[250px] w-[150px] my-5 rounded-lg shadow-2xl"
          />
          <Image
            src="/cooking.jpg"
            alt="cooking"
            width={100}
            height={140}
            className="h-[250px] w-[150px] my-5 rounded-lg shadow-2xl"
          />
          <Image
            src="/beach.jpg"
            alt="beach"
            width={100}
            height={140}
            className="h-[250px] w-[185px] my-5 rounded-lg shadow-2xl"
          />
          <Image
            src="/mountain.jpg"
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
          className="text-center"
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
          className="flex flex-row gap-6 my-15 items-center justify-center"
        >
          <Image
            src="/flight.jpg"
            alt="travel"
            width={100}
            height={140}
            className="h-[250px] w-[165px] my-5 rounded-lg shadow-2xl"
          />
          <Image
            src="/cute.JPG"
            alt="cubbon"
            width={100}
            height={140}
            className="h-[250px] w-[185px] my-5 rounded-lg shadow-2xl"
          />
          <Image
            src="/vlog.jpg"
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
          className="text-center mb-30"
        >
          So yeah, this is me—
          <strong>
            {" "}
            trying to balance work, life, hobbies, and a million ideas{" "}
          </strong>{" "}
          all at once. If you relate or are in need for food/travel reccos in
          📍Bangalore, let’s connect! 💬
        </motion.p>
      </div>
    </div>
  );
}
