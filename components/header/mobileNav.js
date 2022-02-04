import React, { useState } from "react";
import dynamic from "next/dynamic";

export default function MobileNav() {
  return (
    <>
      <div className="flex md:hodden bg-red-100 md:opacity-0 md:invisible visible opacity-100  fixed  z-30 top-0 left-0  shadow-md shadow-zinc-300/20 justify-between px-4 gap-10 py-2 border-b border-gray-200 w-full">
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 stroke-zinc-800 w-6`}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <button
          onClick={() => setdisplaymenu((prev) => !prev)}
          className=" bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
