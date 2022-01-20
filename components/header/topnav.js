import React from "react";

export default function TopNav() {
  return (
    <div className="bg-white fixed z-30 border-b border-gray-200 md:block hidden  w-full py-2">
      <div className="max-w-7xl mx-auto px-5 text-zinc-800">
        <ul className="flex w-full gap-x-10 gap-y-2 flex-wrap">
          <li className="hover:text-green-500 cursor-pointer py-4">Home</li>
          <li className="hover:text-green-500 cursor-pointer py-4">AboutUs</li>
          <li className="relative group py-4">
            <span className="hover:text-green-500 flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
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
              <li className="py-2 hover:text-green-500 cursor-pointer">
                Accounting
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Hardware & Networking
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Mobile Repairing
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Software
              </li>
            </ul>
          </li>
          <li className="relative group py-4">
            <span className="hover:text-green-500 flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
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
              <li className="py-2 hover:text-green-500 cursor-pointer">
                Student Login
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Online Registration
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Download Admit Card
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Check Certificate
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Check Registration
              </li>
            </ul>
          </li>
          <li className="hover:text-green-500 cursor-pointer py-4">Result</li>
          <li className="relative group py-4">
            <span className="hover:text-green-500 flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
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
              <li className="py-2 hover:text-green-500 cursor-pointer">
                Secure Login
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Online Registration
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Our Franchices
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Our Staff
              </li>
            </ul>
          </li>

          <li className="relative group py-4">
            <span className="hover:text-green-500 flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
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
              <li className="py-2 hover:text-green-500 cursor-pointer">
                Franchise Credential
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Franchise Registration Form
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Goverment & ISO Certificate
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Course Certificate Sample
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Franchise Membership
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Certificate Sample
              </li>
            </ul>
          </li>

          <li className="relative group py-4">
            <span className="hover:text-green-500 flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
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
              <li className="py-2 hover:text-green-500 cursor-pointer">
                Photo(s)
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Video(s)
              </li>
            </ul>
          </li>

          <li className="relative group py-4">
            <span className="hover:text-green-500 flex gap-1 items-center transition-colors duration-150 cursor-pointer ease-linear">
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
              <li className="py-2 hover:text-green-500 cursor-pointer">
                Sarkariresult.com
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Sarkariexam.com
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Fcs.Up.Gov.in
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Edistrict.Up.Nic.in
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Dbrauaaems.in
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Student.Nielit.in
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                Guruji24.com(Online Test)
              </li>
              <li className="py-2 hover:text-green-500 cursor-pointer ">
                W3sumit.com(Online Test)
              </li>
            </ul>
          </li>
          <li className="hover:text-green-500 cursor-pointer py-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}
