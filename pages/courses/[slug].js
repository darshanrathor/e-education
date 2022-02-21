const course = require("../../components/jsondata/Course.json");
export async function getStaticPaths() {
  const paths = course.map((item) => {
    const url = item.Course_title.split(" ").join("-").toLowerCase();
    return {
      params: {
        slug: url,
      },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const url = params.slug;

  const blog = course.filter(
    (item) => item.Course_title.split(" ").join("-").toLowerCase() === url
  );

  return {
    props: { data: blog[0], url: url },
  };
}

export default function CourseDetail({ data, url }) {
  return (
    <div className="w-full">
      <div className="backgroundgradient h-[350px] md:h-[450px] bg-[url('/course/banner.jpeg')] bg-cover bg-center w-full">
        <div className="relative flex flex-col gap-5 z-[2] px-5 top-1/2 -translate-y-1/2 max-w-7xl mx-auto w-full ">
          <h1 className="text-white">Courses</h1>
          <div className="flex gap-3 text-lg items-center pl-1">
            <span className="text-zinc-200">Home</span>
            <span className="w-1 h-1 rounded-full bg-white "></span>
            <span className="text-zinc-200">Courses</span>
            <span className="w-1 h-1 rounded-full bg-white "></span>
            <span className="text-white truncate pr-10 max-w-sm capitalize">
              {url.split("-").join(" ")}
            </span>
          </div>
        </div>
      </div>
      <div className="py-20 max-w-7xl mx-auto px-5">
        <div className="flex flex-col gap-5 ">
          <span className="font-semibold bg-indigo-600 max-w-max px-6 md:px-7 py-1.5 md:py-2 rounded-full text-white text-sm md:text-xl">
            {data.Course_name}
          </span>
          <h2
            style={{ lineHeight: 1.2 }}
            className=" text-zinc-800  max-w-3xl md:text-5xl text-4xl"
          >
            {data.Course_title}
          </h2>
        </div>
        <div className="w-full flex md:flex-row flex-col gap-14 md:gap-12 py-14">
          <div className="md:w-4/6 w-full">
            <div className="md:w-11/12 w-full flex flex-col gap-16">
              <div className="w-full">
                <img
                  src={data.img}
                  className="w-full sm:h-[350px]  rounded-md"
                  alt="course"
                />
              </div>
              <div className="divide-y divide-indigo-200 flex gap-14 flex-col">
                <div className="flex flex-col gap-6 text-4xl font-semibold">
                  About the course
                  <p
                    style={{ lineHeight: 1.7 }}
                    className="md:text-lg text-[18px] font-normal"
                  >
                    {data.description_main}
                  </p>
                </div>
                <div className="flex flex-col pt-14 gap-6 text-4xl font-semibold">
                  Description{" "}
                  <p
                    style={{ lineHeight: 1.7 }}
                    className="md:text-lg text-[18px] font-normal"
                  >
                    {data.description}
                  </p>
                  <p
                    style={{ lineHeight: 1.7 }}
                    className="md:text-lg text-[18px] font-normal"
                  >
                    {data.more_details}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/6 ">
            <div
              style={{ boxShadow: "0px 20px 50px 0px rgb(11 2 55 / 10%)" }}
              className="bg-white  max-w-xs mx-auto md:mr-auto px-10 py-5 rounded-xl flex flex-col divide-y "
            >
              <div className="flex gap-3 py-5 items-center">
                <svg
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 48 48"
                  className="w-5 h-5 fill-indigo-700 "
                >
                  <path
                    clip-rule="evenodd"
                    d="M37,47H11c-2.209,0-4-1.791-4-4V5c0-2.209,1.791-4,4-4h18.973  c0.002,0,0.005,0,0.007,0h0.02H30c0.32,0,0.593,0.161,0.776,0.395l9.829,9.829C40.84,11.407,41,11.68,41,12l0,0v0.021  c0,0.002,0,0.003,0,0.005V43C41,45.209,39.209,47,37,47z M31,4.381V11h6.619L31,4.381z M39,13h-9c-0.553,0-1-0.448-1-1V3H11  C9.896,3,9,3.896,9,5v38c0,1.104,0.896,2,2,2h26c1.104,0,2-0.896,2-2V13z M33,39H15c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h18  c0.553,0,1,0.448,1,1C34,38.553,33.553,39,33,39z M33,31H15c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h18c0.553,0,1,0.448,1,1  C34,30.553,33.553,31,33,31z M33,23H15c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h18c0.553,0,1,0.448,1,1C34,22.553,33.553,23,33,23  z"
                    fillRule="evenodd"
                  />
                </svg>
                <span className="flex items-center font-semibold text-zinc-800 text-lg gap-2">
                  Lectures:
                  <span className="text-zinc-500 font-normal">20 Lecture</span>
                </span>
              </div>
              <div className="flex py-5 gap-3 items-center">
                <svg
                  className="w-5 h-5 fill-indigo-700 "
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2" id="Layer_2">
                    <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
                    <path d="M21.5,22.5a1,1,0,0,1-.71-.29l-5.5-5.5A1,1,0,0,1,15,16V8a1,1,0,0,1,2,0v7.59l5.21,5.2a1,1,0,0,1,0,1.42A1,1,0,0,1,21.5,22.5Z" />
                  </g>
                  <g id="frame">
                    <rect class="cls-1" />
                  </g>
                </svg>
                <span className="flex items-center font-semibold text-zinc-800 text-lg gap-2">
                  Duration:
                  <span className="text-zinc-500 font-normal">
                    {data.Duration}
                  </span>
                </span>
              </div>
              <div className="flex py-5 gap-3 items-center">
                <svg
                  className="w-5 h-5 fill-indigo-700 "
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <g data-name="Layer 2" id="Layer_2">
                    <rect height="4" width="2" x="3" y="18" />
                    <rect height="8" width="2" x="7" y="14" />
                    <rect height="12" width="2" x="11" y="10" />
                    <rect height="16" width="2" x="15" y="6" />
                    <rect height="20" width="2" x="19" y="2" />
                  </g>
                </svg>
                <span className="flex items-center font-semibold text-zinc-800 text-lg gap-2">
                  Level:
                  <span className="text-zinc-500 font-normal">
                    {data.Level}
                  </span>
                </span>
              </div>
              <div className="flex gap-3 py-5 items-center">
                <svg
                  className="w-5 h-5 fill-indigo-700 "
                  data-name="Livello 1"
                  id="Livello_1"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M64,39A25,25,0,1,0,89,64,25,25,0,0,0,64,39Zm0,44A19,19,0,1,1,83,64,19,19,0,0,1,64,83Z" />
                  <path d="M121,48h-8.93a1,1,0,0,1-.94-.68,49.9,49.9,0,0,0-2-4.85,1,1,0,0,1,.18-1.15L115.62,35a7,7,0,0,0,0-9.9L102.89,12.38a7,7,0,0,0-9.9,0l-6.31,6.31a1,1,0,0,1-1.15.18,49.76,49.76,0,0,0-4.85-2,1,1,0,0,1-.68-.94V7a7,7,0,0,0-7-7H55a7,7,0,0,0-7,7v8.93a1,1,0,0,1-.68.94,49.9,49.9,0,0,0-4.85,2,1,1,0,0,1-1.15-.18L35,12.38a7,7,0,0,0-9.9,0L12.38,25.11a7,7,0,0,0,0,9.9l6.31,6.31a1,1,0,0,1,.18,1.15,49.76,49.76,0,0,0-2,4.85,1,1,0,0,1-.94.68H7a7,7,0,0,0-7,7V73a7,7,0,0,0,7,7h8.93a1,1,0,0,1,.94.68,49.9,49.9,0,0,0,2,4.85,1,1,0,0,1-.18,1.15L12.38,93a7,7,0,0,0,0,9.9l12.73,12.73a7,7,0,0,0,9.9,0l6.31-6.31a1,1,0,0,1,1.15-.18,49.76,49.76,0,0,0,4.85,2,1,1,0,0,1,.68.94V121a7,7,0,0,0,7,7H73a7,7,0,0,0,7-7v-8.93a1,1,0,0,1,.68-.94,49.9,49.9,0,0,0,4.85-2,1,1,0,0,1,1.15.18L93,115.62a7,7,0,0,0,9.9,0l12.73-12.73a7,7,0,0,0,0-9.9l-6.31-6.31a1,1,0,0,1-.18-1.15,49.76,49.76,0,0,0,2-4.85,1,1,0,0,1,.94-.68H121a7,7,0,0,0,7-7V55A7,7,0,0,0,121,48Zm1,25a1,1,0,0,1-1,1h-8.93a7,7,0,0,0-6.6,4.69,43.9,43.9,0,0,1-1.76,4.26,7,7,0,0,0,1.35,8l6.31,6.31a1,1,0,0,1,0,1.41L98.65,111.38a1,1,0,0,1-1.41,0l-6.31-6.31a7,7,0,0,0-8-1.35,43.88,43.88,0,0,1-4.27,1.76,7,7,0,0,0-4.68,6.6V121a1,1,0,0,1-1,1H55a1,1,0,0,1-1-1v-8.93a7,7,0,0,0-4.69-6.6,43.9,43.9,0,0,1-4.26-1.76,7,7,0,0,0-8,1.35l-6.31,6.31a1,1,0,0,1-1.41,0L16.62,98.65a1,1,0,0,1,0-1.41l6.31-6.31a7,7,0,0,0,1.35-8,43.88,43.88,0,0,1-1.76-4.27A7,7,0,0,0,15.93,74H7a1,1,0,0,1-1-1V55a1,1,0,0,1,1-1h8.93a7,7,0,0,0,6.6-4.69,43.9,43.9,0,0,1,1.76-4.26,7,7,0,0,0-1.35-8l-6.31-6.31a1,1,0,0,1,0-1.41L29.35,16.62a1,1,0,0,1,1.41,0l6.31,6.31a7,7,0,0,0,8,1.35,43.88,43.88,0,0,1,4.27-1.76A7,7,0,0,0,54,15.93V7a1,1,0,0,1,1-1H73a1,1,0,0,1,1,1v8.93a7,7,0,0,0,4.69,6.6,43.9,43.9,0,0,1,4.26,1.76,7,7,0,0,0,8-1.35l6.31-6.31a1,1,0,0,1,1.41,0l12.73,12.73a1,1,0,0,1,0,1.41l-6.31,6.31a7,7,0,0,0-1.35,8,43.88,43.88,0,0,1,1.76,4.27,7,7,0,0,0,6.6,4.68H121a1,1,0,0,1,1,1Z" />
                </svg>
                <span className="flex items-center font-semibold text-zinc-800 text-lg gap-2">
                  Language:
                  <span className="text-zinc-500 font-normal">English</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
