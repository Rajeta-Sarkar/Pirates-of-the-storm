/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Daniel Sturing (https://sketchfab.com/Donnielo)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/asian-pirate-ship-e36211dff0ab474b8dbab25c92544bb9
title: Asian Pirate Ship
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
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

useGLTF.preload('/scene.gltf')
