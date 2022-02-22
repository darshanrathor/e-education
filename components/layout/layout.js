import React from "react";
import TopNav from "../header/topnav";
import Footer from "../footer/footer";
import { useRouter } from "next/router";
export default function Layout(props) {
  const router = useRouter();
  return (
    <div
      className={`${
        router.asPath === "/gallery"
          ? "bg-gradient-to-r from-indigo-500 to-blue-500"
          : ""
      } overflow-hidden`}
    >
      <TopNav />
      <div className=" w-full min-h-screen pb-32 ">{props.children}</div>
      <Footer />
    </div>
  );
}
