import React from 'react';
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Tooltip } from "@nextui-org/react";

const Card = ({ urlimagen, titulo, descripcion, url, urldemo }: { urlimagen: StaticImageData, titulo: string, descripcion: string, url: string, urldemo: string }) => {
    return (
        <section className='lg:flex-row w-96 lg:w-full gap-7 duration-700 flex flex-col drop-shadow-2xl text-white hover:bg-cyan-300 hover:text-black bg-cyan-900/50 rounded-r-xl p-6'>
            <div className='relative flex justify-center'>

                <Image width={400} src={urlimagen} alt={"image from " + titulo} />

            </div>

            <div className=' grid  justify-items-center wrap lg:w-96 w-full h-64'>
                <h2 className='font-bold text-3xl text-center'>{titulo}</h2>

                <p className=' p-3 text-sm font-bold  lg:text-md  text-center overflow-visible lg:text-left '>{descripcion}</p>
            </div>

            <div className='flex justify-center lg:gap-2'>
                <Tooltip content="Ir a Github">
                    <Link className='w-10 m-auto l' href={url}>
                        <Image className='inline-block hover:scale-125 hover:animate-pulse border bg-white rounded-full  ' width={40} height={100} src="https://cdn.icon-icons.com/icons2/936/PNG/96/github-logo_icon-icons.com_73546.png" alt="" />
                    </Link>
                </Tooltip>
                <Tooltip content="Ver demostracion" className='bg-cyan-300 rounded-full'>
                    <Link className='w-10 m-auto l' href={urldemo}>
                        <Image className='inline-block hover:scale-125 hover:animate-pulse border border-black bg-white rounded-full  ' width={40} height={100} src="https://cdn.icon-icons.com/icons2/1659/PNG/96/3844441-eye-see-show-view-watch_110305.png" alt="" />
                    </Link>
                </Tooltip>
            </div>


        </section>
    );
}

export default Card;
