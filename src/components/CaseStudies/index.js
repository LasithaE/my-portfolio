import React, { useState } from "react";
import WavyUnderline from "@/components/WavyUnderline";
import { ArrowUpRight } from "@phosphor-icons/react";
import { caseStudies } from "@/app/articles/casestudies";

const CaseStudyCard = ({ title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full rounded-xl px-4 py-3 bg-white shadow-md hover:shadow-lg transition flex justify-between items-center text-left border border-gray-200"
    >
      <span className="text-sm font-medium text-gray-800 group-hover:text-black line-clamp-2">
        {title}
      </span>

      <ArrowUpRight
        size={18}
        className="text-gray-400 group-hover:text-gray-700 flex-shrink-0 ml-2"
      />
    </a>
  );
};

export default function CaseStudies({ selected, setSelected }) {
  const [selectedTag, setSelectedTag] = useState(null);
  const allTags = Array.from(new Set(caseStudies.flatMap((cs) => cs.tags)));

  const filteredCaseStudies = selectedTag
    ? caseStudies.filter((cs) => cs.tags.includes(selectedTag))
    : caseStudies;

  return (
    <div className="space-y-6">
      <WavyUnderline
        text={"Articles"}
        selected={"Articles"}
        textClassName={"text-[26px]"}
        className={"my-3 block md:hidden"}
      />
      <div className="flex flex-wrap gap-2 mt-6">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
            className={`px-3 py-1.5 rounded-full text-sm border transition ${
              selectedTag === tag
                ? "text-black border-[#FF5555] border-2"
                : "bg-white text-gray-700 border-gray-300 border-2 hover:border-[#FF5555] hover:bg-gray-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Case Study List */}
      <div className="space-y-3">
        {filteredCaseStudies.map((item, index) => (
          <CaseStudyCard key={index} title={item.title} link={item.link} />
        ))}
      </div>
    </div>
  );
}
