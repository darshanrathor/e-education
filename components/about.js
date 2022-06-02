export default function Test() {
    return (
      <>    
      
      
      <div className="text-indigo-600 py-5 text-center mx-auto">
      <h1 className="text-indigo-600 "> Our professor's  </h1>
      </div>
      
      <div className="flex mt-24 px-5 md:flex-row mb-[100px] md:gap-20 gap-14 flex-col items-center max-w-7xl mx-auto ">
        <div className="w-full sm:flex-row flex-col md:w-3/5 flex md:gap-10">
            
          <div className="flex  flex-col gap-10">
            <Card />
            <Card2 />
          </div>
  
          <div className="flex mt-[30px] flex-col gap-10">
            <Card1 />
            <Card3 />
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col gap-5">
          <h2 className="md:text-4xl text-3xl">
            Measure success with key results.
          </h2>
          <p>
            Track progress with numerical, monetary, true/false, and task Targets.
            Create sprint Targets by adding tasks from different teams into a
            Goal, create weekly sales Targets, and more.
          </p>
        </div>
      </div>
  
      </>
  
    );
  }
  
  function Card() {
    return (
      <>
      <div
        style={{ boxShadow: "0px 30px 50px 0px #edeef1" }}
        className="flex bg-white flex-col gap-5 text-center justify-center p-8 rounded-[10px] "
      >
        <h2 className="md:text-3xl text-2xl font-semibold">Deepak Chaurasia</h2>
        <p className="md:text-lg">
          M.Sc(Physics), D,Eld, B.Ed(per.), CTET, UPTET
        </p>
        </div>
      </>
    );
  }

  function Card1() {
    return (
      <>
      <div
        style={{ boxShadow: "0px 30px 50px 0px #edeef1" }}
        className="flex bg-white flex-col gap-5 text-center justify-center p-8 rounded-[10px] "
      >
        <h2 className="md:text-3xl text-2xl font-semibold">Mukesh Kharwar</h2>
        <p className="md:text-lg">
          BCA, MBA(IIT),D.Eld 
        </p>
        </div>
      </>
    );
  }

  function Card2() {
    return (
      <>
      <div
        style={{ boxShadow: "0px 30px 50px 0px #edeef1" }}
        className="flex bg-white flex-col gap-5 text-center justify-center p-8 rounded-[10px] "
      >
        <h2 className="md:text-3xl text-2xl font-semibold">Rohit Kharwar </h2>
        <p className="md:text-lg">
          B.Tech (CS) , Java Developer 
        </p>
        </div>
      </>
    );
  }

  function Card3() {
    return (
      <>
      <div
        style={{ boxShadow: "0px 30px 50px 0px #edeef1" }}
        className="flex bg-white flex-col gap-5 text-center justify-center p-8 rounded-[10px] "
      >
        <h2 className="md:text-3xl text-2xl font-semibold">Sabir Alam  </h2>
        <p className="md:text-lg">
         M.Com (graphic & Web Designer ), Arcgitect Designer
        </p>
        </div>
      </>
    );
  }
  
  