import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function BannerCarousel() {
  return (
    <>
      <div className="flex gap-20 items-center max-w-7xl mx-auto">
        <div className="w-full flex flex-col gap-12">
          <h1 style={{ lineHeight: 1.1 }} className="md:text-6xl text-5xl">
            Build skills with courses flexible online courses
          </h1>
          <button className="bg-blue-700 p-5 roonded text-white font-bold text-xl max-w-[300px]">
            Join For Free
          </button>
        </div>
        <div className="w-full">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_4rq0nvpt.json"
            background="transparent"
            speed="0.6"
            style={{ width: "100%", height: "500px" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>

      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    </>
    // <Carousel
    //   showThumbs={false}
    //   swipeable
    //   autoPlay
    //   showStatus={false}
    //   infiniteLoop
    //   interval={2800}
    //   width={"100%"}
    // >
    //   <div className="w-full h-10/12">
    //     <img src="/imgs/bannervikLC.jpeg" alt="banner1" />
    //   </div>
    //   <div className="w-full h-10/12">
    //     <img src="/imgs/bannerVtiJF.jpeg" alt="banner2" />
    //   </div>
    // </Carousel>
  );
}
