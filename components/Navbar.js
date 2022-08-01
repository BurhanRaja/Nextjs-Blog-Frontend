import React from 'react'
import SideMenu from './SideMenu'
import AuthBtn from './AuthBtn'
import Link from "next/link"

const Navbar = () => {

    return (
        <div className='bg-gray-900'>
            <header className="text-white body-font">
                <div className="container mx-auto flex flex-wrap p-5 py-4 flex-row items-center justify-between">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-white mb-0">
                            <img src='/assets/logo.svg' width={35} alt="Logo" className='text-white' />
                            <span className="ml-3 text-xl hover:cursor-pointer">Mind Blogging</span>
                        </a>
                    </Link>

                    <div>
                        <AuthBtn />
                    </div>
                    <SideMenu />
                </div>
            </header>
        </div>
    )
}

export default Navbar