import React from 'react'
import Link from 'next/link'
import SideMenu from './SideMenu'

const Navbar = (props) => {

    return (
        <div className='bg-gray-800'>
            <header className="text-white body-font">
                <div className="container mx-auto flex flex-wrap p-5 py-4 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
                        <img src='/assets/logo.svg' width={35} alt="Logo" className='text-white' />
                        <span className="ml-3 text-xl hover:cursor-pointer">Mind Blogging</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    </nav>
                    <Link href='/login'>
                        <button className="inline-flex mx-2 items-center bg-sky-600 hover:bg-amber-500 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 transition-transform duration-200 hover:scale-105">Login
                        </button>
                    </Link>
                    <Link href='/signup'>
                        <button className="inline-flex mx-2 items-center bg-sky-600 hover:bg-amber-500 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 transition-transform duration-200 hover:scale-105">SignUp
                        </button>
                    </Link>

                    <SideMenu display={props.sideMenuVisible} />
                </div>
            </header>
        </div>
    )
}

export default Navbar