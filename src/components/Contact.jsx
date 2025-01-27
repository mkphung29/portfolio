import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black
    to-gray-800 p-4 text-white">
        <div className="flex flex-col p-4 justify-center
        max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500">Contact</p>
                <p className="py-6">Here are some more links!</p>
                <p className="py-6"> <a href="https://www.linkedin.com/in/madison-phung-1a2919228/">LinkedIn</a></p>
                <p className="py-6">Email: madisonphung29@gmail.com </p>
                <p className="py-6"><a href="https://gonyuathletics.com/sports/womens-golf/roster/madison-phung/14727">NYU Golf</a></p>
            </div>
        </div>
    </div>
  )
}

export default Contact