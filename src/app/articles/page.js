"use client";
import React, { useState } from "react";
import CaseStudies from "@/components/CaseStudies";

const Articles = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="px-6 sm:px-8 md:px-0 md:max-w-screen-md justify-center mx-auto flex">
        <CaseStudies selected={selected} setSelected={setSelected} />
      </div>
    </>
  );
};
export default Articles;
