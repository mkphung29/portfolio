import React from 'react';
import html from '../images/html.png';
import css from '../images/css.png';
import reactImage from '../images/react.png';
import tailwind from '../images/tailwind.png';
import nextjs from '../images/nextJS.png';
import expressjs from '../images/expressJS.png';
import nodejs from '../images/nodeJS.png';
import bootstrap from '../images/bootstrap.png';
import git from '../images/git.png';


const Technologies = () => {
    
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: reactImage,
            title: 'React Native',
            style: "shadow-blue-600"
        },
        {
            id: 4,
            src: tailwind,
            title: 'Tailwind',
            style: "shadow-sky-400"
        },
        {
            id: 5,
            src: nodejs,
            title: 'NodeJS',
            style: "shadow-green-500"
        },
        {
            id: 6,
            src: nextjs,
            title: 'NextJS',
            style: "shadow-white"
        },
        {
            id: 7,
            src: expressjs,
            title: 'ExpressJS',
            style: "shadow-white"
        },
        {
            id: 8,
            src: bootstrap,
            title: 'Bootstrap',
            style: "shadow-purple-400"
        },
        {
            id: 9,
            src: git,
            title: 'Git',
            style: "shadow-orange-600"
        }
    ]

  return (
    <div name="experience" className="bg-gradient-to-b from-black
    to-gray-800 w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-3/4 text-white">
            <div>
                <p className="flex justify-center py-6 text-2xl p-2">Technologies</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8
             text-center py-8 px-12 sm:px-0">

                {
                    techs.map(({id, src, title, style}) => (
                    <div 
                    key={id} 
                    className={`shadow-md hover:scale-105 duration-50 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className="w-20 mx-auto"/>
                        <p className="mt-4">{title}</p>
                    </div>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Technologies