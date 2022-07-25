import React from "react"
import { motion } from "framer-motion"
import Link from 'next/link'
import Navbar from "../components/Navbar"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.8,
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
  return (
    <div>
      <Navbar sideMenuVisible='hidden' />
    <div className='bg-white'>
      <div className="flex">
        {/* 
        <video playsInline autoPlay muted loop className='video w-1/2 h-full'>
          <source src="/assets/animatedSpaceTravel.mp4" type="video/mp4" />
            <p>Your browser does not support the video tag.</p>
        </video> */}
        <motion.div className='coding w-1/2 bg-gray-500' variants={container}>
          <img src='/assets/codeHome.webp' alt='codeMan' style={{"height":"35.1rem"}} className='w-full object-cover object-left blur-sm' />
          <Link href='/codingBlog'>
          <motion.button className='p-3 bg-stone-200 w-1/4 text-violet-600 rounded-2xl absolute hover:bg-gradient-to-r hover:from-sky-500 hover:to-fuchsia-500 hover:text-white font-extrabold text-2xl backdrop-blur-lg ' style={{"top":"50%", "left":"12%"}}  variants={item}  initial="hidden" animate="show" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Coding Blog</motion.button>
          </Link>
        </motion.div>

        <motion.div className='coding w-1/2 bg-gray-500'  variants={container}>
          <img src='/assets/spaceImageHome.jpg' alt='SpaceMan' style={{"height":"35.1rem"}} className='w-full object-cover object-left blur-sm' />
          <Link href='/spaceBlog'>
          <motion.button className='p-3 bg-stone-200 w-1/4 text-violet-600 rounded-2xl absolute hover:bg-gradient-to-r hover:from-gray-800 hover:to-sky-500 hover:text-white font-extrabold text-2xl backdrop-blur-lg ' style={{"top":"50%", "right":"12%"}} variants={item} initial="hidden" animate="show" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Space Blog</motion.button>
        </Link>
        </motion.div>
      </div >

    </div>
    </div>
  )
}
