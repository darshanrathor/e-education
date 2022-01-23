import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopNav() {
  return (
    <>
      <div className="md:block hidden bg-blue-500 p-3 divide-y ">
        <p className="text-white text-center text-base max-w-7xl mx-auto pb-3">
          India&apos;s No.1 Franchise Center Provider, Join Franchise Brand, How
          start own center No.1 Institute of Computer Education in india Best
          computer education affiliation franchise registration
        </p>
        <div className="max-w-7xl  mx-auto px-5 flex justify-between gap-10">
          <Link href="/">
            <a className="w-[160px] flex justify-start relative  h-[50px]">
              <Image
                layout="fill"
                objectFit="contain"
                src="/imgs/logo.png"
                alt="logo"
                className=""
              />
            </a>
          </Link>
          <div className="flex gap-6 text-sm font-semibold text-white">
            <div className="flex gap-2 items-center">
              <svg className="h-5 w-5 fill-white" viewBox="0 0 48 48">
                <path d="M0 0h48v48h-48z" fill="none" />
                <path d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49 2.24.74 4.65 1.14 7.14 1.14 1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2-18.78 0-34-15.22-34-34 0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z" />
              </svg>
              Support 24/7 +91-7017 051 745
            </div>
            <div className="flex gap-2 items-center">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 32 32">
                <title />
                <g data-name="Layer 15" id="Layer_15">
                  <path
                    className="cls-1"
                    d="M16,31A15,15,0,1,1,31,16,15,15,0,0,1,16,31ZM16,3A13,13,0,1,0,29,16,13,13,0,0,0,16,3Z"
                  />
                  <path
                    className="cls-1"
                    d="M20.24,21.66l-4.95-4.95A1,1,0,0,1,15,16V8h2v7.59l4.66,4.65Z"
                  />
                </g>
              </svg>
              Opening: 7:00am - 5:00pm
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white sticky top-0  z-30 border-b border-gray-200 md:block hidden  w-full py-2">
        <div className="max-w-7xl mx-auto px-5 text-zinc-800">
          <ul className="flex w-full gap-x-10 gap-y-2 flex-wrap">
            <li className="hover:text-blue-500 text-lg cursor-pointer py-4">
              Home
            </li>
            <li className="hover:text-blue-500 text-lg cursor-pointer py-4">
              AboutUs
            </li>
            <li className="relative group py-4">
              <span className="hover:text-blue-500 text-lg flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
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
              <ul className="tooltiparrow group-hover:opacity-100 group-hover:visible invisible opacity-0  absolute z-10 w-[220px] top-full left-0 bg-white rounded-xl p-4">
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  Accounting
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Hardware & Networking
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Mobile Repairing
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Software
                </li>
              </ul>
            </li>
            <li className="relative group py-4">
              <span className="hover:text-blue-500 text-lg flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
                Student Area
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
              <ul className="tooltiparrow group-hover:opacity-100 group-hover:visible invisible opacity-0 absolute z-10 w-[200px] top-full left-0 bg-white rounded-xl p-4">
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  Student Login
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Online Registration
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Download Admit Card
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Check Certificate
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Check Registration
                </li>
              </ul>
            </li>
            <li className="relative group py-4">
              <span className="hover:text-blue-500 text-lg flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
                Franchise Area
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
              <ul className="tooltiparrow group-hover:opacity-100 group-hover:visible invisible opacity-0 absolute z-10 w-[190px] top-full left-0 bg-white rounded-xl p-4">
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  Secure Login
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Online Registration
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Our Franchices
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Our Staff
                </li>
              </ul>
            </li>

            <li className="relative group py-4">
              <span className="hover:text-blue-500 text-lg flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
                Download
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
              <ul className="tooltiparrow group-hover:opacity-100 group-hover:visible invisible opacity-0 absolute z-10 w-[250px] top-full left-0 bg-white rounded-xl p-4">
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  Franchise Credential
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Franchise Registration Form
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Goverment & ISO Certificate
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Course Certificate Sample
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Franchise Membership
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Certificate Sample
                </li>
              </ul>
            </li>

            <li className="relative group py-4">
              <span className="hover:text-blue-500 text-lg flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
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
              <ul className="tooltiparrow group-hover:opacity-100 group-hover:visible invisible opacity-0 absolute z-10 w-[110px] top-full left-0 bg-white rounded-xl p-4">
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  Photo(s)
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Video(s)
                </li>
              </ul>
            </li>

            <li className="relative group py-4">
              <span className="hover:text-blue-500 text-lg flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
                Other Services
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
              <ul className="tooltiparrow group-hover:opacity-100 group-hover:visible invisible opacity-0 absolute z-10 w-[230px] top-full left-0 bg-white rounded-xl p-4">
                <li className="py-2 hover:text-blue-500 cursor-pointer">
                  Sarkariresult.com
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Sarkariexam.com
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Fcs.Up.Gov.in
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Edistrict.Up.Nic.in
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Dbrauaaems.in
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Student.Nielit.in
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  Guruji24.com(Online Test)
                </li>
                <li className="py-2 hover:text-blue-500 cursor-pointer ">
                  W3sumit.com(Online Test)
                </li>
              </ul>
            </li>
            <li className="hover:text-blue-500 cursor-pointer py-4">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
