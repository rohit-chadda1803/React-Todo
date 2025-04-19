import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <>
    <Navbar/>

     <div className="container mx-[5%] my-5 rounded-xl p-5 bg-violet-100 min-h-[70vh] w-[90%] rounded-b-md ">
        
        <div className="addTodo">
          <h2 className="text-lg font-bold ">Add Todo</h2>
          <input type="text" className='bg-white border-0 p-0.5' placeholder='Enter the task' />
          <button className='bg-blue-500 p-3 py-0.5 m-6 font-semibold rounded-md hover:bg-violet-800 hover:text-white '>Add</button>
        </div>

        <h2 className='text-lg font-bold '>Your Todos</h2>

        <div className="todos">
          <div className="todo flex">
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

            <div className="buttons flex-row"> 
                <button>Edit</button>
                <button>Delete</button>
            </div>
          </div>
        </div>
        <div className="todos"></div>
     </div>
      
    </>
  )
}

export default App
