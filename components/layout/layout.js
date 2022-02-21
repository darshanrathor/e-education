import React from "react";
import TopNav from "../header/topnav";
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
