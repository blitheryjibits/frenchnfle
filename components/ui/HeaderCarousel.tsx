import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { getCarouselImages } from "@/lib/getCarouselImages";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeaderCarousel({ textOverlay }: { textOverlay?: string }) {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    const fetchImages = async () => {
      const imageList = await getCarouselImages();
      setImages(imageList);
    };
    fetchImages();
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
      className="w-screen"
    >
      {textOverlay && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <h1 className="font-playfair md:text-4xl w-[70vw] text-center text-purple-400">
            {textOverlay}
          </h1>
        </div>
      )}
      <CarouselContent className="">
        {images.map((src, i) => (
          <CarouselItem key={i} className="">
            <Card className="border-none">
              <CardContent
                className="
                      relative flex items-center justify-center 
                      border-none h-[35vh] lg:h-[60vh]"
              >
                <Image
                  src={src}
                  alt="Image of Parisian streets"
                  fill
                  className="object-cover w-full filter brightness-50"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
