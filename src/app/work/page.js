"use client";
import React, { useState } from "react";
import Image from "next/image";
import TranslucentModal from "../../components/TranslucentModal";
import { resume } from "@/data/resume";
import { motion } from "framer-motion";
import { CloudArrowDown } from "@phosphor-icons/react";
import ResumeCard from "@/components/ResumeCard";
import { dev_projects } from "@/data/dev_projects";
import DevProjectCard from "@/components/DevProjectCard";
import { prod_work_exp } from "@/data/prod_work_exp";
import CaseStudies from "@/components/CaseStudies";

const Work = () => {
  const [openWorkModal, setOpenWorkModal] = useState();
  return (
    <>
      <div className="mt-8">
        <div className="mx-auto text-center">
          Over the past few years, I’ve{" "}
          <strong>built user-facing products</strong> at{" "}
          <strong>early-stage startups</strong>—often as the{" "}
          <strong>only frontend developer</strong> in the room.
          <br />
          That meant doing much more than writing code. I was{" "}
          <i>
            {" "}
            estimating timelines, unblocking cross-functional teams, gathering
            feedback, and <br />
            bringing clarity
          </i>{" "}
          to the project manager when specs were vague. Somewhere along the way,
          I realized I was already{" "}
          <strong>doing the work of a product manager</strong>-<br />
          just without the{" "}
          <strong>
            {" "}
            <i>title</i>
          </strong>
          . I’ve always loved <strong>building</strong>—but I’ve grown to love{" "}
          <strong>deciding what to build</strong> even more. My shift into{" "}
          <strong>product management</strong> <br />
          isn’t a leap; it’s a <strong>natural next step</strong> shaped by
          years of <strong>wearing too many hats</strong>,{" "}
          <strong>asking the right questions</strong>, and{" "}
          <strong>obsessing over user experience</strong> as much as clean code.
        </div>
        <div className="relative w-full h-[400px] md:h-[500px] mb-20">
          {/* Grid layout on small screens */}
          <div className="block md:hidden">
            <div className="flex flex-row items-center row-span-2 justify-between mx-10">
              <div
                className="flex flex-col items-center"
                onClick={() => {
                  setOpenWorkModal("dev_work");
                }}
              >
                <Image
                  src="/folder.png"
                  alt="Landing Page Photo"
                  width={100}
                  height={100}
                />
                <span className="mt-2 text-sm text-gray-700 bg-gray-100 px-3 py-1 w-[100px] items-center justify-center flex flex-col rounded-md shadow-sm line-clamp-2 text-center">
                  {"Dev Work Experience"}
                </span>
              </div>
              <div
                className="flex flex-col items-center"
                onClick={() => {
                  setOpenWorkModal("prod_work_exp");
                }}
              >
                <Image
                  src="/folder.png"
                  alt="Landing Page Photo"
                  width={100}
                  height={100}
                />
                <span className="mt-2 text-sm text-gray-700 bg-gray-100 px-3 py-1 w-[100px] items-center justify-center flex flex-col rounded-md shadow-sm line-clamp-2 text-center">
                  {"Product Work Experience"}
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center row-span-2 justify-between mx-10">
              <div
                className="flex flex-col items-center"
                onClick={() => {
                  setOpenWorkModal("dev_projects");
                }}
              >
                <Image
                  src="/folder.png"
                  alt="Landing Page Photo"
                  width={100}
                  height={100}
                />
                <span className="mt-2 text-sm text-gray-700 bg-gray-100 px-3 py-1 w-[100px] items-center justify-center flex flex-col rounded-md shadow-sm line-clamp-2 text-center">
                  {"Dev Projects"}
                </span>
              </div>
              <div
                className="flex flex-col items-center"
                onClick={() => {
                  setOpenWorkModal("prod_case_studies");
                }}
              >
                <Image
                  src="/folder.png"
                  alt="Landing Page Photo"
                  width={100}
                  height={100}
                />
                <span className="mt-2 text-sm text-gray-700 bg-gray-100 px-3 py-1 w-[100px] items-center justify-center flex flex-col rounded-md shadow-sm line-clamp-2 text-center">
                  {"Product Case Studies"}
                </span>
              </div>
            </div>
            <div className="flex flex-col mt-4 items-center">
              <Image
                src="/textfile.png"
                alt="Landing Page Photo"
                width={100}
                height={100}
              />
              <span className="mt-2 text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-md shadow-sm">
                {"Downloadable Resume"}
              </span>
            </div>
          </div>
          {/* Haphazard absolute layout on md+ screens */}
          <div className="hidden md:block w-full h-full relative">
            <div
              className="absolute top-4 left-25 flex flex-col items-center"
              onClick={() => {
                setOpenWorkModal("dev_work");
              }}
            >
              <Image
                src="/folder.png"
                alt="Image 1"
                width={100}
                height={100}
                className=""
              />
              <span className="mt-2 text-sm text-gray-700 bg-gray-100 px-3 py-1 w-[100px] items-center justify-center flex flex-col rounded-md shadow-sm line-clamp-2 text-center">
                {"Dev Work Experience"}
              </span>
            </div>
            <div className="absolute top-40 left-[30%] flex flex-col items-center">
              <Image
                src="/textfile.png"
                alt="Image 1"
                width={100}
                height={100}
                className=""
              />
                           <span className="mt-2 text-sm text-gray-700 bg-gray-100 py-1 w-[100px] rounded-md shadow-sm text-center">
                Downloadable Resume <CloudArrowDown size={12} className="inline ml-1"  weight="bold"/>
       
              </span>
            </div>
            <div
              className="absolute bottom-10 left-[18%] flex flex-col items-center"
              onClick={() => {
                setOpenWorkModal("dev_projects");
              }}
            >
              <Image
                src="/folder.png"
                alt="Image 1"
                width={100}
                height={100}
                className=""
              />
              <span className="mt-2 text-sm text-gray-700 bg-gray-100 px-3 py-1 w-[100px] items-center justify-center flex flex-col rounded-md shadow-sm line-clamp-2 text-center">
                {"Dev Projects"}
              </span>
            </div>
            <div
              className="absolute bottom-8 right-[20%] flex flex-col items-center"
              onClick={() => {
                setOpenWorkModal("prod_work_exp");
              }}
            >
              <Image
                src="/folder.png"
                alt="Image 1"
                width={100}
                height={100}
                className=""
              />
              <span className="mt-2 text-sm text-gray-700 bg-gray-100 px-3 py-1 w-[100px] items-center justify-center flex flex-col rounded-md shadow-sm line-clamp-2 text-center">
                {"Product Work Experience"}
              </span>
            </div>
            <div
              className="absolute top-[10%] right-25 flex flex-col items-center"
              onClick={() => {
                setOpenWorkModal("prod_case_studies");
              }}
            >
              <Image
                src="/folder.png"
                alt="Image 1"
                width={100}
                height={100}
                className=""
              />
              <span className="mt-2 text-sm text-gray-700 bg-gray-100 px-3 py-1 w-[100px] items-center justify-center flex flex-col rounded-md shadow-sm line-clamp-2 text-center">
                {"Product Case Studies"}
              </span>
            </div>
          </div>
        </div>

        {openWorkModal === "dev_work" ? (
          <TranslucentModal
            isOpen={true}
            onClose={() => setOpenWorkModal("")}
            title={"Dev Work Experience"}
            children={resume.map((item, index) => (
              <motion.div
                key={item.company + index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex justify-start mb-5"
              >
                <ResumeCard item={item} />
              </motion.div>
            ))}
          />
        ) : openWorkModal === "dev_projects" ? (
          <TranslucentModal
            isOpen={true}
            title={"Dev Projects"}
            onClose={() => setOpenWorkModal("")}
            children={dev_projects.map((item, index) => (
              <motion.div
                key={item.title + index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex justify-start mb-5"
              >
                <DevProjectCard item={item} />
              </motion.div>
            ))}
          />
        ) : openWorkModal === "prod_work_exp" ? (
          <TranslucentModal
            isOpen={true}
            title={"Product Work Experience"}
            onClose={() => setOpenWorkModal("")}
            children={prod_work_exp.map((item, index) => (
              <li
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
                className="mb-3"
              />
            ))}
          />
        ) : openWorkModal === "prod_case_studies" ? (
          <TranslucentModal
            isOpen={true}
            title={"Product Case Studies"}
            onClose={() => setOpenWorkModal("")}
            children={<CaseStudies />}
          />
        ) : null}
      </div>
    </>
  );
};
export default Work;
