import { EmailForm } from "@/components/forms/EmailForm"; 
import { Header } from "@/components/Header";
import { Nav } from "@/components/ui/Nav"
import { HomeContent } from "@/components/HomeContent";
import { Footer } from "@/components/Footer"

export default function Home() {

  return (
    <div className="
      min-h-screen flex flex-col justify-center
      bg-[linear-gradient(135deg,#4B2E83,#3A6EA5)]
      ">
      <Nav />
      <Header />
      <HomeContent />
      <EmailForm />
      <Footer />
     
    </div>


  );
}
