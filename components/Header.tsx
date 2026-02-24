'use client'
import Image from "next/image";
import { HeaderCarousel } from "./ui/HeaderCarousel";
import { useEffect, useState } from "react";

function useScreenSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight*0.3 });
    }
    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export const Header = () => {
    const { width, height } = useScreenSize();
    return (
        <header className="w-full text-white text-center" >
            <div className="relative w-full lg:h-content">
                <div className="z-10 w-full h-full">
                    <HeaderCarousel height={height} width={width} />
                </div>
                <div className="absolute inset-0 margin-auto z-20 flex flex-row items-center gap-4">
                    <div>
                        <Image loading="eager" src="/origami_Julie_web.webp" alt="French`n FLE Logo" width={400} height={100} style={{transform: "rotate(-20deg)"}}/>
                    </div>
                    <div className="p-6 pl-0 w-full lg:w-[60%] flex flex-col justify-start ">
                        <h1 className="font-playfair  text-4xl text-purple-400">Cours en Ligne Formations professionnelles Français Langue Étrangère</h1>
                    </div>
                    <div className="flex flex-col flex-1 p-6 transform -rotate-90 text-2xl text-purple-400">
                        <p className="justify-self-end">|||</p>
                    </div>
                </div>
            </div>

        </header>
    )
}