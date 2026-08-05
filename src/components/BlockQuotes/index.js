"use client";
import React from "react";

export const BlockQuotes = () => {
  return (
    <div className="flex flex-col mx-auto">
      <div className="mb-5">
        <span className="font-bold text-[16px] md:text-[22px]">Hey, I am Lasitha E 👋🏻</span>
        <ul
          style={{ fontStyle: "normal" }}
          className="text-[16px] text-[#364153] list-none flex flex-col gap-5 mt-4"
        >
          <li className="flex items-start gap-2">
            <span role="img" aria-label="star">⭐️</span>
            <span>
              Ex-quickcomm PM, with{" "}
              <span className="bg-orange-100 text-orange-900 rounded px-1.5 py-0.5 font-semibold">
                3 years of tech dev experience
              </span>
              .
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span role="img" aria-label="star">⭐️</span>
            <span>
              Product Manager in the making with{" "}
              <span className="bg-blue-100 text-blue-900 rounded px-1.5 py-0.5 font-semibold">
                4+ years of experience in fast-paced startups
              </span>{" "}
              as a{" "}
              <span className="bg-purple-100 text-purple-900 rounded px-1.5 py-0.5 font-semibold">
                frontend developer and project lead
              </span>
              .
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span role="img" aria-label="star">⭐️</span>
            <span>
              Skilled in{" "}
              <span className="bg-orange-100 text-orange-900 rounded px-1.5 py-0.5 font-semibold">
                collaboration, user-first thinking, and execution
              </span>
              .
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span role="img" aria-label="star">⭐️</span>
            <span>
              Currently building{" "}
              <span className="bg-blue-100 text-blue-900 rounded px-1.5 py-0.5 font-semibold">
                ai products
              </span>{" "}
              to learn{" "}
              <span className="bg-purple-100 text-purple-900 rounded px-1.5 py-0.5 font-semibold">
                gtm and marketing
              </span>{" "}
              otw.
            </span>
          </li>
        </ul>
      </div>

    </div>
  );
};
