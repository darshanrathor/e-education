import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card } from "..";
const courses = require("../../components/jsondata/Course.json");
export default function Index() {
  const [coursedata, setoursedata] = useState([]);
  const [select, setselect] = useState("all");
  const [select2, setselect2] = useState("alll");

  useEffect(() => {
    // setTimeout(() => {
    if (select === "all" && select2 === "alll") {
      setoursedata(courses);
    } else if (select2 === "alll") {
      const c = courses.filter((item) => item.Level === select);
      console.log(c);
      setoursedata(c);
    } else if (select === "all") {
      const c = courses.filter((item) => item.Duration === select2);
      console.log(c);
      setoursedata(c);
    } else if (select !== "all" && select2 !== "alll") {
      const c = courses.filter(
        (item) => item.Duration === select2 && item.Level === select
      );
      setoursedata(c);
    }
    // }, 1000);
  }, [select, select2]);

  const handlereset = () => {
    setselect("all");
    setselect2("alll");
  };

  // const handleSelect = (e) => {
  //   const { value } = e.target;
  //   console.log(value);
  //   setselect(value);
  //   if (value === "all" && ) {
  //     setoursedata(courses);
  //   } else {
  //     const c = courses.filter((item) => item.Level === value);
  //     setoursedata(c);
  //   }
  // };

  return (
    <>
      <div className="bg-blue-600 py-40 bg-[url('/imgs/courses.png')] bg-contain bg-no-repeat bg-center w-full"></div>
      <div className="flex gap-6 sm:flex-row flex-col py-14 max-w-6xl mx-auto items-center px-5">
        <div className="relative w-full max-w-xs sm:w-44 border cursor-pointer border-zinc-400 rounded-xl backgound-white z-[2]">
          <select
            onChange={(e) => setselect(e.target.value)}
            className="w-full cursor-pointer rounded-xl py-3 px-5  "
          >
            <option value="all">Any Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermidiate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute top-4 right-3 z-[1] pointer-events-none	"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="relative w-full max-w-xs md:w-44 border cursor-pointer border-zinc-400 rounded-xl backgound-white z-[2]">
          <select
            onChange={(e) => setselect2(e.target.value)}
            className="w-full cursor-pointer rounded-xl py-3 px-5 "
          >
            <option value="alll">Any Length</option>
            <option value="Short">Short</option>
            <option value="6-12 Months">6 - 12 Months</option>
            <option value="1 Year">1 Year</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute top-4 right-3 z-[1] pointer-events-none	"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-lg flex gap-4 items-center">
          {(select !== "all" || select2 !== "alll") && (
            <span onClick={handlereset} className="text-indigo-700 cursor-pointer text-lg">
              X
            </span>
          )}
          {coursedata.length} Results
        </p>
      </div>
      {/* courses*/}
      {coursedata.length === 0 ? (
        <div className="flex flex-col items-center pt-20 pb-32 justify-center">
          <img
            src="/imgs/triangle-pink.png"
            className="w-[150px]"
            alt="no result"
          />
          <h3>No Result</h3>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 px-5 pb-40 sm:mt-5 md:grid-cols-3 sm:grid-cols-2 max-w-6xl w-full mx-auto gap-10">
            {coursedata.map((item, i) => (
              <Card
                key={i}
                level={item.Level}
                duration={item.Duration}
                title={item.Course_title}
                desc={item["Course_desription"].substring(0, 80)}
                image="/course/course2.jpeg"
              />
            ))}
          </div>
         
        </div>
      )}
    </>
  );
}
