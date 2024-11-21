import React from 'react'
import { Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import './App.css'
import {Environment, OrbitControls } from'@react-three/drei'
import Asian from '../public/Asian'
export default function Model() {
  return (
    <div >
      <Canvas>
        <Suspense fallback={null} >
          <ambientLight intensity={2} />
          <OrbitControls />

          <Asian />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}
