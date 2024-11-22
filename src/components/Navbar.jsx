import React from 'react'

export default function Navbar() {
  return (
    <div className=' mt-4 text-slate-300  bg-black'>
      <ul className='flex justify-around  items-center '>
        <li className='text-lg font-semibold underline' ><a href="">Home</a></li>
        <li className='text-lg font-semibold underline' ><a href="">About</a></li>
        <li className='text-lg font-semibold underline' ><a href="">Skils</a></li>
        <li className='text-lg font-semibold underline' ><a href="">Projects</a></li>
      </ul>
    </div>
  )
}
