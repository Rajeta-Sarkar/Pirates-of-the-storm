import React, { Suspense, useRef, useState } from "react"
import { HiX } from "react-icons/hi";
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls, useAnimations } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
  current: null,
})

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/asian_pirate_ship/scene.gltf')
  const [hovered, set] = useState(null)
  console.log(hovered)
  return (
    <group ref={group} {...props} dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.04}>
          <group name="420e744efb7a47a18fec97b04fedd257fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="From_the_Shallows" position={[-4.59, 0, -0.55]}>
                  <group name="Object_5" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh name="From_the_Shallows_03_-_Default_0" geometry={nodes['From_the_Shallows_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
                    <mesh name="From_the_Shallows_09_-_Default_0" geometry={nodes['From_the_Shallows_09_-_Default_0'].geometry} material={materials['09_-_Default']} />
                  </group>
                  <group name="Guns">
                    <group name="Object_9" rotation={[-Math.PI / 2, 0, 0]}>
                      <mesh name="Guns_05_-_Default_0" geometry={nodes['Guns_05_-_Default_0'].geometry} material={materials['05_-_Default']} />
                    </group>
                  </group>
                  <group name="Sail_1" position={[0, 0, -0.53]}>
                    <group name="Object_12" position={[1.42, 22.25, 20.14]} rotation={[-Math.PI / 2, 0, 0]}>
                      <mesh name="0" geometry={nodes['0'].geometry} material={materials['02_-_Default']} morphTargetDictionary={nodes['0'].morphTargetDictionary} morphTargetInfluences={nodes['0'].morphTargetInfluences} />
                    </group>
                  </group>
                  <group name="Sail_2">
                    <group name="Object_15" position={[1.42, 22.25, 20.14]} rotation={[-Math.PI / 2, 0, 0]}>
                      <mesh name="1" geometry={nodes['1'].geometry} material={materials['02_-_Default']} morphTargetDictionary={nodes['1'].morphTargetDictionary} morphTargetInfluences={nodes['1'].morphTargetInfluences} />
                    </group>
                  </group>
                  <group name="Temp_water" position={[0, 0.56, -1.61]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.87, 2.87, 1.16]}>
                    <mesh name="Temp_water_18_-_Default_0" geometry={nodes['Temp_water_18_-_Default_0'].geometry} material={materials['18_-_Default']} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

function Details() {

  const snap = useSnapshot(state)

  // For Quest1

  const refQuest1 = useRef(null);
  const [messageQuest1, setMessageQuest1] = useState("");
  const [validQuest1, setValidQuest1] = useState(false);

  const getInputValueQuest1 = (e) => {
    e.preventDefault();
    const userValueQuest1 = refQuest1.current.value;
    if (userValueQuest1 === "Piano") {
      setValidQuest1(true);
      setMessageQuest1("You got the right answer!");
    } else {
      setValidQuest1(false);
      setMessageQuest1("Wrong answer! Try again!");
    }
  }

  // For Quest2

  const refQuest2 = useRef(null);
  const [messageQuest2, setMessageQuest2] = useState("");
  const [validQuest2, setValidQuest2] = useState(false);

  const getInputValueQuest2 = (e) => {
    e.preventDefault();
    const userValueQuest2 = refQuest2.current.value;
    if (userValueQuest2 === "Piano") {
      setValidQuest2(true);
      setMessageQuest2("You got the right answer!");
    } else {
      setValidQuest2(false);
      setMessageQuest2("Wrong answer! Try again!");
    }
  }

  // For Quest3

  const refQuest3 = useRef(null);
  const [messageQuest3, setMessageQuest3] = useState("");
  const [validQuest3, setValidQuest3] = useState(false);

  const getInputValueQuest3 = (e) => {
    e.preventDefault();
    const userValueQuest3 = refQuest3.current.value;
    if (userValueQuest3 === "Piano") {
      setValidQuest3(true);
      setMessageQuest3("You got the right answer!");
    } else {
      setValidQuest3(false);
      setMessageQuest3("Wrong answer! Try again!");
    }
  }

  // For Quest 4

  const refQuest4 = useRef(null);
  const [messageQuest4, setMessageQuest4] = useState("");
  const [validQuest4, setValidQuest4] = useState(false);

  const getInputValueQuest4 = (e) => {
    e.preventDefault();
    const userValueQuest4 = refQuest4.current.value;
    if (userValueQuest4 === "Stairs") {
      setValidQuest4(true);
      setMessageQuest4("You got the right answer!");
    } else {
      setValidQuest4(false);
      setMessageQuest4("Wrong answer! Try again!");
    }
  }
  // Mast
  if (snap.current === "02_-_Default") {
    return (
      <div className="px-2 py-1 bg-white rounded-lg text-xl text-center cursor-pointer">
        You got the 1<sup>st</sup> right answer!!<br />
        Hint for next object: I control the ship to its destination, in the right hinds I challange the currents.
      </div>
    )
  }
  // Ship staring wheel: Helm
  else if (snap.current === "03_-_Default") {
    return (
      <div className="px-2 py-1 bg-white rounded-lg text-xl text-center cursor-pointer">
        You got the 2<sup>nd</sup> right answer!!<br />
        Hint for next object: Challange me and you you will say shiver me tibmers.
      </div>
    )
  }
  // Cannon
  else if (snap.current === "05_-_Default") {
    return (
      <div className="px-2 py-1 bg-white rounded-lg text-xl text-center cursor-pointer">
        You got the 3<sup>rd</sup> right answer!!<br />
        Hint for next object: I carry your mighty pirates, challange me once and I will show you the fury of my cannons.
      </div>
    )
  }
  // Ship base
  else if (snap.current === "18_-_Default") {
    return (
      <div className="px-2 py-1 bg-white rounded-lg text-xl text-center cursor-pointer">
        You got the all answer!!<br />
        Now you have find your soul, challange the SoulBreaker to release it.
      </div>
    )
  }
  else {
    <div className="hidden">

    </div>
  }

  // return (
  //   <div>{snap.current}</div>
  //   // 02_-_Default == mast
  //   // 03_-_Default == stering wheel
  //   // 05_-_Default == cannon
  //   // 18_-_Default == ship base
  // )
}

export default function FindTheSoul() {
  return (
    <div>

      <div className="grid place-items-center">

        <div className="py-2 text-4xl font-semibold text-white">
          Welcome to Find the Soul
        </div>

        <p className="text-lg text-white m-3">Welcome to the first level: <span className="font-bold">Find the Soul</span> is the main plot where the player finds pieces of their soul by solving riddles in an interactive 3D Model of a Pirate Ship which can be viewed in Augmented Reality.</p>

        <p className="text-lg text-white m-3">Hint: I am a tall spar, or arrangement of spars, erected more or less vertically on the centre-line of a ship or boat. What I am?</p>

      </div>

      <div className="group absolute w-48 top-24 left-3 z-100">
        <h1 className="bg-white px-2 py-1 rounded-lg text-xl text-center cursor-pointer">
          View in AR
        </h1>
        <div className="mt-2 hover-target grid place-items-center invisible group-hover:visible bg-white rounded-lg w-96">
          <p className="self-center mx-8 text-lg tracking-wide text-justify pt-2">To view the 3D model in AR, scan the QR code or click on the button below.</p>

          <div className="grid justify-center grid-cols-1 gap-2 mx-8 md:grid-cols-2">
            <img className="flex p-2 text-6xl rounded-xl h-40 w-40" src="https://storage.echo3d.co/soft-mud-0078/e6d55758-0de9-4c93-bf9d-a40a394e4e7d.png" alt="QR Code" />
            <a href="https://go.echo3d.co/uwjg" target="_blank" rel="noreferrer">
              <button className="px-8 ml-8 text-lg font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500  hover:shadow-lg">View in AR</button>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-screen outline-none cursor-grab lg:block px-16">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [10, 6, 3], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Model scale={3.5} />
            <Environment preset="city" />
            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>

      <div className="absolute top-64 right-3 w-128">
        <Details />
      </div>

    </div>
  )
}
