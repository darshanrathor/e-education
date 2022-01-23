import React from "react";
import MobileNav from "../header/mobileNav";
import TopNav from "../header/topnav";
import BannerCarousel from "../swiper/bannerSwiper";
import Navbar from "../header/navbar";
import Footer from "../footer/footer";

export default function Layout(props) {
  return (
    <div>
      <TopNav />
      <MobileNav />
      <div className="md:py-0 py-16 w-full min-h-screen">
        <BannerCarousel />
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
