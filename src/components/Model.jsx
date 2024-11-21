import React from 'react'
import { Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import {Environment, OrbitControls } from'@react-three/drei'
import Scene from '../../public/Scene'
export default function Model() {
  return (
    <div >
      <Canvas>
        <Suspense fallback={null} >
          <ambientLight intensity={2} />
          <OrbitControls />

          <Scene />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}
