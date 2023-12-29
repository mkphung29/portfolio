import React from 'react';
import PP2 from '../images/pp2.jpeg';

const About = () => {
  return (
    <div name="about me" className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full">
            <div className="pb-8 mt-20">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500"> About Me</p>
            </div>

            <p className="text-xl mt-10">
                Hi there! My name is Madison Phung and I'm currently a 
                student at New York University studying Computer Science. 
                As an NYU Gallatin Student, my individualized study program
                allows me to harness my technical skills in programming languages,
                technologies, and full-stack development while also taking courses that
                help expand my knowledge in designing technological systems that are 
                accessible and unbiased for all. 
            </p>

            <br />

            <p className="text-xl">
                Aside from my studies, I love to play golf, aspire to travel the world, 
                and eat all the amazing food New York has to offer. 
            </p>

            <div>
                <img src={PP2} 
                alt="my profile" 
                className="rounded-2xl py-6 mb-60 mx-auto w-1/2 h-30 md:w-1/3 md:h-30"/>
            </div>

        </div>

    </div>
  )
}

export default About