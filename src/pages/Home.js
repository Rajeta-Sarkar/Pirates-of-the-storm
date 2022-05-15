import React, { useState } from "react"
import HeroImg from '../assets/nikolay-razuev-ship3-s3.jpg'
import FeatImg from '../assets/pirate-treasure-map-old-nautical-119141866.jpg'
import GirlSkullImg from '../assets/2028211.svg'
import { HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';

export default function Home() {

  const [showStory, setShowStory] = useState(false);

  return (
    <div className='md:mx-28 mx-4 text-white pt-10 pb-12'>

      {showStory ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative my-6 w-128">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#1c1515] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-solid rounded-t">
                  <div className="text-3xl font-base tracking-wide cursor-pointer">
                    Welcome to Pirates of the storm!
                  </div>

                  <button className="absolute right-6" onClick={() => setShowStory(false)} aria-label="button">
                    <HiX className="h-7 w-7" aria-hidden="false" />
                  </button>

                </div>

                <div className="grid grid-cols-2 w-128 px-2 py-4">
                  <div>
                    <img src={GirlSkullImg} alt="img" className="w-72 h-72" />
                  </div>

                  <div className="text-lg tracking-wide font-[200]">
                    The story
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
        </div>
      ) : null}

      <div className='md:grid md:grid-cols-2 items-center pt-10'>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>Find the soul</h1>
          <p className='text-2xl py-4 tracking-wider text-justify'>The SoulBreaker has taken your soul and have hidden it inside his pirate ship. Solve the riddles to take back the fragments of your soul to be able to take on the SoulBreaker again.</p>

          <div className="flex items-center space-x-8">

            <Link to="/findTheSoul">
              <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Find the soul</button>
            </Link>

          </div>

        </div>
        <div className="grid place-items-center py-4">
          <img src={HeroImg} alt="img" width="400" height="400" onDoubleClick={() => setShowStory(true)} />
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 pt-12 items-center'>
        <div className="grid place-items-center py-4">
          <img src={FeatImg} alt="img" width="600" height="600" />
        </div>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>Fight the SoulBreaker</h1>
          <p className='text-2xl md:text-2xl py-4 tracking-wider'>Now that you have your soul back its time to fight the SoulBreaker and release your soul form its curse with the magical spell he holds.
          </p>

          <div className="my-4">
            <Link to="/soulBreaker">
              <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Soul breaker</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
