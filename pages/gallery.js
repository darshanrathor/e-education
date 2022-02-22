export default function photo() {
  return (
    <>
      <div className=" bg-gradient-to-r from-indigo-500 to-blue-500 text-center   pt-16 pb-10 md:pt-32 md:pb-32 mx-auto  ">
        <div className=" pt-10 pb-5">
          <h1 className=" font-bold gap-10 text-center text-white py-8">
            {" "}
            OUR GALLERY{" "}
          </h1>
        </div>

        <div className="  center  md:pt-5 md:pb-10 pt-10 pb-20  ">
          <div className="  px-5">
            <div className=" items-center max-w-6xl  mx-auto w-full grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              <img
                src="\gallery\5.jpeg "
                width={400}
                height={400}
                className=" inline rounded"
              ></img>
              <img
                src="\gallery\3.jpeg "
                width={400}
                height={400}
                className=" inline rounded"
              ></img>
              <img
                src="\gallery\4.jpeg "
                width={400}
                height={400}
                className=" inline rounded"
              ></img>
              <img
                src="\gallery\5.jpeg "
                width={400}
                height={400}
                className=" inline rounded"
              ></img>
              <img
                src="\gallery\4.jpeg "
                width={400}
                height={400}
                className=" inline rounded"
              ></img>
              <img
                src="\gallery\3.jpeg "
                width={400}
                height={400}
                className=" inline rounded"
              ></img>
              <img
                src="\gallery\3.jpeg "
                width={400}
                height={400}
                className=" inline rounded"
              ></img>
              <img
                src="\gallery\5.jpeg "
                width={400}
                height={400}
                className=" inline rounded"
              ></img>
              <img
                src="\gallery\3.jpeg "
                width={400}
                height={400}
                className=" inline rounded"
              ></img>
              <img
                src="\gallery\3.jpeg "
                width={400}
                height={400}
                className=" inline rounded"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
