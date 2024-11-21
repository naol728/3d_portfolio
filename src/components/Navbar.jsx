import React from 'react'

export default function Navbar() {
  return (
    <div className='fixed w-full h-16 top-0 right-0 text-slate-100  bg-slate-800'>
      <ul className='flex justify-evenly  h-full items-center text-center'>
        <li className='text-lg font-semibold ' ><a href="">Home</a></li>
        <li className='text-lg font-semibold ' ><a href="">About</a></li>
        <li className='text-lg font-semibold ' ><a href="">Skils</a></li>
        <li className='text-lg font-semibold ' ><a href="">Projects</a></li>
      </ul>
    </div>
  )
}