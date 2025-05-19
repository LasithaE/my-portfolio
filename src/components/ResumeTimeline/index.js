"use client";
import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "../ResumeCard";
import Image from "next/image";
import { resume } from "@/data/resume";

const ResumeTimeline = () => {
  return (
    <div className="w-full py-16 px-4 flex justify-center">
      {/* Timeline container */}
      <div className="relative w-full">
        {resume.map((item, index) => (
          <motion.div
            key={item.company + index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative z-10 flex justify-start mb-16"
          >
            {/* Center dot/icon, aligned to line */}
      

            {/* Card pushed right of the line */}
           <ResumeCard item={item}/>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResumeTimeline;
