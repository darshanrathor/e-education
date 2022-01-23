import React from "react";

export function Header(props) {
  const extra = props.extra || "";
  return (
    <h2
      style={{ lineHeight: 1.1 }}
      className={`${extra} md:text-5xl text-blue-600 font-semibold text-4xl`}
    >
      {props.children}
    </h2>
  );
}

export function Paragraph(props) {
  const extra = props.extra || "";
  return (
    <p className={`${extra} text-zinc-700 md:text-lg leading-7`}>
      {props.children}
    </p>
  );
}
