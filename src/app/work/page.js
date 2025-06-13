"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { dev_tools } from "@/data/resume";
import { product_tools } from "@/data/prod_work_exp";
import CaseStudies from "@/components/CaseStudies";
import { DownloadSimple } from "@phosphor-icons/react";
import WavyUnderline from "@/components/WavyUnderline";

const Work = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="my-8 w-full flex justify-center">
        <div className="md:max-w-screen-md px-4">
          <div className="flex flex-col items-center justify-start">
            <div className="w-full mb-10">
              <blockquote className="mb-5 border-l-4 border-gray-400 pl-4 italic text-gray-700">
                Aspiring <strong>Product Manager</strong> with 3+ years of
                experience in fast-paced startups as a frontend developer and
                project owner. Skilled in{" "}
                <strong>cross-functional collaboration</strong>, user-first
                thinking, and execution. Currently building{" "}
                <strong>case studies</strong> and doing user research to
                transition into product.
              </blockquote>

              <div
                className="mb-5"
                onMouseEnter={() => setSelected("Product Skills")}
                onMouseLeave={() => setSelected(null)}
              >
                <WavyUnderline text={"Product Skills"} selected={selected} />
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mx-auto justify-items-center max-w-[360px] sm:max-w-[480px] md:max-w-[600px]">
                {product_tools.map((item, index) => (
                  <div
                    key={index}
                    className="w-[50px] min-h-[50px] flex flex-col items-center justify-center"
                  >
                    <Image
                      width={40}
                      height={40}
                      src={item.icon}
                      alt={item.label}
                    />
                    <div className="text-[11px] text-center">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full mb-10">
              <div
                className="mb-5"
                onMouseEnter={() => setSelected("Technical Skills")}
                onMouseLeave={() => setSelected(null)}
              >
                <WavyUnderline text={"Technical Skills"} selected={selected} />
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 mx-auto justify-items-center max-w-[360px] sm:max-w-[480px] md:max-w-[600px]">
                {dev_tools.map((item, index) => (
                  <div
                    key={index}
                    className="w-[50px] min-h-[50px] flex flex-col items-center justify-center"
                  >
                    <Image
                      width={40}
                      height={40}
                      src={item.icon}
                      alt={item.label}
                    />
                    <div className="text-[11px] text-center">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <div className="w-full">
              <CaseStudies selected={selected} setSelected={setSelected} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
