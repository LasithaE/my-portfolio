"use client";
import React from "react";
import Image from "next/image";
import ViewCounter from "@/components/ViewCounter";

export default function SignOff() {
  return (
    <section
      id="signoff"
      className="scroll-mt-24 md:scroll-mt-28 w-full px-6 sm:px-4 mt-10 mb-16"
    >
      <div className="w-full max-w-[92vw] md:max-w-screen-md mx-auto flex flex-col items-center justify-center gap-6">
        <Image
          src="/cute.png"
          alt="Lasitha, in the wild"
          width={160}
          height={200}
          className="w-[140px] h-[180px] object-cover rounded-lg shadow-2xl rotate-[-3deg]"
        />
        <div
          style={{
            fontFamily: "Loverine",
            fontSize: "20px",
            color: "#9E9EA9",
            textShadow: "initial",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          made by yours truly ,
          <Image
            src="/sign_black_and_red.png"
            alt="Sign Icon"
            width={60}
            className="mb-3"
            height={14}
          />
        </div>
        <ViewCounter />
      </div>
    </section>
  );
}
