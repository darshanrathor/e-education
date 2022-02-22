import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Paragraph } from "../commonComponent/commonSIze";

export default function Footer() {
  const navigation = {
    title: "Courses",
    lins: [
      { link: "/courses/diploma-in-computer-applications", text: "DCA" },
      {
        link: "/courses/programming-post-graduate-diploma-course",
        text: "PGDCA",
      },
      { link: "/courses/desktop-publishing-courses", text: "DTP" },
      { link: "/courses/accounting", text: "Accounting" },
      { link: "/courses/typing", text: "Typing" },
      { link: "/courses/desktop-publishing-courses", text: "Fundamentals" },
      // { link: "/", text: "DGD" },
      {
        link: "/courses/advanced-diploma-in-computer-application-course",
        text: "ADCA",
      },
      { link: "/courses/spoken-english", text: "Spoken EN" },
      { link: "/courses/course-on-computer-concepts", text: "CCC/0'Level" },
      { link: "/courses", text: "All Courses" },
    ],
  };
  const resourse = {
    title: "More Links",
    lins: [
      { link: "/Aboutus", text: "About Institute" },
      { link: "/", text: "Gallery" },
      { link: "/contact", text: "Contact" },
    ],
  };

  // const use = {
  //   title: "More Link",
  //   lins: [
  //     { link: "/", text: "Gallery" },
  //     { link: "/", text: "Contact" },
  //   ],
  // };
  const router = useRouter();
  return (
    <div
      className={`${
        router.asPath === "/contact" ? "pt-24" : "pt-52"
      }  relative bg-[#0e1133] px-5`}
    >
      {router.asPath === "/contact" ? (
        ""
      ) : (
        <div className="px-5 absolute left-0 -top-[130px] w-full pb-24">
          <div className="flex justify-between gap-10 sm:flex-row flex-col overflow-hidden relative  z-[2] before:bg-right before:absolute before:top-0 before:z-[-1] before:-translate-y-9 before:scale-[1.2] before:translate-x-[300px] md:before:translate-x-9  before:right-0 before:bg-[url('/imgs/cta-shape.png')] before:bg-contain before:w-[400px] before:h-[400px] before:bg-no-repeat bg-[#2b4eff] py-6 px-6 md:py-14 md:px-16 w-full rounded-lg max-w-6xl mx-auto">
            <h2
              style={{ lineHeight: 1.3 }}
              className="text-white md:text-5xl text-3xl font-bold max-w-2xl"
            >
              You can be your own Guiding star with our help
            </h2>
            <Link href="/contact">
              <a className="bg-white max-w-[180px] whitespace-nowrap py-3.5 font-semibold sm:text-lg px-10 my-auto shadow-zinc-100 rounded-md hover:shadow-2xl">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      )}
      <div className="   grid gap-x-14 gap-y-10 grid-cols-1  md:grid-cols-6  max-w-6xl mx-auto md:pb-0 pb-20">
        <div className="flex flex-col gap-5 cursor-default w-full md:col-span-2">
          <div className="h-[80px]">
            <img src="/imgs/whitelogo.png" alt="logo" className="h-full" />
          </div>
          <p className="text-base text-zinc-300 leading-6">
            Akash institute offers a variety of courses – technology courses for
            IT students, career programs for students wanting to enter the IT
            sector, certification courses for IT professionals to enhance their
            career and basic IT programs for school students, housewives/senior
            citizens etc.{" "}
          </p>
          <div className="flex gap-6 mt-2 ">
            <a
              href="/"
              className="p-2 group bg-indigo-600 border-2 border-transparent hover:border-blue-500 hover:bg-transparent rounded-md"
            >
              <svg
                className="group-hover:fill-indigo-600 fill-white w-6 h-6"
                enableBackground="new 0 0 56.693 56.693"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 56.693 56.693"
              >
                <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z" />
              </svg>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:rahulshah1997@gmail.com"
              className="p-2 group bg-rose-600 border-2 border-transparent hover:border-rose-500 hover:bg-transparent rounded-md"
            >
              <svg
                className="group-hover:fill-rose-600 fill-white w-6 h-6"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g data-name="8-Email" id="_8-Email">
                  <path d="M45,7H3a3,3,0,0,0-3,3V38a3,3,0,0,0,3,3H45a3,3,0,0,0,3-3V10A3,3,0,0,0,45,7Zm-.64,2L24,24.74,3.64,9ZM2,37.59V10.26L17.41,22.17ZM3.41,39,19,23.41l4.38,3.39a1,1,0,0,0,1.22,0L29,23.41,44.59,39ZM46,37.59,30.59,22.17,46,10.26Z" />
                </g>
              </svg>
            </a>
            <a
              href="/"
              className="p-2 group bg-green-600 border-2 border-transparent hover:border-green-500 hover:bg-transparent rounded-md"
            >
              <svg
                className="group-hover:fill-green-600 fill-white w-6 h-6"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 56.693 56.693"
              >
                <g>
                  <path
                    className="st0"
                    d="M46.3802,10.7138c-4.6512-4.6565-10.8365-7.222-17.4266-7.2247c-13.5785,0-24.63,11.0506-24.6353,24.6333   c-0.0019,4.342,1.1325,8.58,3.2884,12.3159l-3.495,12.7657l13.0595-3.4257c3.5982,1.9626,7.6495,2.9971,11.7726,2.9985h0.01   c0.0008,0-0.0006,0,0.0002,0c13.5771,0,24.6293-11.0517,24.635-24.6347C53.5914,21.5595,51.0313,15.3701,46.3802,10.7138z    M28.9537,48.6163h-0.0083c-3.674-0.0014-7.2777-0.9886-10.4215-2.8541l-0.7476-0.4437l-7.7497,2.0328l2.0686-7.5558   l-0.4869-0.7748c-2.0496-3.26-3.1321-7.028-3.1305-10.8969c0.0044-11.2894,9.19-20.474,20.4842-20.474   c5.469,0.0017,10.6101,2.1344,14.476,6.0047c3.8658,3.8703,5.9936,9.0148,5.9914,14.4859   C49.4248,39.4307,40.2395,48.6163,28.9537,48.6163z"
                  />
                  <path
                    className="st0"
                    d="M40.1851,33.281c-0.6155-0.3081-3.6419-1.797-4.2061-2.0026c-0.5642-0.2054-0.9746-0.3081-1.3849,0.3081   c-0.4103,0.6161-1.59,2.0027-1.9491,2.4136c-0.359,0.4106-0.7182,0.4623-1.3336,0.1539c-0.6155-0.3081-2.5989-0.958-4.95-3.0551   c-1.83-1.6323-3.0653-3.6479-3.4245-4.2643c-0.359-0.6161-0.0382-0.9492,0.27-1.2562c0.2769-0.2759,0.6156-0.7189,0.9234-1.0784   c0.3077-0.3593,0.4103-0.6163,0.6155-1.0268c0.2052-0.4109,0.1027-0.7704-0.0513-1.0784   c-0.1539-0.3081-1.3849-3.3379-1.8978-4.5706c-0.4998-1.2001-1.0072-1.0375-1.3851-1.0566   c-0.3585-0.0179-0.7694-0.0216-1.1797-0.0216s-1.0773,0.1541-1.6414,0.7702c-0.5642,0.6163-2.1545,2.1056-2.1545,5.1351   c0,3.0299,2.2057,5.9569,2.5135,6.3676c0.3077,0.411,4.3405,6.6282,10.5153,9.2945c1.4686,0.6343,2.6152,1.013,3.5091,1.2966   c1.4746,0.4686,2.8165,0.4024,3.8771,0.2439c1.1827-0.1767,3.6419-1.489,4.1548-2.9267c0.513-1.438,0.513-2.6706,0.359-2.9272   C41.211,33.7433,40.8006,33.5892,40.1851,33.281z"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <FooterSection title={navigation.title} links={navigation.lins} />
        <FooterSection title={resourse.title} links={resourse.lins} />
        {/* <FooterSection title={use.title} links={use.lins} /> */}
        <div className="md:col-span-2 flex justify-center">
          <div className="flex flex-col gap-4">
            <span className="text-xl text-zinc-50 self-start font-semibold">
              Contact
            </span>
            <div className="flex flex-col gap-4">
              <span className="flex gap-3 items-center text-zinc-300">
                <svg
                  className="w-6 h-6 fill-white rounded-full"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 21" id="Layer_21">
                    <path
                      className="cls-1"
                      d="M16,31a3,3,0,0,1-2.21-1C10.14,26,4,18.39,4,13.36A12.19,12.19,0,0,1,16,1,12.19,12.19,0,0,1,28,13.36c0,5-6.14,12.59-9.79,16.65A3,3,0,0,1,16,31ZM16,3A10.2,10.2,0,0,0,6,13.36c0,3.14,3.47,8.86,9.28,15.31a1,1,0,0,0,1.44,0C22.53,22.22,26,16.5,26,13.36A10.2,10.2,0,0,0,16,3Z"
                    />
                    <path
                      className="cls-1"
                      d="M16,19a6,6,0,1,1,6-6A6,6,0,0,1,16,19ZM16,9a4,4,0,1,0,4,4A4,4,0,0,0,16,9Z"
                    />
                  </g>
                </svg>
                <p className="text-zinc-300 tetx-sm md:max-w-[230px]">
                  Bangara Bazar Road , Nawada Chauraha , Deoria
                </p>
              </span>
              <span className="flex gap-3 items-center text-zinc-300">
                <svg
                  className="w-6 h-6 fill-zinc-300"
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
                (+91)9454706492
              </span>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:rahulshah1997@gmail.com"
                className="flex gap-3 items-center text-zinc-300"
              >
                <svg
                  viewBox="0 0 32 32"
                  className="h-6 w-6 fill-zinc-300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <g id="mail">
                    <path d="M29,6H3L2.92,6a.78.78,0,0,0-.21,0l-.17.07a.65.65,0,0,0-.15.1.67.67,0,0,0-.15.14l-.06.06a.36.36,0,0,0,0,.09,1.08,1.08,0,0,0-.08.19A1.29,1.29,0,0,0,2,6.9S2,7,2,7V25a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V7A1,1,0,0,0,29,6ZM16,14.81,6.2,8H27.09ZM4,24V8.91l11.43,7.91,0,0a1.51,1.51,0,0,0,.18.09l.08,0A1.09,1.09,0,0,0,16,17h0a1,1,0,0,0,.41-.1l.07,0,0,0L28,9.79V24Z" />
                  </g>
                </svg>
                rahulshah1997@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 mt-10 w-full pb-5 text-center text-zinc-400 border-zinc-500 border-t max-w-6xl mx-auto">
        <span>© Copyright 2022 Akash Institute.</span>
      </div>
    </div>
  );
}

function FooterSection(props) {
  return (
    <div className="flex justify-start md:justify-center">
      <div className="flex  flex-col gap-5 items-start">
        <span className="text-xl text-zinc-50 self-start font-semibold">
          {props.title}
        </span>
        <div className="flex  flex-col gap-2 text-zinc-400">
          {props.links.map((item, i) => (
            <Link key={i} href={item.link}>
              <a className=" text-zinc-300 hover:text-zinc-500 text-[16px]">
                {item.text}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
