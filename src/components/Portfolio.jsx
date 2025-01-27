import React from 'react';
import golfStats from '../images/golfStats.png';
import tinder from "../images/tinder.png";
import football from "../images/football.png";
import pokemon from "../images/pokemon.png";
import tiger from '../images/tiger.png';
import places from '../images/places.png';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,  
            src: golfStats,
            title: 'Birdie Train',
            description: 'Elevate your golf game with my golf stats management app—a tool designed for avid golfers seeking precision in performance tracking. This application empowers users to meticulously record and analyze their golfing adventures, providing valuable insights into their strengths and areas for improvement. Key features include course details and player statistics tracking, API integration and database connection, Google account integration, and personalized profiles.',
            demoLink:  'https://birdietrain-c9hwl.ondigitalocean.app/',
            codeLink:  'https://github.com/mkphung29/birdie-train',
        },
        {
            id: 2,  
            src: places,
            title: 'Places2Be',
            description: "Finding your place on campus can be hard. Places2e is an ios app that allows NYU students to easily discover places around campus to socialize, study, and find hidden gems. You can create your account and then explore different places around NYU's campus using the map or discover page.",
            demoLink:  'https://www.youtube.com/watch?v=xZwKXef8rUE&themeRefresh=1',
            codeLink:  'https://github.com/mkphung29/places2be'
        },
        {
            id: 3,  
            src: tinder,
            title: 'Chicken Tinder',
            description: "Decide your dinner by using Chicken Tinder! With a tinder-like user interface, users can discover restaurants in the NYC area and swipe right on their next meal. This application utilizes the Yelp Fusion API to find restaurants for users. Users are given secure account authentication, can save their matched restaurants, and leave reviews for establishments they have tried.",
            demoLink:  'https://www.youtube.com/watch?v=H_DJQWap8pg',
            codeLink:  'https://github.com/mkphung29/chicken-tinder'
        },
        {
            id: 4,  
            src: football,
            title: 'Fantasy Football Player Recommendations',
            description: "Need to dominate your fantasy football league? This Fantasy Football API utilizes Beautiful Soup to web scrape important player statistics and rank players based on their efficiency in generating Fantasy Football points. Users can access position rankings to help them decide who to draft for their teams.",
            demoLink:  'https://www.youtube.com/watch?v=XnlI7SXFZvk',
            codeLink:  'https://github.com/mkphung29/fantasy-football'
        },
        {
            id: 5,  
            src: tiger,
            title: 'The Image of Tiger Woods',
            description: "A final project for my Sports, Race, and Politics class at NYU, the Image of Tiger Woods analyzes the legendary golfer's career through racial and cultural lenses. This was my first big project to demonstrate my skills in HTML and CSS.",
            demoLink:  'https://imageoftigerwoods.netlify.app/',
            codeLink:  'https://github.com/mkphung29/tiger-woods-project'
        },
        {
            id: 6,  
            src: pokemon,
            title: 'Rock, Paper, Scissors (Pokemon Edition)',
            description: "An iteration of the classic Rock, Paper, Scissors game except you must pick the right Pokemon to win the battle!",
            demoLink:  'https://pokemon-rps.netlify.app/',
            codeLink:  'https://github.com/mkphung29/rock-paper-scissors' 
        },
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black
    to-gray-800 w-full text-white ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full">
            <div className="pb-8 mt-96">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my projects!</p>
            </div>

            <div className="grid sm:grid-cols-2 md: grid-cols-3 gap-8 px-12
                    sm:px-0 mb-auto">
            {
                portfolios.map(({ id, src, description, title, demoLink, codeLink }) => (
                    <div key = {id} className="shadow-md shadow-gray-600 rounded-lg">
                    <p className="mt-4 flex justify-center">{title}</p>
                    <img src={src} alt="golf stats project" className="rounded-md duration-200
                    hover:scale-105 h-60 w-full"/>
                    <div>
                        <p className="flex justify-center px-8 mt-7 ">{description}</p>
                    </div>
                    <div className="flex items-center justify-center">
                            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                Demo
                            </a>
                            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                Code
                            </a>
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