import React from 'react'
import { useState } from 'react'
import SampleLogo from './img/logo-sample.png'

export default function Navbar() {

    const [hidden, setHidden] = useState('hidden')

    const handleHidden = () => {
        if (hidden === 'hidden') {
            setHidden('')
        } else if (hidden === '') {
            setHidden('hidden')
        }
    }

  return (
    <nav className='bg-white shadow-lg'>
        {/* desktop view */}
        <div className='max-w-6xl mx-auto px-4'>
            <div className='flex justify-between'>
                {/* logo */}
                <div className='flex space-x-7'>
                    <div>
                        <a href="/" className='py-4 px-2'><img src={SampleLogo} alt="alt" className='h-8'/></a>
                    </div>
                </div>
                {/* primary menu */}
                <div className='hidden md:flex items-center space-x-1'>
                    <a href="/" className='py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold'>Home</a>
                    <a href="/" className='py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold'>Services</a>
                    <a href="/" className='py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold'>About</a>
                    <a href="/" className='py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold'>Contact Us</a>
                </div>
                {/* secondary menu */}
                <div className='hidden md:flex items-center space-x-3 '>
                    <a href="/" className='py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300'>Log In</a>
                    <a href="/" className='py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300'>Sign Up</a>
                </div>
                {/* mobile button */}
                <div class="md:hidden flex items-center">
                    <button class="outline-none mobile-menu-button" onClick={handleHidden}>
                        <svg
                            class="w-6 h-6 text-gray-500"
                            x-show="!showMenu"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        {/* mobile view */}
        {/* <div class="hidden mobile-menu"> */}
        <div class={hidden + ' mobile-menu'}>
            <ul class="">
                <li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
                <li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
                <li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
                <li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
            </ul>
        </div>

    </nav>
  )
}
