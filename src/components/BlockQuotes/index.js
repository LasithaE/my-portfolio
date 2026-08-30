"use client";
import React from "react";

export const BlockQuotes = () => {
  return (
    <div className="flex flex-col mx-auto">
      <div className="mb-5">
        <span className="font-bold text-[16px] md:text-[22px]">Hey, I am Lasitha E 👋🏻</span>
        <div className="mt-3">
          <span className="inline-block rotate-[-3deg] bg-yellow-300 text-yellow-900 text-[12px] md:text-[13px] font-bold px-3 py-1.5 rounded-lg border-2 border-dashed border-yellow-900/30 shadow-sm">
            🎯 Open to PM / Growth / Founder&apos;s Office roles
          </span>
        </div>
        <ul
          style={{ fontStyle: "normal" }}
          className="text-[16px] text-[#364153] list-none flex flex-col gap-5 mt-4"
        >
          <li className="flex items-start gap-2">
            <span role="img" aria-label="star">⭐️</span>
            <span>
              Drove{" "}
              <span className="bg-orange-100 text-orange-900 rounded px-1.5 py-0.5 font-semibold">
                ₹3.3Cr in monthly revenue
              </span>{" "}
              owning growth, pricing, and retention end to end.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span role="img" aria-label="star">⭐️</span>
            <span>
              <span className="bg-blue-100 text-blue-900 rounded px-1.5 py-0.5 font-semibold">
                4+ years in fast-paced startups
              </span>
              , close to founders, as a{" "}
              <span className="bg-purple-100 text-purple-900 rounded px-1.5 py-0.5 font-semibold">
                developer, project lead, and PM
              </span>
              .
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span role="img" aria-label="star">⭐️</span>
            <span>
              Built{" "}
              <span className="bg-orange-100 text-orange-900 rounded px-1.5 py-0.5 font-semibold">
                instrumentation from scratch
              </span>
              , designed growth loops, shipped cross-functional at speed.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span role="img" aria-label="star">⭐️</span>
            <span>
              Currently building{" "}
              <span className="bg-blue-100 text-blue-900 rounded px-1.5 py-0.5 font-semibold">
                AI products
              </span>{" "}
              and publishing{" "}
              <span className="bg-purple-100 text-purple-900 rounded px-1.5 py-0.5 font-semibold">
                growth teardowns
              </span>{" "}
              publicly.
            </span>
          </li>
        </ul>
      </div>

    </div>
  );
};
