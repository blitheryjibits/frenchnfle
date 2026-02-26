import { EmailForm } from "@/components/forms/EmailForm"; 
import { Header } from "@/components/Header";
import { Nav } from "@/components/ui/Nav"
import { HomeContent } from "@/components/HomeContent";

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-500 flex flex-col justify-center">
      <Nav />
      <Header />
      <HomeContent />
      <EmailForm />
     
    </div>


  );
}
