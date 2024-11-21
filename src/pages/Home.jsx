import React from 'react'
import Model from '../components/Model'
import "../index.css"
export default function Home() {
  return (
    <div className='flex justify-around h-[95dvh] bg-slate-600'>
       <div className='text-slate-800 flex flex-col h-full justify-center m-5'>
        <h1 className='text-5xl font-extrabold text-fuchsia-500 shadow-lg'> Hello I'm Naol </h1>
        <p className='text-wrap w-96 mt-20 font-bold  text-2xl text-slate-300 shadow-xl' > 
          Front-End Web Developer & Software Engineering Student.
           Creating engaging and user-friendly web experiences.</p>
       </div>

       <div className='w-[50%] bg-slate-600 ' >
        <Model />
       </div>
    </div>
  )
}
