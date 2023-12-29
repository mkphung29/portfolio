import React from 'react';
/* 
import golfStats from "../images/INSERTIMAGE"
import tinder from "../images/INSERTIMAGE"
import football from "../images/INSERTIMAGE"
import tiger from "../images/INSERTIMAGE"
import pokemon from "../images/INSERTIMAGE"
import diskUsage from "../images/INSERTIMAGE"

*/

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,  
            /*src: golfStats*/
            /*href:  ADD LINK TO DEMO */
            /*href:  ADD LINK TO CODE */
        },
        {
            id: 2,  
            /*src: tinder*/
            /*href:  ADD LINK TO DEMO */
            /*href:  ADD LINK TO CODE */
        },
        {
            id: 3,  
            /*src: football*/
            /*href:  ADD LINK TO DEMO */
            /*href:  ADD LINK TO CODE */
        },
        {
            id: 4,  
            /*src: tiger*/
            /*href:  ADD LINK TO DEMO */
            /*href:  ADD LINK TO CODE */
        },
        {
            id: 5,  
            /*src: pokemon*/
            /*href:  ADD LINK TO DEMO */
            /*href:  ADD LINK TO CODE */
        },
        {
            id: 6,  
            /*src: diskUsage*/
            /*href:  ADD LINK TO DEMO */
            /*href:  ADD LINK TO CODE */
        }
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my projects!</p>
            </div>

            <div className="grid sm:grid-cols-2 md: grid-cols-3 gap-8 px-12
                    sm:px-0">
            {
                portfolios.map(({id}) => (
                    <div key = {id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src="" alt="" className="rounded-md duration-200
                    hover:scale-105"/>
                    <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            Demo
                        </button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            Code
                         </button>
                    </div>
                    </div>
                ))
            }
            </div>

        </div>

    </div>
  )
}

export default Portfolio