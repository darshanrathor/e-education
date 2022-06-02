import React from 'react'

export default function SizeComponent(props) {
const py = props.py || "py-24";
const px = props.px || "px-5";
const width = props.width || "max-w-7xl mx-auto";
const section = props.section;
const extra = props.extra || ""


    return (
        <section className={`${section} w-full`}>
            <div className={`${py} ${extra} ${px} ${width}`}>
{props.children}
            </div>
        </section>
    )
}
