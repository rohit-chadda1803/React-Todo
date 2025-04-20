import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

import { v4 as uuidv4 } from 'uuid';


//const { v4: uuidv4 } = require('uuid'); // for common js





function App() {

  


  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = () => {

  }

  const handleDelete = () => {

  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4() , todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
  }

  const handleChange = (e) => {
    setTodo(e.target.value)

  }

  const handleCheckbox = (e) => {
    let id = e.target.name  // to get id 

    todos.filter((item)=>{
      if(item.id==id){
        itemm.isCompleted = !(item.isCompleted)
      }
    })
  }
  
  




  return (
    <>
      <Navbar />

      <div className="container mx-[5%] my-5 rounded-xl p-5 bg-violet-100 min-h-[70vh] w-[90%] rounded-b-md ">

        <div className="addTodo">
          <h2 className="text-lg font-bold ">Add Todo</h2>
          <input type="text" onChange={handleChange} value={todo} className='bg-white border-0 p-0.5 w-1/2' placeholder='Enter the task' />
          <button onClick={handleAdd} className='bg-violet-700 p-3 py-0.5 m-6 font-semibold rounded-md hover:bg-violet-900   text-white'>Add</button>
        </div>

        <h2 className='text-lg font-bold '>Your Todos</h2>



        <div className="todos">
          {todos.map((item) => {
            return  (
            <div key = {todos.length} className="todo flex justify-between w-1/3 my-3" >    

              <input name={todo.id} onChange={handleCheckbox} type="checkbox" value = {todo.isCompleted}  id="" />
              
              <div className={`text-lg font-bold font-serif ${item.isCompleted ? "line-through" : ""}`} > {item.todo}</div>
              
              <div className="buttons">
                <button onClick={handleEdit} className='bg-violet-700 p-3 py-0.5 mx-2 font-semibold rounded-md hover:bg-violet-900 text-white '>Edit</button>
                <button onClick={handleDelete} className='bg-violet-700 p-3 py-0.5 mx-2 font-semibold rounded-md hover:bg-violet-900 text-white '>Delete</button>
              </div>
            </div>
            )
          })}
        </div>


        <div className="todos"></div>
      </div>

    </>
  )
}

export default App
