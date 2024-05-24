import { Country } from "app/components/home/Country";
import { Metadata } from "next";

export const metadata : Metadata = {  
  title: "API Colombia",
  description: "Bienvenido a la aplicación de colombia",
  keywords: ["colombia", "api", "informacion"]
}

export default function Home() {
  return (
    <main>
      <>
        <Country />      
      </>
    </main>
  )
}
