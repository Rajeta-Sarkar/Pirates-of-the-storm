import React, { useState, useRef } from "react";
import { HiX } from "react-icons/hi";

export default function SoulBreaker() {

  const [showCode, setShowCode] = React.useState(false);
  const ref = useRef(null);

  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);

  const getInputValue = (e) => {
    e.preventDefault();

    const userValue = ref.current.value;

    if (userValue === "Aloha") {
      setValid(true);
      setMessage("You won, now your soul is finally released!");

    }
    else if (userValue !== "Aloha") {
      setValid(false);
      setMessage("Wrong spell, keep trying");
    }
  }

  return (
    <div>
      <div className="grid place-items-center">

        <div className="py-2 text-4xl font-semibold text-white">
          Welcome to Soul Breaker
        </div>

        <p className="text-lg text-white m-3">Welcome to the second level: <span className="font-bold">Soul Breaker</span> is the plot where the players fight the Soul Breaker to find the key to release their souls. Key found can then be used to redeem your soul and set the curse free.</p>

        <iframe
          src="http://127.0.0.1:5500/src/pages/SoulBreaker/index.html"
          width="1050"
          height="600"
        ></iframe>
      </div>

      <div className="grid place-items-center py-4">
        <button className='bg-blue-600 text-white py-2 px-8 rounded-md text-xl md:text-2xl' onClick={() => setShowCode(true)}>Enter Spell</button>
      </div>

      {showCode ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative my-6 w-128">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:bg-gray-800 bg-secondary outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-solid rounded-t">
                  <div className="text-3xl font-base tracking-wide cursor-pointer text-white">
                    Enter the spell and free your soul!
                  </div>

                  <button className="absolute right-6 text-white" onClick={() => setShowCode(false)} aria-label="button">
                    <HiX className="h-7 w-7" aria-hidden="false" />
                  </button>

                </div>

                <div className="grid justify-center">
                  <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                </div>

                <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4 text-white">
                  <p className=''>You found spell to release your soul 🥳🥳!!</p>
                  <p className=''>Enter the spell below and get a surprise!!</p>

                  <div className="mt-4 outline-transparent outline grid place-items-center mx-12">
                    <input placeholder="Type the spell here" type="text" ref={ref} onChange={getInputValue} className="block w-full pb-2 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none text-center" />
                    <div className='text-center'>
                      {message && <div>
                        <p className={valid ? "text-green-500 " : "text-red-400"} >{message}</p>
                        <iframe title="YT" width="420" height="315" src="https://www.youtube.com/embed/2qm7b1GCQ74" className={valid ? "block" : "hidden"}></iframe>
                      </div>}
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
