"use client";
import { Link } from "@phosphor-icons/react";

const DevProjectCard = ({ item }) => {
  return (
    <div className="bg-white shadow-xl p-6 rounded-xl w-full max-w-xl">
      <div className="flex flex-row gap-4">
        <div className="">
          <div className="flex flex-row">
            <h3 className="text-xl font-bold font-jost mb-1">{item.title}</h3>
            {item.ext_link ? (
                <div>
             <a href={item.ext_link}><Link
                weight="bold"
                size={14}
                className="mt-1.5 ml-1.5 cursor-pointer"
              /></a> </div>
            ) : null}
          </div>

          <div className="flex flex-row justify-between">
            <p className="text-sm font-medium text-gray-600">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevProjectCard;
