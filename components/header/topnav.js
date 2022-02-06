import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobilemenuContent from "./mobilemenuContent";

export default function TopNav() {
  const [diaplsymenu, setdisplaymenu] = useState(false);
  const [y, sety] = useState(false);

  if (typeof document !== "undefined") {
    const body = document.getElementsByTagName("body")[0];
    // const hover1 = document.querySelector(".hover1");
    // hover1.addEventListener("mouseenter",()=> console.log("enter"));

    if (diaplsymenu) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
    const handleNavigation = (e) => {
      const window1 = e.currentTarget;
      const scroll = window1.pageYOffset || document.documentElement.scrollTop;
      if (scroll > 100) {
        sety(true);
      } else {
        sety(false);
      }
    };
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, []);
  const handleclose = () => {
    setdisplaymenu((prev) => !prev);
  };
  return (
    <>
      {diaplsymenu && <MobilemenuContent passclose={handleclose} />}
      <div
        className={`${
          y ? "border-b w-full bg-white shadow-md" : "py-3  "
        } transition duration-50 ease-linear fixed top-0 z-20 w-full`}
      >
        <div className="max-w-7xl w-full py-1 gap-10 mx-auto px-5 text-zinc-800 flex justify-between items-center ">
          <div className="w-[150px]">
            <Link href="/">
              <a className="w-full flex justify-start  h-[60px] relative ">
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/imgs/logo.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <ul
            className={`${
              y ? "text-zinc-800" : "text-zinc-100"
            } md:flex  hidden max-w-max w-full gap-x-4 gap-y-2`}
          >
            <li className="py-2">
              <Link href="/">
                <a className="hover:text-blue-500 font-semibold rounded-full hover:shadow-lg hover:bg-white py-1 px-5 text-lg cursor-pointer">
                  Home
                </a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/">
                <a className="hover:text-blue-500 font-semibold rounded-full hover:shadow-lg hover:bg-white py-1 px-5 text-lg cursor-pointer">
                  About
                </a>
              </Link>
            </li>
            <li className="relative group py-1">
              <span className="py-1 font-semibold rounded-full px-5 text-lg flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
                Courses
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform group-hover:rotate-180 duration-150 ease-in"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <ul className="tooltiparrow shadow-xl text-zinc-800 group-hover:opacity-100 group-hover:visible invisible opacity-0  absolute z-10 w-[220px] top-full left-0 bg-white rounded-xl p-4">
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  <Link href="/">
                    <a className="hover:text-blue-500 font-semibold rounded-full px-3 text-lg cursor-pointer">
                      DCA
                    </a>
                  </Link>
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  <Link href="/">
                    <a className="hover:text-blue-500 font-semibold rounded-full px-3 text-lg cursor-pointer">
                      PGDCA
                    </a>
                  </Link>
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  <Link href="/">
                    <a className="hover:text-blue-500 font-semibold rounded-full px-3 text-lg cursor-pointer">
                      DTP
                    </a>
                  </Link>
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  <Link href="/">
                    <a className="hover:text-blue-500 font-semibold rounded-full px-3 text-lg cursor-pointer">
                      Accounting
                    </a>
                  </Link>
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  <Link href="/">
                    <a className="hover:text-blue-500 font-semibold rounded-full px-3 text-lg cursor-pointer">
                      Typing
                    </a>
                  </Link>
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  <Link href="/">
                    <a className="hover:text-blue-500 font-semibold rounded-full px-3 text-lg cursor-pointer">
                      Fundamentals
                    </a>
                  </Link>
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  <Link href="/">
                    <a className="hover:text-blue-500 font-semibold rounded-full px-3 text-lg cursor-pointer">
                      DGD
                    </a>
                  </Link>
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  <Link href="/">
                    <a className="hover:text-blue-500 font-semibold rounded-full px-3 text-lg cursor-pointer">
                      ADCA
                    </a>
                  </Link>
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  <Link href="/">
                    <a className="hover:text-blue-500 font-semibold rounded-full px-3 text-lg cursor-pointer">
                      Spoken EN
                    </a>
                  </Link>
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  <Link href="/">
                    <a className="hover:text-blue-500 font-semibold rounded-full px-3 text-lg cursor-pointer">
                      CCC/0'Level
                    </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative group py-1">
              <span className="  py-1 px-5 font-semibold rounded-full text-lg flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
                Gallery
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform group-hover:rotate-180 duration-100 ease-linear"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <ul className="tooltiparrow shadow-xl text-zinc-800 group-hover:opacity-100 group-hover:visible invisible opacity-0 absolute z-10 w-[130px] top-full left-0 bg-white rounded-xl p-4">
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  <Link href="/">
                    <a className="hover:text-blue-500 font-semibold rounded-full px-3 text-lg cursor-pointer">
                      Photo(s)
                    </a>
                  </Link>
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  <Link href="/">
                    <a className="hover:text-blue-500 font-semibold rounded-full px-3 text-lg cursor-pointer">
                      Video(s)
                    </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="py-2">
              <Link href="/contact">
                <a className="hover:text-blue-500 font-semibold rounded-full hover:shadow-lg hover:bg-white py-1 px-5 text-lg cursor-pointer">
                  Contact
                </a>
              </Link>
            </li>
          </ul>

          <button
            className="md:hidden ml-auto block"
            onClick={() => setdisplaymenu((prev) => !prev)}
          >
            <div
              className={`${!y ? "bg-white" : " bg-blue-600"} rounded-full p-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  y ? "stroke-zinc-100" : "stroke-zinc-800"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
