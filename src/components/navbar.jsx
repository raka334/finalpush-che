import React from 'react'

const Navbar = () => {
  return (
    <div className='flex m-6 justify-center '> 
    <div className='flex m-6 p-1 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:bg-base2 duration-200 rounded-md'>Home</div>
    <div className='flex m-6 p-1 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:bg-base2 duration-200 rounded-md'>Ecosystem</div>
    <div className='flex m-6 p-1 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:bg-base2 duration-200 rounded-md'>Future</div>
    <div className='flex m-6 p-1 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:bg-base2 duration-200 rounded-md'>About Me</div>
    </div>
  )
}

export default Navbar