import Link from "next/link";
import React, { useState } from "react";

export default function MobileNav() {
  const [menu, setmenu] = useState({
    course: false,
    student: false,
    franchise: false,
    download: false,
    gallery: false,
    other: false,
  });
  const [diaplsymenu, setdisplaymenu] = useState(false);
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
  return (
    <div className="md:hidden fixed z-30 block h-full pb-20">
      <div className="flex justify-between px-4 gap-10 py-4 border-b border-gray-200">
        <Link href="/">
          <a>
            <img src="/imgs/logo.png" alt="logo" className="w-4/5" />
          </a>
        </Link>
        <button onClick={() => setdisplaymenu((prev) => !prev)} className="">
          {diaplsymenu ? (
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 stroke-zinc-800 w-6"
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
          )}
        </button>
      </div>
      {diaplsymenu && (
        <div className="flex flex-col gap-5 py-8 px-4 overflow-y-scroll h-full">
          <div className="flex flex-col gap-4 ">
            <button
              onClick={() =>
                setmenu((prev) => ({ ...prev, course: !prev.course }))
              }
              className="flex text-zinc-800 justify-between w-full items-center text-lg"
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
              } list-none  text-zinc-600 flex flex-col gap-4 border-l border-gray-200 pl-6`}
            >
              <li className=" hover:text-green-500 cursor-pointer">
                Accounting
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Hardware & Networking
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Mobile Repairing
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Software
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() =>
                setmenu((prev) => ({ ...prev, student: !prev.student }))
              }
              className="flex text-zinc-800 justify-between w-full items-center text-lg"
            >
              Student Area
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  menu.student ? "rotate-180" : ""
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
                menu.student
                  ? "h-auto opacity-100 visible block"
                  : "h-0 opcaity-0 hidden invisible "
              } list-none  text-zinc-600 flex flex-col gap-4 border-l border-gray-200 pl-6`}
            >
              <li className=" hover:text-green-500 cursor-pointer">
                Student Login
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Online Registration
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Download Admit Card
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Check Certificate
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Check Registration
              </li>
            </ul>
          </div>
          <Link href="/">
            <a className="text-lg text-zinc-800 cursor-pointer hover:text-green-500">
              Result
            </a>
          </Link>
          <div className="flex flex-col gap-4">
            <button
              onClick={() =>
                setmenu((prev) => ({ ...prev, franchise: !prev.franchise }))
              }
              className="flex text-zinc-800 justify-between w-full items-center text-lg"
            >
              Franchise Area
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  menu.franchise ? "rotate-180" : ""
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
                menu.franchise
                  ? "h-auto opacity-100 visible block"
                  : "h-0 opcaity-0 hidden invisible "
              } list-none  text-zinc-600 flex flex-col gap-4 border-l border-gray-200 pl-6`}
            >
              <li className=" hover:text-green-500 cursor-pointer">
                Secure Login
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Online Registration
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Our Franchices
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Our Staff
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() =>
                setmenu((prev) => ({ ...prev, download: !prev.download }))
              }
              className="flex text-zinc-800 justify-between w-full items-center text-lg"
            >
              Download
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  menu.download ? "rotate-180" : ""
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
                menu.download
                  ? "h-auto opacity-100 visible block"
                  : "h-0 opcaity-0 hidden invisible "
              } list-none  text-zinc-600 flex flex-col gap-4 border-l border-gray-200 pl-6`}
            >
              <li className=" hover:text-green-500 cursor-pointer">
                Franchise Credential
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Franchise Registration Form
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Goverment & ISO Certificate
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Course Certificate Sample
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Franchise Membership
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Certificate Sample
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() =>
                setmenu((prev) => ({ ...prev, gallery: !prev.gallery }))
              }
              className="flex text-zinc-800 justify-between w-full items-center text-lg"
            >
              Gallery
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  menu.gallery ? "rotate-180" : ""
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
                menu.gallery
                  ? "h-auto opacity-100 visible block"
                  : "h-0 opcaity-0 hidden invisible"
              } list-none  text-zinc-600 flex flex-col gap-4 border-l border-gray-200 pl-6`}
            >
              <li className=" hover:text-green-500 cursor-pointer">Photo(s)</li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Video(s)
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() =>
                setmenu((prev) => ({ ...prev, other: !prev.other }))
              }
              className="flex text-zinc-800 justify-between w-full items-center text-lg"
            >
              Other Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  menu.other ? "rotate-180" : ""
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
                menu.other
                  ? "h-auto opacity-100 visible block"
                  : "h-0 opcaity-0 hidden invisible"
              } list-none  text-zinc-600 flex flex-col gap-4 border-l border-gray-200 pl-6`}
            >
              <li className=" hover:text-green-500 cursor-pointer">
                Sarkariresult.com
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Sarkariexam.com
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Fcs.Up.Gov.in
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Edistrict.Up.Nic.in
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Dbrauaaems.in
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Student.Nielit.in
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                Guruji24.com(Online Test)
              </li>
              <li className=" hover:text-green-500 cursor-pointer ">
                W3sumit.com(Online Test)
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
