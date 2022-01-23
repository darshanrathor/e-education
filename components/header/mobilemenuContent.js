import React, { useState } from "react";
import Link from "next/link";
export default function MobilemenuContent() {
  const [menu, setmenu] = useState({
    course: false,
    student: false,
    franchise: false,
    download: false,
    gallery: false,
    other: false,
  });

  return (
    <>
      <div className="flex bg-white fixed w-full top-0 left-0 pt-24 flex-col gap-5 px-4 overflow-y-scroll h-full">
        <div className="flex flex-col gap-4 ">
          <button
            onClick={() =>
              setmenu((prev) => ({ ...prev, course: !prev.course }))
            }
            className="flex font-semibold text-zinc-800 justify-between w-full items-center text-lg"
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
            <li className=" hover:text-blue-500 cursor-pointer">Accounting</li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Hardware & Networking
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Mobile Repairing
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">Software</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={() =>
              setmenu((prev) => ({ ...prev, student: !prev.student }))
            }
            className="flex  font-semibold  text-zinc-800 justify-between w-full items-center text-lg"
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
            <li className=" hover:text-blue-500 cursor-pointer">
              Student Login
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Online Registration
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Download Admit Card
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Check Certificate
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Check Registration
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={() =>
              setmenu((prev) => ({ ...prev, franchise: !prev.franchise }))
            }
            className="flex  font-semibold  text-zinc-800 justify-between w-full items-center text-lg"
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
            <li className=" hover:text-blue-500 cursor-pointer">
              Secure Login
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Online Registration
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Our Franchices
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">Our Staff</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={() =>
              setmenu((prev) => ({ ...prev, download: !prev.download }))
            }
            className="flex   font-semibold  text-zinc-800 justify-between w-full items-center text-lg"
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
            <li className=" hover:text-blue-500 cursor-pointer">
              Franchise Credential
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Franchise Registration Form
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Goverment & ISO Certificate
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Course Certificate Sample
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Franchise Membership
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Certificate Sample
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={() =>
              setmenu((prev) => ({ ...prev, gallery: !prev.gallery }))
            }
            className="flex  font-semibold  text-zinc-800 justify-between w-full items-center text-lg"
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
            <li className=" hover:text-blue-500 cursor-pointer">Photo(s)</li>
            <li className=" hover:text-blue-500 cursor-pointer ">Video(s)</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => setmenu((prev) => ({ ...prev, other: !prev.other }))}
            className="flex  font-semibold  text-zinc-800 justify-between w-full items-center text-lg"
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
            <li className=" hover:text-blue-500 cursor-pointer">
              Sarkariresult.com
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Sarkariexam.com
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Fcs.Up.Gov.in
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Edistrict.Up.Nic.in
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Dbrauaaems.in
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Student.Nielit.in
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              Guruji24.com(Online Test)
            </li>
            <li className=" hover:text-blue-500 cursor-pointer ">
              W3sumit.com(Online Test)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
