import React from 'react';
import PP1 from '../images/pp1.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div 
    name="home" 
    className="h-screen w-full bg-gradient-to-b from-black
     via-black to-gray-800">

        <div className="max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row gap-y-0">
            <div className="flex flex-col justify-center h-full ">
                <h2 className="text-4xl sm:text-7xl mt-72 font-bold
                text-white md:ml-20 md:mt-0">
                    I'm a Software Engineer
                </h2>
                <p className="text-gray-500 py-4 max-w-md md:ml-20">
                    BA Computer Science '25 at New York University
                </p>

                <div>
                    <Link 
                    to="portfolio" 
                    smooth 
                    duration={500} className="group text-white w-fit px-6 py-3 my-2
                    flex items-center rounded-md md:ml-20 bg-gradient-to-r from-cyan-500 to-blue-500
                    cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25}
                            className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            
            <div>
                <img src={PP1} 
                alt="my profile" 
                className="rounded-2xl mt-5 mb-96 mx-auto w-2/3 md:w-full md:mb-0"/>
            </div>
        </div>
    </div>
  );
};

export default Home