import React from "react";
import MobileNav from "../header/mobileNav";
import TopNav from "../header/topnav";

export default function Layout(props) {
  return (
    <div>
      <TopNav />
      <MobileNav />
      {props.children}
    </div>
  );
}
