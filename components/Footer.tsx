"use client";

import Link from "next/link";
import Image from "next/image"
import { usePathname } from "next/navigation"

export const Footer = () => {
    const pathname = usePathname(); 
    const linkClass = (href: string) => 
        pathname === href 
        ? "underline underline-offset-4 text-purple-200" 
        : "hover:underline underline-offset-4 hover:text-purple-300 transition";

  return (
    <footer className="w-full bg-purple-900 text-white mt-20 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left">

        <div className="flex flex-col gap-2">
            <div className="">
                <h2 className="text-xl font-bold">Julie BEAUFORT</h2>
                <p className="text-sm leading-relaxed">
                    Formatrice de formateurs<br />
                    Professeure de FLE
                </p>
            </div>

            <div className="text-sm">
                <p className="text-md font-semibold">Contact</p>
                <div className="flex flex-col pt-2 gap-1">
                    <div className="flex flex-row">
                        <Image src="/whatsapp.png" alt="whatsapp icon" width={24} height={24} /> &nbsp;&nbsp; <a href="tel:+33784972104" className="hover:text-purple-300">+33 7 84 97 21 04</a>
                    </div>
                    <p>
                        <a href="mailto:frenchnfle@gmail.com" className="hover:text-purple-300">
                            📧 &nbsp;&nbsp; frenchnfle@gmail.com
                        </a>
                    </p>
                </div>
            </div>

        </div>


       <div className="
            col-span-2 md:col-span-1 ml-2 mt-2 md:ml-4 py-4
            -rotate-20">
            <Image 
            loading="eager" 
            src="/origami_Julie_web.webp" 
            alt="French`n FLE Logo" 
            width={250} height={100} 
            className=""
            />
        </div>
 

            <div className="flex flex-col space-y-2 text-sm">
                <Link href="/"                          className={linkClass("/")}>Accueil</Link>
                <Link href="/cours-de-francais"         className={linkClass("/cours-de-francais")}>Cours de Français</Link>
                <Link href="/formations-professionnelles" className={linkClass("/formations-professionnelles")}>Formations professionnelles FLE</Link>
                <Link href="/service-de-traduction"     className={linkClass("/service-de-traduction")}>Service de traduction</Link>
                <Link href="/infos-et-contact"          className={linkClass("/infos-et-contact")}>Infos et contact</Link>
                <Link href="/faq"                       className={linkClass("/faq")}>FAQ</Link>
            </div>

        </div>

        <div className="mt-10 text-center text-xs text-purple-200">
            Site créé avec ❤️ — Nouvelle version réalisée par Robert
        </div>
    </footer>
  );
}
