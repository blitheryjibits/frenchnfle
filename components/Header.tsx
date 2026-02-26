'use client'
import { HeaderCarousel } from "./ui/HeaderCarousel";

export const Header = () => {
    return (
        <header className=" pl-0 w-full h-[35vh] lg:h-[50vh] text-white" > 
                <div className="absolute inset-0">
                    <HeaderCarousel  
                    textOverlay={
                        `Cours en Ligne Formations professionnelles Français Langue Étrangère`
                    }/>
                </div>  

        </header>
    )
}