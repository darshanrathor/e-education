import React, { useState } from "react";
import { Paragraph } from "../components/commonComponent/commonSIze";

export default function Contact() {
  const [formValue, setformValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setformError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setformValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="  ">
        <div className=" pb-28 pt-32 md:pt-36 md:pb-32  bg-[url('/imgs/contact.jpg')] bg-cover bg-center w-full ">
          <h4 className="max-w-7xl px-5 mx-auto md:text-4xl text-white font-cera_medium text-3xl">
            Contact
          </h4>
        </div>
        <div className="md:px-0 pt-10 md:pt-16 pb-24">
          <div className="  max-w-6xl w-full mx-auto">
            <div className="flex gap-10 md:gap-20 px-5 md:flex-row flex-col ">
              <div className="bg-white mt-10 border border-blue-200 p-5 md:p-3 max-w-lg w-full mx-auto rounded-[20px] shadow-lg">
                <form className="flex rounded-xl flex-col md:bg-blue-50   w-full gap-10 md:py-8 md:px-7">
                  <h4 className="font-cera_bold text-zinc-800 ">
                    Ready to Get Started?
                  </h4>
                  <div className="w-full relative  flex  flex-col gap-3 ">
                    <input
                      type="text"
                      value={formValue.name}
                      onChange={handleInput}
                      id="name"
                      name="name"
                      className={`w-full st bg-transparent  text-zinc-800  border-b-2 ${
                        formError.name && formValue.name === ""
                          ? "border-red-500"
                          : "border-zinc-500"
                      } focus:border-zinc-800  pt-3 pb-2   `}
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="whitespace-nowrap labelt dark:text-zinc-800 text-base"
                    >
                      Enter Your Name:
                    </label>
                  </div>
                  <div className="w-full flex relative flex-col gap-3  ">
                    <input
                      type="text"
                      value={formValue.email}
                      onChange={handleInput}
                      id="email"
                      name="email"
                      className={`w-full bg-transparent st text-zinc-800  border-b-2 ${
                        formError.name && formValue.name === ""
                          ? "border-red-500"
                          : "border-zinc-500"
                      } focus:border-zinc-800 pt-3 pb-2   `}
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="whitespace-nowrap labelt dark:text-zinc-800 text-base"
                    >
                      Email Address:
                    </label>
                  </div>
                  <div className="w-full flex relative flex-col gap-3  ">
                    <textarea
                      value={formValue.message}
                      onChange={handleInput}
                      id="message"
                      name="message"
                      className={`w-full bg-transparent  h-[120px] st text-zinc-800 border-b-2 ${
                        formError.name && formValue.name === ""
                          ? "border-red-500"
                          : "border-zinc-500"
                      } focus:border-zinc-800  outline-none  pt-3 pb-2    `}
                      placeholder=" "
                    />
                    <label
                      htmlFor="message"
                      className="whitespace-nowrap labelt dark:text-zinc-800 text-base"
                    >
                      Message:
                    </label>
                  </div>
                  <button className="bg-zinc-900 px-10 py-2.5 transition duration-150  max-w-[200px] hover:bg-zinc-800 hover:scale-[1.05]  rounded-md font-cera_medium text-base text-white">
                    Send Enquiry
                  </button>
                </form>
              </div>
              <div className="bg-white py-10 my-auto px-5 md:p-10 text-left rounded-[20px] w-full flex flex-col  gap-14">
                <div className="flex gap-8 border transition duration-150 ease-in group hover:bg-blue-700 hover:txt-white  border-blue-700 items-center p-6 rounded-[20px]">
                  <div className="bg-blue-700  rounded-full p-2 ">
                    <svg
                      className="w-8 h-8 fill-white rounded-full"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g data-name="Layer 21" id="Layer_21">
                        <path
                          class="cls-1"
                          d="M16,31a3,3,0,0,1-2.21-1C10.14,26,4,18.39,4,13.36A12.19,12.19,0,0,1,16,1,12.19,12.19,0,0,1,28,13.36c0,5-6.14,12.59-9.79,16.65A3,3,0,0,1,16,31ZM16,3A10.2,10.2,0,0,0,6,13.36c0,3.14,3.47,8.86,9.28,15.31a1,1,0,0,0,1.44,0C22.53,22.22,26,16.5,26,13.36A10.2,10.2,0,0,0,16,3Z"
                        />
                        <path
                          class="cls-1"
                          d="M16,19a6,6,0,1,1,6-6A6,6,0,0,1,16,19ZM16,9a4,4,0,1,0,4,4A4,4,0,0,0,16,9Z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h4 className="group-hover:text-white">Our Address</h4>
                    <p className="mt-1 group-hover:text-white md:text-lg">
                      2750 Quadra Street Victoria Road, New York, Canada
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 border transition duration-150 ease-in group hover:bg-blue-700 hover:txt-white  border-blue-700 items-center p-6 rounded-[20px]">
                  <div className="bg-blue-700  rounded-full p-2 ">
                    <svg
                      className="w-8 h-8 fill-white"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <g data-name="1" id="_1">
                        <path d="M348.73,450.06a198.63,198.63,0,0,1-46.4-5.85c-52.43-12.65-106.42-44.74-152-90.36s-77.71-99.62-90.36-152C46.65,146.75,56.15,99.61,86.69,69.07l8.72-8.72a42.2,42.2,0,0,1,59.62,0l50.11,50.1a42.18,42.18,0,0,1,0,59.62l-29.6,29.59c14.19,24.9,33.49,49.82,56.3,72.63s47.75,42.12,72.64,56.31L334.07,299a42.15,42.15,0,0,1,59.62,0l50.1,50.1a42.16,42.16,0,0,1,0,59.61l-8.73,8.72C413.53,439,383.73,450.06,348.73,450.06ZM125.22,78a12,12,0,0,0-8.59,3.56l-8.73,8.72c-22.87,22.87-29.55,60-18.81,104.49,11.37,47.13,40.64,96.1,82.41,137.86s90.73,71,137.87,82.41c44.5,10.74,81.61,4.06,104.48-18.81l8.72-8.72a12.16,12.16,0,0,0,0-17.19l-50.09-50.1a12.16,12.16,0,0,0-17.19,0l-37.51,37.51a15,15,0,0,1-17.5,2.72c-30.75-15.9-61.75-39.05-89.65-66.95s-51-58.88-66.94-89.63a15,15,0,0,1,2.71-17.5l37.52-37.51a12.16,12.16,0,0,0,0-17.19l-50.1-50.11A12.07,12.07,0,0,0,125.22,78Z" />
                        <path d="M364.75,269.73a15,15,0,0,1-15-15,99.37,99.37,0,0,0-99.25-99.26,15,15,0,0,1,0-30c71.27,0,129.25,58,129.25,129.26A15,15,0,0,1,364.75,269.73Z" />
                        <path d="M428.15,269.73a15,15,0,0,1-15-15c0-89.69-73-162.66-162.65-162.66a15,15,0,0,1,0-30c106.23,0,192.65,86.43,192.65,192.66A15,15,0,0,1,428.15,269.73Z" />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h4 className="group-hover:text-white">Contact</h4>
                    <p className="mt-1 group-hover:text-white md:text-lg">
                      Mobile: (+91)8356037560
                    </p>
                    <p className="mt-1 group-hover:text-white md:text-lg">
                      info@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
