import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
export default function MobilemenuContent(props) {
  const [menu, setmenu] = useState({
    course: false,
    gallery: false,
  });
  const router = useRouter();
  return (
    <>
      <div className="flex md:hidden pb-10  bg-white fixed w-full z-30 top-0 left-0 pt-4 flex-col gap-6 px-4 overflow-y-scroll h-full">
        <div className="flex justify-between items-center border-b pb-4">
          <div className="w-[150px]">
            <Link href="/">
              <a className="w-full h-[60px] flex justify-start relative ">
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/imgs/bluelogo.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <div
            onClick={() => props.passclose(true)}
            className="bg-blue-600 cursor-pointer rounded-full p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-zinc-100"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="flex group flex-col gap-4 ">
          <button
            onClick={() =>
              setmenu((prev) => ({ ...prev, course: !prev.course }))
            }
            className="flex group-hover:text-blue-700 font-semibold text-zinc-800 gap-5 w-full items-center md:text-3xl text-2xl"
          >
            Courses
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                menu.course ? "rotate-180" : ""
              } h-6  w-6 transform duration-150 ease-in`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <ul
            className={`${
              menu.course
                ? "h-auto opacity-100 visible bock "
                : "h-0 opcaity-0 invisible  hidden"
            } list-disc  text-zinc-600 flex flex-col text-xl gap-2.5 ml-6`}
          >
            <li
              onClick={() => props.passclose(true)}
              className="py-0 hover:text-blue-700 cursor-pointer"
            >
              <Link href="/courses/diploma-in-computer-applications">
                <a className="hover:text-blue-700 font-semibold rounded-full px-3 text-base cursor-pointer">
                  DCA
                </a>
              </Link>
            </li>
            <li
              onClick={() => props.passclose(true)}
              className="py-0 hover:text-blue-700 cursor-pointer"
            >
              <Link href="/courses/programming-post-graduate-diploma-course">
                <a className="hover:text-blue-700 font-semibold rounded-full px-3 text-base cursor-pointer">
                  PGDCA
                </a>
              </Link>
            </li>
            <li
              onClick={() => props.passclose(true)}
              className="py-0 hover:text-blue-700 cursor-pointer"
            >
              <Link href="/courses/desktop-publishing-courses">
                <a className="hover:text-blue-700 font-semibold rounded-full px-3 text-base cursor-pointer">
                  DTP
                </a>
              </Link>
            </li>
            <li
              onClick={() => props.passclose(true)}
              className="py-0 hover:text-blue-700 cursor-pointer"
            >
              <Link href="/courses/advanced-diploma-in-computer-application-course">
                <a className="hover:text-blue-700 font-semibold rounded-full px-3 text-base cursor-pointer">
                  ADCA
                </a>
              </Link>
            </li>
            <li
              onClick={() => props.passclose(true)}
              className="py-0 hover:text-blue-700 cursor-pointer"
            >
              <Link href="/courses/typing">
                <a className="hover:text-blue-700 font-semibold rounded-full px-3 text-base cursor-pointer">
                  Typing
                </a>
              </Link>
            </li>
            <li
              onClick={() => props.passclose(true)}
              className="py-0 hover:text-blue-700 cursor-pointer"
            >
              <Link href="/courses/desktop-publishing-courses">
                <a className="hover:text-blue-700 font-semibold rounded-full px-3 text-base cursor-pointer">
                  Fundamentals
                </a>
              </Link>
            </li>
            <li
              onClick={() => props.passclose(true)}
              className="py-0 hover:text-blue-700 cursor-pointer"
            >
              <Link href="/courses/accounting">
                <a className="hover:text-blue-700 font-semibold rounded-full px-3 text-base cursor-pointer">
                  DGD
                </a>
              </Link>
            </li>
            <li
              onClick={() => props.passclose(true)}
              className="py-0 hover:text-blue-700 cursor-pointer"
            >
              <Link href="/courses/accounting">
                <a className="hover:text-blue-700 font-semibold rounded-full px-3 text-base cursor-pointer">
                  Accounting
                </a>
              </Link>
            </li>
            <li
              onClick={() => props.passclose(true)}
              className="py-0 hover:text-blue-700 cursor-pointer"
            >
              <Link href="/courses/spoken-english">
                <a className="hover:text-blue-700 font-semibold rounded-full px-3 text-base cursor-pointer">
                  Spoken EN
                </a>
              </Link>
            </li>
            <li
              onClick={() => props.passclose(true)}
              className="py-0 hover:text-blue-700 cursor-pointer"
            >
              <Link href="/courses/course-on-computer-concepts">
                <a className="hover:text-blue-700 font-semibold rounded-full px-3 text-base cursor-pointer">
                  CCC/0'Level
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex group flex-col gap-4">
          <button
            onClick={() => {
              props.passclose(true);
              setmenu((prev) => ({ ...prev, gallery: !prev.gallery }));
              router.push("/gallery");
            }}
            className="flex group-hover:text-blue-700 font-semibold  text-zinc-800 gap-7 w-full items-center md:text-3xl text-2xl"
          >
            Gallery
          </button>
        </div>
        <button
          onClick={() => {
            setmenu((prev) => ({ ...prev, course: !prev.course }));
            router.push("/Aboutus");
            props.passclose(true);
          }}
          className=" font-semibold hover:text-blue-700 text-zinc-800  w-full text-left md:text-3xl text-2xl"
        >
          About
        </button>
        <button
          onClick={() => {
            router.push("/contact");
            props.passclose(true);
            setmenu((prev) => ({ ...prev, course: !prev.course }));
          }}
          className=" font-semibold hover:text-blue-700 text-zinc-800  w-full text-left md:text-3xl text-2xl"
        >
          Contact
        </button>
      </div>
    </>
  );
}
