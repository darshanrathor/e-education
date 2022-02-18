export default function Aboutus() {
  return (
    <>
      <div className="bg-indigo-800 bg-[url('/imgs/50.jpeg')] bg-cover bg-center overflow-y-scroll py-20 md:py-32 px-5   w-full ">
        <div className="center    max-h-8xl max-w-xl mx-auto items-center">
          <h1 className="text-white text-center text-b py-8 gap-2">
            Welcome to Akash Institute
          </h1>

          <div className="max-w-8xl text-center text-white text-4xl gap-6 py-4">
            Accelerate your IT career with industry in-demand courses
          </div>
        </div>
      </div>
      <div className="bg-indigo-50 pt-24 pb-24 md:pb-32">
        <div className=" max-w-7xl  flex flex-col gap-10 md:gap-20 mx-auto px-5 ">
          <h2 className="md:text-5xl text-4xl text-zinc-800 text-center mx-auto gap-6">
            {" "}
            Our Vision{" "}
          </h2>
          <div className="gap-14 md:gap-0 flex md:flex-row flex-col ">
            <div className="w-full items-center flex justify-center md:px-20">
              <p
                style={{ lineHeight: 1.7 }}
                className=" py-2   mx-auto text-lg md:text-xl "
              >
                Akash Institute is an institution that conducts training
                programs aimed at helping young career seekers understand the
                basic operational functioning of the sector and the job role
                they aspire to take on. Our uniquely designed programs empower
                young individuals to garner skills and knowledge for the modern
                global industry.
              </p>
            </div>
            <div className="w-full">
              <div className=" max-w-md border-2 border-indigo-700 mx-auto shadow-indigo-300/20 flex flex-col gap-5 justify-center  px-5 py-16 rounded-lg text-center text-black bg-white  shadow-xl ">
                <h2 className="text-indigo-700 ">Vision</h2>
                <span className=" leading-7 md:text-lg ">
                  "To Transform Lives Of Youngsters Through The Transfer Of
                  Knowledge And Skills, Enabling Them To Create A Stable
                  Career.".
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" gap-4 px-5 pt-24 pb-32 ">
        <h1 className="  text-indigo-600 py-5 text-center mx-auto">
          {" "}
          Our Institute Offers{" "}
        </h1>
        <p className=" py-5 mx-auto max-w-xl md:text-lg text-center">
          {" "}
          All the course are taught by experienced and certified faculty . Our
          trainer constantly update their technical skills to maintain their
          expertise .{" "}
        </p>

        <div className="center max-w-6xl mt-14 mx-auto grid grid-cols-1  md:grid-cols-3  gap-12">
          <div className="shadow rounded-md hover:shadow-lg border flex flex-col items-center justify-center gap-6 px-6 py-8">
            <img className="w-[70px] " src=".\imgs\a1.png "></img>
            <h6 className="md:text-xl text-lg text-center ">
              individual Computer
            </h6>
          </div>

          <div className="shadow border rounded-md hover:shadow-lg  flex flex-col items-center justify-center gap-6 px-6 py-8">
            <img className="w-[70px] " src=".\imgs\a2.png "></img>
            <h6 className=" md:text-xl text-lg text-center ">
              individual Specialized Training
            </h6>
          </div>

          <div className="shadow border rounded-md hover:shadow-lg  flex flex-col items-center justify-center gap-6 px-6 py-8">
            <img className="w-[70px] " src=".\imgs\a3.png "></img>
            <h6 className="md:text-xl text-lg text-center ">
              On-Line Training
            </h6>
          </div>

          <div className="shadow border rounded-md hover:shadow-lg  flex flex-col items-center justify-center gap-6 px-6 py-8">
            <img className="w-[70px] " src=".\imgs\a4.png "></img>
            <h6 className="md:text-xl text-lg text-center ">100% Practicals</h6>
          </div>

          <div className="shadow border flex flex-col items-center justify-center gap-6 px-6 py-8">
            <img className="w-[70px] " src=".\imgs\a5.png "></img>
            <h6 className="md:text-xl text-lg text-center ">
              Flexible batch Timings
            </h6>
          </div>

          <div className="shadow border rounded-md hover:shadow-lg  flex flex-col items-center justify-center gap-6 px-6 py-8">
            <img className="w-[70px] " src=".\imgs\a6.png "></img>
            <h6 className="md:text-xl text-lg text-center ">
              Job Oriented Courses
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
