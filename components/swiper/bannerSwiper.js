import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function BannerCarousel() {
  return (
    <Carousel
      showThumbs={false}
      swipeable
      autoPlay
      infiniteLoop
      interval={2800}
      width={"100%"}
    >
      <div className="w-full h-10/12">
        <img src="/imgs/bannervikLC.jpeg" alt="banner1" />
      </div>
      <div className="w-full h-10/12">
        <img src="/imgs/bannerVtiJF.jpeg" alt="banner2" />
      </div>
    </Carousel>
  );
}
