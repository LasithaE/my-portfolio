import React from "react";
import { BookOpenText } from "@phosphor-icons/react";

const CaseStudyCard = ({ title, description, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-md mx-auto"
    >
      <div className="rounded-2xl shadow-md overflow-hidden bg-white text-center">
        {image ? (
          <div className="w-full flex justify-center py-6 px-4">
            <img
              src={image}
              alt={title}
              className="w-[100%] h-28 object-cover shadow-md rounded-2xl"
            />
          </div>
        ) : null}
        <div className="p-6 pt-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-700 mt-2 line-clamp-3">
            {description}
          </p>

          <div className="mt-6">
            <button className="flex items-center gap-2 mx-auto text-orange-600 border border-orange-300 hover:bg-orange-50 transition px-4 py-2 rounded-full text-sm font-medium">
              <BookOpenText className="w-4 h-4" />
              Read on Substack
            </button>
          </div>
        </div>
      </div>
    </a>
  );
};

import { caseStudies } from "@/data/casestudies";

export default function CaseStudies() {
  return (
    <div className="grid gap-6 px-4 py-4">
      {caseStudies.map((item, index) => (
        <CaseStudyCard key={index} {...item} />
      ))}
    </div>
  );
}
