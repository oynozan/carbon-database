'use client'

import Image from "next/image";

import './searchbar.scss';

export default function SearchBar({
    placeholder = "",
    set = () => {},
    type = "text"
}) {
    return (
        <div className="searchbar">
            <input
                placeholder={placeholder}
                onChange={e => set(e.target.value)}
                type={type}
            />
            <Image
                src={"/icons/glass-g.svg"}
                alt="Search Icon"
                width={20}
                height={20}
                className="glass"
            />
        </div>
    )
}