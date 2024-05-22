import React from 'react';
import Card from '../Card/Card';
import cedu from '@/public/Cedulancia.png'
import rick from '@/public/rickandmorthy.png'
import calc from '@/public/calculator.png'

const Proyects = () => {
    return (
        <div className='flex flex-col gap-4 p-20 w-full '>

            <Card urldemo='https://gilded-salmiakki-776346.netlify.app/' url='https://github.com/Josue-AMG/Ask_YourDate' titulo='🔍Ask YourDate🪪' descripcion='Este Proyecto integra una API con informaciones recolectadas de la JCE de la cual se extraen los datos mediante un Buscador que tiene la App Web, que cuando se pone la Cedula valida trae los datos al modelo de cedula virtual, Utilice React+Vite y TypeScript.' urlimagen={cedu}></Card>
            <Card urldemo='https://rickymorty-mu.vercel.app/' url='https://github.com/Josue-AMG/Rick_Morty_Page.git' titulo='👽 Rick Morty Page' descripcion='Este proyecto es una pagina enfocada en la serie 
          de TV (Rick and Morty), esta contiene tarjetas como esta, donde se muestran datos como, Imagen de el personaje, Nombre y un poco de informacion adicional sobre el personaje de la serie.  Este proyecto lo cree con Vite, utilice React y JavaScript Con sus Respectivos Styles de CSS, Tambien integra una API.' urlimagen={rick}></Card>
            <Card urldemo='https://calculatorjm.netlify.app/' url='https://github.com/Josue-AMG/Web_Calculator' titulo='🧮 Calculator Web' descripcion='Este proyecto  se basa en una calculadora web con JavaScript, el cual solo consta de las funcionalidades basicas de una calculadora, como  Suma, Resta, Multiplicacion y Divicion. Lo que utilice en este proyecto fue (React+Vite y JavaScrip).' urlimagen={calc}></Card>

        </div>
    );
}

export default Proyects;
