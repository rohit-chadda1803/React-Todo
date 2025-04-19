import React from 'react'

const Navba = () => {
  return (
    <nav className="flex justify-between bg-indigo-950  text-white py-4 rounded-sm">
      <div className="logo ">
        <span><img src="./planning.png" alt="" width="5%"  className='inline ml-3'/></span>
        <span className="font-bold text-xl mx-8">myTask</span>
      </div>
      <ul className="flex gap-9 mx-9 ">
        <li className="cursor-pointer hover:font-bold transition-all duration-50">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all duration-50">Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navba
