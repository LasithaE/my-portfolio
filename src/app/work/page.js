"use client";
import React, { useState } from "react";
import Image from "next/image";
import WavyUnderline from "@/components/WavyUnderline";
import { dev_tools, resume } from "@/app/articles/resume";
import { product_tools } from "@/app/articles/prod_work_exp";

const Work = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="my-8 flex justify-center px-4 w-full md:max-w-screen-md mx-auto px-6 ">
        <div className="w-full max-w-screen-xl">
          <div className="px-4">
            <div className="flex flex-col items-center justify-start">
              <div className="w-full mb-10">
                <div
                  className="mb-5"
                  onMouseEnter={() => setSelected("Product Skills")}
                  onMouseLeave={() => setSelected(null)}
                >
                  <WavyUnderline text={"Product Skills"} selected={selected} />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center w-full">
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
                      <div className="text-[11px] text-center">
                        {item.label}
                      </div>
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
                  <WavyUnderline
                    text={"Technical Skills"}
                    selected={selected}
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center w-full">
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
                      <div className="text-[11px] text-center">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full mb-10">
                <div
                  className="mb-5"
                  onMouseEnter={() => setSelected("My Experience")}
                  onMouseLeave={() => setSelected(null)}
                >
                  <WavyUnderline text={"My Experience"} selected={selected} />
                </div>
                <div className="justify-items-center w-full">
                  {resume.map((work, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-14 items-start mb-8"
                    >
                      <div className="text-[16px] text-gray-500 md:text-right">
                        <span className="block font-semibold text-start md:text-end ml-0.5">
                          {work.experience}
                        </span>
                      </div>
                      <div>
                        <div className="flex flex-row gap-3">
                      <Image src={work.icon} height={40} width={40} className="rounded-md block md:hidden h-[48px]" alt={"mobile icon"} />
                       <Image src={work.icon} height={30} width={30} className="rounded-md hidden md:block h-[35px]" alt={"desktop icon"}/>
                          <h3 className="text-base font-semibold">
                            {work.title}{" "}
                            <span className="text-gray-600 font-semibold italic">
                              @ {work.company}
                            </span>
                          </h3>
                        </div>
                        <div>
                          {work.works.map((line, index) => (
                            <div
                              key={index}
                              className="text-sm mt-2 text-gray-700 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: line }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
