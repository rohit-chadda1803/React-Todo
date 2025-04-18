import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <>
    <Navbar/>

     <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100">
        <div className='text-xl font-bold '>your Todos</div>

        <div className="todos"></div>
        <div className="todos"></div>
     </div>
      
    </>
  )
}

export default App
