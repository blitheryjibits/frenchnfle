'use client' 
import { useState } from "react" 
import Link from "next/link"
import Image from "next/image"

export const Nav = () => {
const [open, setOpen] = useState(false)

    const items = [ 
        { label: "Accueil", href: "/" }, 
        { label: "Cours de Français", href: "/cours" }, 
        { label: "Formations professionnelles FLE", href: "/formations" }, 
        { label: "Service de traduction", href: "/traduction" }, 
        { label: "Infos et contact", href: "/contact" }, 
        { label: "FAQ", href: "/faq" }, 
    ]

    return ( 
    <nav className={`
        w-full sticky top-0 z-30 pb-2 pr-2
        grid grid-cols-8
        bg-[#2a35bc]/20
        `}>
        <div className="
            col-span-2 md:col-span-1 ml-2 mt-2 md:ml-4 py-4
            -rotate-20">
            <Image 
            loading="eager" 
            src="/origami_Julie_web.webp" 
            alt="French`n FLE Logo" 
            width={150} height={100} 
            className=""
            />
        </div>

        <div className="col-8 flex items-center justify-end md:hidden px-4 py-2"> 
            <button type="button" onClick={() => setOpen(!open)} 
                className="text-white text-2xl focus:outline-none" aria-label="Toggle navigation" > 
                ☰ 
            </button> 
        </div> 
        {/* Menu */} 
        <ul 
        className={`
            col-span-7 text-[clamp(.65rem, 0.8rem, 1.2rem)] list-none md:gap-2
            flex flex-row justify-end items-center 
            transition-all duration-300
            ${open ? "max-h-96 py-2" : "max-h-0 overflow-hidden md:max-h-none md:py-0"}`
        } > 
            {items.map((item) => ( 
                <li key={item.href} 
                    className="text-center w-full px-2"
                > 
                    <Link href={item.href} 
                    className="rounded-md transition-colors text-white" > 
                    {item.label} 
                    </Link> 
                </li> ))
            } 
        </ul> 
    </nav> )
}