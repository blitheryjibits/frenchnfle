import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/Footer";

export default function CourseDeFrancais() {
  return (
    <main className="w-full h-min-screen text-center flex flex-col justify-center font-playfair">
      <Nav />
      <div className="w-full flex justify-center ">
        <div
          className="
                w-full h-84
                bg-[url('/carousel-images/Eiffel_Tower-sunrise.jpg')] bg-cover bg-center
                mask-[url('/image-shear-mask.png')] mask-contain mask-center mask-no-repeat 
                
            "
        ></div>
      </div>
      <Footer />
    </main>
  );
}
