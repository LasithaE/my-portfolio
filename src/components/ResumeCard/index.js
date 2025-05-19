"use client";

import Image from "next/image";

const ResumeCard = ({ item }) => {
  return (
    <div className="bg-white shadow-xl p-6 rounded-xl w-full max-w-xl">
      <div
        className="rounded-[16px] p-6 mb-4"
        style={{
          background: "linear-gradient(225deg,rgb(255, 255, 255), #ffffff)",
          boxShadow: "-6px 6px 12px rgb(241, 241, 241),6px -6px 12px #ffffff",
        }}
      >
        <div className="flex flex-row gap-4">
          {" "}
          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-gray-300 shadow-md bg-white">
            <Image
              src={item.icon}
              alt={`${item.company} logo`}
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>{" "}
          <div className="w-2/3">
            <h3 className="text-xl font-bold font-jost mb-1">{item.company}</h3>
            <div className="flex flex-row justify-between">
              {" "}
              <p className="text-sm font-medium text-gray-600">
                {item.title} – {item.location}
              </p>
              <p className="text-sm italic text-gray-500 mb-2">
                {item.experience}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-none text-[15px] font-jost">
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
