import React from 'react'
import { Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import {Environment, OrbitControls } from'@react-three/drei'
import Desktop from '../../public/Desktop'
import "../index.css"
export default function Model() {
  return (
    < >
      <Canvas>
        <Suspense fallback={null} >
          <ambientLight intensity={1.5} />
          <OrbitControls />
          <Desktop  />
        </Suspense>
        <Environment preset="apartment" />
      </Canvas>
    </>
  )
}
