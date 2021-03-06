import React, { useState, useRef } from "react";
import { HiX } from "react-icons/hi";
import GirlSkullImg from '../assets/2028211.svg'

export default function SoulBreaker() {

  const [showSpell, setShowSpell] = React.useState(false);
  const ref = useRef(null);

  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);

  const getInputValue = (e) => {
    e.preventDefault();

    const userValue = ref.current.value;

    if (userValue === "Aloha") {
      setValid(true);
      setMessage("You have finally released your soul!");

    }
    else if (userValue !== "Aloha") {
      setValid(false);
      setMessage("Wrong spell!");
    }
  }

  return (
    <div>
      <div className="grid place-items-center">

        <div className="py-2 text-4xl font-semibold text-white">
          Soul Breaker
        </div>

        {/* <p className="text-lg text-white m-3">Welcome to the second level: <span className="font-bold">Soul Breaker</span> is the plot where the players fight the Soul Breaker to find the key to release their souls. Key found can then be used to redeem your soul and set the curse free.</p> */}

        <iframe
          src="http://127.0.0.1:5500/src/pages/SoulBreaker/index.html"
          width="1050"
          height="600"
          title="game"
        ></iframe>
      </div>

      <div className="grid place-items-center py-4">
        <button className='bg-secondary text-white py-2 px-8 rounded-md text-xl md:text-2xl' onClick={() => setShowSpell(true)}>Enter Spell</button>
      </div>

      {showSpell ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative mt-6 mb-2 w-128">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#1c1515] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-solid rounded-t">
                  <div className="text-3xl font-base tracking-wide text-white ml-44">
                    Soul Breaker defeated
                  </div>

                  <button className="absolute right-6 text-white" onClick={() => setShowSpell(false)} aria-label="button">
                    <HiX className="h-7 w-7" aria-hidden="false" />
                  </button>

                </div>

                <div className="grid justify-center">
                  <div className="inline-flex w-64 h-1 bg-tertiary rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 px-4 py-8">

                  <div>
                    <img src={GirlSkullImg} alt="img" className="w-72 h-72" />
                  </div>

                  <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4 text-white">
                    <p className='tracking-wider'>Emby defeted the soul breaker and found the spell </p>
                    <p className='tracking-wider'>Enter the spell to release the soul!!</p>

                    <div className="mt-4 outline-transparent outline grid place-items-center mx-12 tracking-[0.08rem]">
                      <input placeholder="Type the spell here" type="text" ref={ref} onChange={getInputValue} className="block w-full pb-2 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none text-center" />
                      <div className='text-center'>
                        {message && <div>
                          <p className={valid ? "text-green-500 " : "text-red-400"} >{message}</p>
                          <a href="/Captain_Jack_Sparrow_Run.mp4" target="_blank" className={valid ? "block" : "hidden"} >
                            <button className='bg-tertiary my-2 text-white py-2 px-8 rounded-md ml-2'>
                              Run
                            </button>
                          </a>
                          {/* <iframe title="YT" width="420" height="315" src="https://www.youtube.com/embed/2qm7b1GCQ74" className={valid ? "block" : "hidden"}></iframe> */}
                        </div>}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
        </div>
      ) : null}

    </div>
  );
}
