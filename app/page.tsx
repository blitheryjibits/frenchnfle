import { EmailForm } from "@/components/forms/EmailForm"; 

export default function Home() {


  return (
    <div className="min-h-screen p-8 bg-gray-500 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-black">Welcome to French`n FLE</h1>
      <EmailForm />
     
    </div>


  );
}
