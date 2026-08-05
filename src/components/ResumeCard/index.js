"use client";

import Image from "next/image";

const ResumeCard = ({ item }) => {
  return (
    <div className="bg-white/60 backdrop-blur-md shadow-xl p-4 sm:p-6 rounded-xl w-full">
      <div className="rounded-[16px] p-4 sm:p-6 mb-4 bg-white/40 backdrop-blur-sm">
        <div className="flex flex-row gap-3 sm:gap-4">
          {" "}
          <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-full overflow-hidden border-4 border-gray-300 shadow-md bg-white flex items-center justify-center">
            {item.icon ? (
              <Image
                src={item.icon}
                alt={`${item.company} logo`}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-lg font-bold text-gray-500">
                {item.company.charAt(0)}
              </span>
            )}
          </div>{" "}
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-xl font-bold mb-1 text-orange-900">
              {item.title}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 sm:gap-2">
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                {item.company}
                {item.companyDescription ? ` (${item.companyDescription})` : ""}, {item.location}
              </p>
              <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                {item.experience}
              </span>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-none text-[15px]">
        {item.works.map((work, idx) => (
          <li key={idx} className="flex items-start mb-1 gap-2">
            <span role="img" aria-label="star">
              ⭐
            </span>
            <span dangerouslySetInnerHTML={{ __html: work }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeCard;
