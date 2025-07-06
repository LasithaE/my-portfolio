"use client";
import React from "react";
import Image from "next/image";

export const ImageTray = () => {
  return (
    <Image
    src="/landing.png"
    alt="Landing Page Photo"
    width={300}
    height={300}
    className={`rounded-[16px]`}/>
//     <div className="flex flex-col items-center justify-center w-full max-w-[92vw] md:max-w-screen-md mx-auto mt-5 md:mt-20">
//       <div className="relative flex justify-center items-center w-full group">
//         <Image
//           src="/monitor.png"
//           alt="Landing Page Photo"
//           width={300}
//           height={300}
//           className="absolute left-[-30%] opacity-0 scale-75 rotate-[-10deg] transition-all duration-500 ease-in-out 
// group-hover:opacity-100 group-hover:scale-100 group-hover:left-[20%] xl:group-hover:left-[5%] 2xl:group-hover:left-[1%] group-hover:rotate-[-10deg] rounded-[10%]"
//         />
//         <Image
//           src="/cute.png"
//           alt="Landing Page Photo"
//           width={300}
//           height={300}
//           className="absolute right-[-30%] opacity-0 scale-75 rotate-[10deg] transition-all duration-500 ease-in-out 
// group-hover:opacity-100 group-hover:scale-100 group-hover:right-[20%] xl:group-hover:right-[5%] 2xl:group-hover:right-[1%] group-hover:rotate-[10deg] rounded-[10%]"
//         />
//         <Image
//           src="/landing.png"
//           alt="Landing Page Photo"
//           width={300}
//           height={300}
//           className="relative z-10 rounded-[10%] transition-all duration-500 ease-in-out group-hover:scale-110"
//         />
//       </div>
//     </div>
  );
};
