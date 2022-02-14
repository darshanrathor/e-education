import React from "react";
import MobileNav from "../header/mobileNav";
import TopNav from "../header/topnav";
import BannerCarousel from "../swiper/bannerSwiper";
import Footer from "../footer/footer";

export default function Layout(props) {
  return (
    <div className="overflow-hidden">
      <TopNav />
      <div className=" w-full min-h-screen pb-32 ">{props.children}</div>
      <Footer />
    </div>
  );
}
