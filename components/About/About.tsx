import React from 'react';
import Image from 'next/image';
import yo from '@/public/yo.jpg'
import Link from 'next/link';
import { Accordion, AccordionItem } from "@nextui-org/react";

const About = () => {

    
    return (
        <section className='flex flex-col lg:flex-row '>

            <div className='lg:m-auto m-0   flext flex-col content-center gap-4 p-10  border border-y-8 border-double rounded-2xl  bg-cyan-400/15  max-w-7xl  w-3/2'>
                <div className='flex justify-center'>
                    <Image className=' rounded-full w-40 lg:w-50' width={200} height={100} src={yo} alt={'yo'}></Image>
                </div>
                <h1 className='p-5 text-white text-center lg:text-5xl text-3xl'>Josue Alberto Moreno Guzman</h1>


                <div className='flex justify-center p-4 gap-3'>
                    <Link href={"https://github.com/Josue-AMG"}>
                        <Image className='inline-block hover:scale-125 hover:border- bg-cyan-400 rounded-full border border-cyan-400' width={40} height={100} src="https://cdn.icon-icons.com/icons2/936/PNG/96/github-logo_icon-icons.com_73546.png" alt="" />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/josue-alberto-moreno-guzman-470b0b262?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BU%2FO8esADRO22OsJAgdXPpg%3D%3D&original_referer="}>
                        <Image className='inline-block hover:scale-125 bg-cyan-400 rounded-full border border-cyan-400 ' width={40} height={100} src="https://cdn.icon-icons.com/icons2/2428/PNG/96/linkedin_black_logo_icon_147114.png" alt="" />
                    </Link>



                </div>

                <div className='flex flex-row content-center justify-center w-full p-5'>
                    <p className='text-blue-700 text-center text-5xl' >{"{"}</p>
                    <p className='text-amber-800 text-center text-5xl' >{'"'}</p>
                    <h1 className=' text-white  text-center text-4xl'> Desarrollador de Software</h1>
                    <p className='text-amber-800 text-center text-5xl' >{'"'}</p>
                    <p className='text-blue-700 text-center text-5xl' >{"}"}</p>
                </div>

                <h3 className='text-cyan-400 text-center text-sm lg:text-xl'>
                    Disfruto enormemente los retos que me motivan a desarrollar y ampliar continuamente mis conocimientos. Me atrae tanto la competitividad como la colaboración, y me gusta poner a prueba mi capacidad para resolver problemas que promuevan mi crecimiento como desarrollador.

                    Valoro mucho el trabajo en equipo, ya que compartir ideas y colaborar facilita un desarrollo más rápido y eficiente de las asignaciones y tareas.
                </h3>

                <div className='p-3'>
                    <Accordion className=''>
                        <AccordionItem className=' m-auto bg-black/70 text-cyan-300 lg:w-2/4  rounded-xl border border-cyan-300 p-1 box-border' key="1" aria-label="CVs" title="🗒️ CVs">
                        <div className='flex flex-col gap-2 text-center p-3 box-border'>
                        <Link className='hover:text-white hover:animate-pulse' href={'https://drive.google.com/file/d/1J1Och1gvKUuK565Wycjfzsv-aYCKCLkq/view?usp=sharing'}>Tecnico en Informatica</Link>
                        <Link className='hover:text-white hover:animate-pulse' href={'https://drive.google.com/file/d/1L5eogE9driCCBMLPNXYQR3qAa0ovX9b9/view?usp=sharing'}>Desarrollador de Software</Link>
                        </div>

                        </AccordionItem>
                        
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default About;
