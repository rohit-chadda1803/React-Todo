import { useState , useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'

import { v4 as uuidv4 } from 'uuid';


//const { v4: uuidv4 } = require('uuid'); // for common js





function App() {

 

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    let todoString = localStorage.getItem("todos") 
    if(todoString){// agr null nhi h  , iske bina null parse krne pr error. 
       let todos = JSON.parse(localStorage.getItem("todos"))
       // parse to make data javascript object . 
       setTodos(todos)
    }
    
  } , [])


  const saveToLS = (params) => {
    localStorage.setItem("todos" ,JSON.stringify(todos) )
  }
  

  const handleEdit = (e,id) => {
    let t = todos.filter(i=> i.id==id)
    setTodo(t[0].todo ) 

    // delete currold  todo  , as new edit will be added.
    let newTodos = todos.filter(item=>{
      return item.id!==id ; 
    })

     
    setTodos(newTodos) ; 
    
    saveToLS()
  }

  const handleDelete = (e,id) => {
    console.log( `the id is is : ${id}`) ;

    // 1st find index & then uda dunga.// filter usse krke dono kaam ek saath . 
      
    // let index= todos.findIndex(item=>{
    //   return item.id===id ; 
    // })
    // console.log(index)


    let newTodos = todos.filter(item=>{
      return item.id!==id ; 
    })

    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4() , todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
    saveToLS()
   
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }



  const handleCheckbox = (e) => {
    console.log(e  ,e.target)
    let id = e.target.name ; // to get id 

    console.log(`the id is : ${id} `) ; 

    let index = todos.findIndex(item=>{
      return item.id==id ; 
    })
    
    console.log(index) ; 
    let newTodos =[...todos] ; // new array copy of todos , with diff refrence so re-rendring occur for change in iscompleted of todo in newTodos   ... , without it newtodos =[todos] / todo -->same refrence . 
    // look in details.md ---> 6. newTodos=[...Todos] // clear explanation . 
    newTodos[index].isCompleted = !(newTodos[index].isCompleted) ; 
    setTodos(newTodos) ; 
    console.log(newTodos)

    saveToLS()

  }
 
  




  return (
    <>
      <Navbar />

      <div className="container mx-[5%] my-5 rounded-xl p-5 bg-violet-100 min-h-[70vh] w-[90%] rounded-b-md ">

        <div className="addTodo">
          <h2 className="text-lg font-bold">Add Todo</h2>
          <input type="text" onChange={handleChange} value={todo} className='bg-white border-0 p-0.5 w-1/2' placeholder='Enter the task' />
          <button onClick={handleAdd} className='bg-violet-700 p-3 py-0.5 m-6 font-semibold rounded-md hover:bg-violet-900   text-white'>Add</button>
        </div>

        <h2 className='text-lg font-bold '>Your Todos</h2>



        <div className="todos">
          {todos.length==0 &&  <div className = "m-5 text-2xl italic">No todos to display</div> }
          {todos.map((item) => {
            return  (
            <div key = {item.id} className="flex justify-between w-1/4 my-3 todo" >    

              <div className='flex gap-5'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" value = {item.isCompleted}  id="" />

                <div className={` ${item.isCompleted ? "line-through" : ""}`} > {item.todo}</div>
              </div>
              
              <div className="buttons flex h-full">
                <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-violet-700 p-3 py-0.5 mx-2 font-semibold rounded-md hover:bg-violet-900 text-white '>Edit</button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-700 p-3 py-0.5 mx-2 font-semibold rounded-md hover:bg-violet-900 text-white '>Delete</button>
              </div>
            </div>
            ) 
          })}
        </div>
      </div>

    </>
  )
}

export default App
