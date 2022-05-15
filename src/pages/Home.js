import React, { useState } from "react"
import HeroImg from '../assets/hero.svg'
import FeatImg from '../assets/feat.svg'
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
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:bg-gray-800 bg-secondary outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-solid rounded-t">
                  <div className="text-3xl font-base tracking-wide cursor-pointer">
                    Welcome to Pirates of the storm!
                  </div>

                  <button className="absolute right-6" onClick={() => setShowStory(false)} aria-label="button">
                    <HiX className="h-7 w-7" aria-hidden="false" />
                  </button>

                </div>

                <div className="flex flex-col space-y-2 pb-4 text-lg w-128 px-2">
                  Message
                </div>

              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
        </div>
      ) : null}

      <div className='md:grid md:grid-cols-2 items-center pt-10'>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>What it is</h1>
          <p className='text-xl py-4 tracking-wide text-justify'>Pirates of the storm is a free web fun game. In the game, the player needs to release their soul and find the way out of the game. The game is divided into two plotlines. The first: <span className="font-bold">Find the Soul</span> is the main plot where the player finds pieces of their soul by solving riddles in an interactive 3D Model of a Pirate Ship which can be viewed in Augmented Reality. The second: <span className="font-bold">Soul Breaker</span> is the plot where the players fight the Soul Breaker to find the key to release their souls. Key found can then be used to redeem your soul and set the curse free.</p>

          <div className="flex items-center space-x-8">

            <Link to="/findTheSoul">
              <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Find the soul</button>
            </Link>

            <Link to="/soulBreaker">
              <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>Soul breaker</button>
            </Link>

          </div>

        </div>
        <div className="grid place-items-center py-4">
          <img src={HeroImg} alt="img" width="400" height="400" onDoubleClick={() => setShowStory(true)} />
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 pt-12 items-center'>
        <div className="grid place-items-center py-4">
          <img src={FeatImg} alt="img" width="400" height="400" />
        </div>
        <div className=''>
          <h1 className='text-3xl md:text-6xl'>What else do we have</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'> Pirates of the storm is a web app where you can:
          </p>
          <ul className="text-xl">
            <li className="list-disc">Enjoy the retro game</li>
            <li className="list-disc">Complete levels and release your soul</li>
            <li className="list-disc">View the 3D Model in Augmented Reality</li>
            <li className="list-disc">Solve riddles with help of interactive 3D Model</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
