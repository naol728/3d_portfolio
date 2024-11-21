import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './pages/Applayout'
import Home from './pages/Home'

const router= createBrowserRouter([
{
  element:<Applayout />,
  children:[
    {
      path:"/",
      element:<Home />
    }
  ]
}

])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
