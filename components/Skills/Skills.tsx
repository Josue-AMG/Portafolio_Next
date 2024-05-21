import React from 'react';
import Image from 'next/image';
import { Tooltip } from '@nextui-org/react';

const Skills = () => {
    return (
        <div className='grid  items-center grid-cols-3 p-10 m-auto gap-4 lg:grid-cols-4  w-50 '>

            <Tooltip className='text-white bg-orange-600 rounded-full' content="HTML">
                <Image className='duration-300 inline-block hover:scale-125' width={100} height={100} src="https://cdn-icons-png.flaticon.com/128/732/732212.png" alt="" />

            </Tooltip >
            <Tooltip className='text-white bg-blue-600 rounded-full' content="TypeScript">
                <Image className='duration-300 inline-block hover:scale-125' width={100} height={100} src="https://cdn-icons-png.flaticon.com/128/5968/5968381.png" alt="" />

            </Tooltip>
            <Tooltip className='text-white bg-cyan-400 rounded-full' content="ReactJS">
                <Image className='duration-300 inline-block hover:scale-125' width={100} height={100} src="https://cdn.icon-icons.com/icons2/2699/PNG/96/reactjs_logo_icon_168875.png" alt="" />

            </Tooltip>
            <Tooltip className='text-black bg-yellow-400 rounded-full' content="JavaScript">
                <Image className='duration-300 inline-block hover:scale-125' width={100} height={100} src="https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_js_official_icon_130509.png" alt="" />

            </Tooltip>
            <Tooltip className='text-white bg-blue-400 rounded-full' content="Tailwind">
                <Image className='duration-300 inline-block hover:scale-125' width={100} height={100} src="https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_tailwind_icon_130128.png" alt="" />

            </Tooltip>
            <Tooltip className='text-white bg-orange-600 rounded-full' content="Git">
                <Image className='duration-300 inline-block hover:scale-125' width={100} height={100} src="https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_git_icon_130581.png" alt="" />

            </Tooltip>
            <Tooltip className='text-white bg-black border rounded-full' content="NextJS">
                <Image className='duration-300 inline-block hover:scale-125 bg-white border rounded-full' width={100} height={100} src="https://cdn.icon-icons.com/icons2/2148/PNG/96/nextjs_icon_132160.png" alt="" />

            </Tooltip>
            <Tooltip className='text-white bg-blue-500 rounded-full' content="CSS">
                <Image className='duration-300 inline-block hover:scale-125' width={100} height={100} src="https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_css_icon_130661.png" alt="" />

            </Tooltip>
            <Tooltip className='text-white bg-purple-800 rounded-full' content="Bootstrap">
                <Image className='duration-300 inline-block hover:scale-125' width={100} height={100} src="https://cdn.icon-icons.com/icons2/2415/PNG/96/bootstrap_plain_logo_icon_146619.png" alt="" />

            </Tooltip>


        </div>
    );
}

export default Skills;
