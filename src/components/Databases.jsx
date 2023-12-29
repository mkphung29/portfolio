import React from 'react';
import mysql from '../images/mysql.png';
import mongodb from '../images/mongodb.png';
import jupyter from '../images/jupyter.png';

const Databases = () => {

    const databases = [
        {
            id: 1,
            src: mysql,
            title: 'MySQL',
            style: "shadow-blue-500"
        },
        {
            id: 2,
            src: mongodb,
            title: 'MongoDB',
            style: "shadow-green-400"
        },
        {
            id: 3,
            src: jupyter,
            title: 'Jupyter',
            style: "shadow-orange-300"
        }
    ]

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800
    to-black w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-1/2 text-white">
            <div>
                <p className="flex justify-center py-6 text-2xl p-2">Databases</p>
            </div>
            
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8
             text-center py-8 px-12 sm:px-0">

                {
                    databases.map(({id, src, title, style}) => (
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

export default Databases