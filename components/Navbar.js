import { motion } from 'framer-motion'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-gray-800'>
            <header class="text-white body-font">
                <div class="container mx-auto flex flex-wrap p-5 py-3 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
                        <img src='/assets/logo.svg' width={35} alt="Logo" className='text-white'/>
                        <span class="ml-3 text-xl hover:cursor-pointer">Mind Blogging</span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    </nav>
                    <button class="inline-flex mx-2 items-center bg-sky-600 hover:bg-amber-500 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 transition-transform duration-200 hover:scale-105">Login
                    </button>
                    <button class="inline-flex mx-2 items-center bg-sky-600 hover:bg-amber-500 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 transition-transform duration-200 hover:scale-105">SignUp
                    </button>

                </div>
            </header>
        </div>
    )
}

export default Navbar