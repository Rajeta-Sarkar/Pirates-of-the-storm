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

  return (
    <div>{snap.current}</div>
    // 18_-_Default == ship base
    // 02_-_Default == mast
    // 05_-_Default == cannon
    // 03_-_Default == stering wheel
  )
}

export default function FindTheSoul() {
  return (
    <div>

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

      <div className="w-full h-screen outline-none cursor-grab lg:block mx-16">
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

      <div>
        <Details />
      </div>

    </div>
  )
}
