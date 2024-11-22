import React from 'react'
import Model from '../components/Model'
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import "../index.css"
export default function Home() {
  const words = [
    {
      text: "hello",
    },
    {
      text: "i'm",
    },
    {
      text: "Naol ",
      className: "text-blue-500 ml-1 dark:text-blue-500",
    },
   
  ];
  return (
    <div className='h-[90vh] flex justify-around items-center  ' >

     <div className='flex w-[50%] p-10 justify-center items-center'>
      <div>
        <h1><TypewriterEffectSmooth words={words} /></h1>
       
        <p className='text-xl mt-6 font-bold text-slate-300'> a front-end web developer and software engineering student passionate about building innovative and responsive web applications. Let's connect!</p>
      </div>
     </div>


      <div className='size-[50%] h-full flex justify-center items-center  '>
      <Model />
      </div>
    
    </div>
  )
}
