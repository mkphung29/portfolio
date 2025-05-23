import React from 'react';
import javascript from '../images/javascript.png';
import java from '../images/java.png';
import python from '../images/python.png';


const Experience = () => {

    const languages = [
        {
            id: 1,
            src: java,
            title: 'Java',
            style: "shadow-red-500"
        },
        {
            id: 2,
            src: python,
            title: 'Python',
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: "shadow-yellow-500"
        }
    ]

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800
    to-black w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4
                border-gray-500 p-2 inline">
                    Experience
                </p>
                <p className="flex justify-center py-6 text-2xl p-2``">Languages</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8
             text-center py-8 px-12 sm:px-0">

                {
                    languages.map(({id, src, title, style}) => (
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

export default Experience