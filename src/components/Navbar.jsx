import React from 'react'
import Airbnb from '../assets/airbnb-logo.png'

function Navbar() {
    return (
        <nav className='flex justify-between items-center px-10 py-5 shadow-lg rounded-lg sm:px-6 sm:justify-center'>
            <img src={Airbnb} alt="airbnb-logo" className="w-28 object-cover" />
            <div className="flex gap-4 md:text-sm sm:hidden">
                <button className='text-rose-500 rounded-md px-5 py-1.5 border-2 border-rose-500 font-medium hover:text-white hover:bg-rose-500'>Signup</button>
                <button className='text-white bg-rose-500 rounded-md px-6 py-1.5 border-2 border-rose-500 font-medium hover:text-rose-500 hover:bg-white' ṭ>Login</button>
            </div>
        </nav>
    )
}

export default Navbar