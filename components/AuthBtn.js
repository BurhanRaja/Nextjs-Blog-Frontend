import React from 'react'
import Link from 'next/link'

const AuthBtn = (props) => {
    return (
        <div style={{"margin":`${props.margin}`}} className="hidden">
            <Link href='/login'>
                <button className="login-btn inline-flex mx-2items-center bg-sky-600 hover:bg-amber-500 border-0 py-1 px-3 focus:outline-none rounded text-base mt-0 transition-transform duration-200 hover:scale-105 text-white" style={{"display":`${props.display}`}}>Login</button>
            </Link>
            <Link href='/signup'>
                <button className="signup-btn inline-flex mx-2 items-center bg-sky-600 hover:bg-amber-500 border-0 py-1 px-3 focus:outline-none rounded text-base mt-0 transition-transform duration-200 hover:scale-105 text-white" style={{"display":`${props.display}`}}>SignUp</button>
            </Link>
        </div>
    )
}

export default AuthBtn