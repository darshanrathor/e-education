import React from "react";

export function Header(props) {
  const extra = props.extra || " md:text-5xl text-blue-600 text-3xl";
  return (
    <h2
      style={{ lineHeight: 1.2 }}
      className={`${extra}   md:leading-[1.1] font-semibold `}
    >
      {props.children}
    </h2>
  );
}

export function Paragraph(props) {
  const extra = props.extra || "text-zinc-700";
  return <p className={`${extra}  md:text-lg leading-7`}>{props.children}</p>;
}
