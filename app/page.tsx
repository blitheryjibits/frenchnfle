import { EmailForm } from "@/components/forms/EmailForm"; 
import { Header } from "@/components/Header";

export default function Home() {


  return (
    <div className="min-h-screen p-8 bg-gray-500 flex flex-col items-center justify-center">
      <Header />
      <EmailForm />
     
    </div>


  );
}
