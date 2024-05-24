import Head from "next/head";
import { Inter } from "next/font/google";

import Link from "next/link"
import About from "@/components/About/About";
import Contacts from "@/components/Contacts/Contacts";
import Proyects from "@/components/Proyects/Proyects";
import Skills from "@/components/Skills/Skills";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className="relative mx-auto  ">

        <div className="flex justify-center">
        <nav className=" content-center   animate-bounce hover:animate-none fixed z-50   lg:w-1/2  w-96   mt-10 lg:mt-10 h-10   rounded-full   border  border-cyan-300 hover:opacity-100 bg-white/30 backdrop-blur">
          <div className="flex flex-row justify-center ">
            <div className="flex  order-none  gap-3 lg:gap-5 text-black font-mono lg:text-md text-sm font-bold ">
              <Link href={"#about"} className="duration-700 inline-block hover:scale-125  hover:text-cyan-300">Informacion</Link>
              <Link href={"#proyects"} className="m-0 duration-700 inline-block hover:scale-125  hover:text-cyan-300">Proyectos</Link>
              <Link href={"#skills"} className="duration-700 inline-block hover:scale-125  hover:text-cyan-300">Habilidades</Link>
              <Link href={"#contacts"} className="duration-700 inline-block hover:scale-125  hover:text-cyan-300">Contactos</Link>
            </div>
          </div>
        </nav>
        </div>

        <section className="flex flex-col  backdrop-blur w-full lg:w-full lg:p-10 content-center  p-0 m-auto">
          
          <div id="about">
            <About></About>
          </div>
          
          <div id="proyects" className="flex  p-5 justify-center w-full  top-0">
            <div className="w-4/2">
            <h1 className="p-3 text-3xl text-white font-bold sticky top-0 w-full text-center">⚒️ Proyectos ⚒️</h1>
            <Proyects></Proyects>
            </div>
          </div>
          
          <div id="skills" className="flex flex-col p-5 gap-4  justify-center w-full  top-0">
            <h1 className="text-4xl text-center text-white font-bold">🧰 Habilidades 🧰</h1>
            <Skills></Skills>
          </div>
          
          <div id="contacts" className="flex  gap-4 flex-col justify-center  top-0">
            <h1 className="text-4xl text-center p-5 text-white font-bold">🪪 Contactos 🪪</h1>
            <Contacts></Contacts>
          </div>
        </section>
      </main>
    </>
  );
}
