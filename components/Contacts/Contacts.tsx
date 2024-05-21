import React from 'react';
import Image from 'next/image'
import yo from '@/public/yo2.jpg'
import back from '@/public/background.png'
const Contacts = () => {
    return (

        <section className='grid grid-cols-1 lg:grid-cols-2  '>
            <div  className='flex gap-4 flex-col bg-cyan-700/15 lg:p-7 lg-gap-3 p-2 '>
                
                <div>
                    <Image className='m-auto rounded-full' width={100} height={100} src={yo} alt={'Josue'}></Image>
                </div>
                <div className='flex flex-col m-auto lg:p-9 gap-5'>

                    <div className='flex  flex-row '>
                        <div className='bg-cyan-800 p-1 rounded-l-xl'>
                            <Image width={40} height={20} src={'https://cdn.icon-icons.com/icons2/644/PNG/96/green_phone_icon-icons.com_59416.png'} alt={'TELEFONO'}></Image>
                        </div>

                        <div className='bg-white p-2 w-96'>
                            <p className='text-gray-400'> +1-829-844-4114</p>
                        </div>

                    </div>

                    <div className='flex  flex-row rounded-xl'>
                        <div className='bg-cyan-800 p-1 rounded-l-xl'>
                            <Image width={40} height={20} src={'https://cdn.icon-icons.com/icons2/2044/PNG/96/gmail_logo_icon_124335.png'} alt={'EMAIL'}></Image>
                        </div>

                        <div className='bg-white p-2 w-96'>
                            <p className='text-gray-400 '> josuealbertomorenoguzman@gmail.com</p>
                        </div>

                    </div>

                </div>


            </div>
            <div className='lg:p-10 p-5  bg-cyan-500' >
                <h1 className='font-bold text-center p-5 text-white'>Enviame un Email</h1>
                <form className='flex flex-col gap-4 ' action="">
                    <div className='grid grid-cols-2 gap-3'>
                        <input className='p-1 rounded-md' type="text" placeholder='Nombre' />
                        <input className='p-1 rounded-md' type="email" placeholder='Email' />
                        <input className='p-1 rounded-md' type="text" placeholder='Compañia' />
                        <input className='p-1 rounded-md' type="text" placeholder='Asunto' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <textarea className=' rounded-md h-50 p-1' placeholder='Mensaje' name="mensaje" id=""></textarea>
                        <input className='text-white rounded-md w-2/4 m-auto bg-cyan-800 border p-1 border-black' type="submit" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contacts;