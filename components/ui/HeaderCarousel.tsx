
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { getCarouselImages } from "@/lib/getCarouselImages"
import Image from "next/image";
import { useEffect, useState } from "react";



export function HeaderCarousel({height, width}: {height?: number, width?: number}) {
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
      plugins= {[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,

        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="">
        {images.map((src, i) => (
          <CarouselItem key={i} className="">
              <Card className="border-none">
                <CardContent 
                    className="relative flex items-center justify-center"
                    style={{width: width, height: height}}>
                  <Image src={src} alt="" 
                    fill
                    className="object-cover object-middle w-full h-full filter brightness-50"
                    />
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
