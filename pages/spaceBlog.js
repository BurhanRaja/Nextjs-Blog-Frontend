import React, { useState, useEffect, Fragment } from 'react'
import LandingPage from '../components/LandingPage'
import LoadingScreen from '../components/LoadingScreen'
import Navbar from '../components/Navbar'

const spaceBlog = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    const title = "Let's Fly to Space and Explore Universe"
    const video = "animatedSpaceTravel.mp4"
    const description = "In this blog there will be blogs about Space, Universe, Astronomy and many more topics related to Space. The journey for exploring Universe will be very knowledgeable and fun. I have tried to keep all topics as simple as possible to understand."
    const slide = [1, 2, 3, 4, 5, 6]

    return (
        <div>
            {!loading ? (
                <Fragment>
                    <Navbar />
                    <div className='bg-gray-800'>
                        <LandingPage title={title} video={video} description={description} />
                        <section className="text-gray-600 body-font">
                            <div className='text-center'>
                                <h2 className='text-3xl text-white font-semibold'>Space Blogs</h2>
                            </div>
                            <div className="container px-5 py-16 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    {slide.map((item) => {
                                        return <div className="p-4 md:w-1/3" key={item}>
                                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                                <div className="p-6">
                                                    <h1 className="title-font text-lg font-bold text-white mb-3">The Catalyzer</h1>
                                                    <p className="leading-relaxed text-gray-200 mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                    <div className="flex items-center flex-wrap ">
                                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer">Read More
                                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M5 12h14"></path>
                                                                <path d="M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                                <circle cx="12" cy="12" r="3"></circle>
                                                            </svg>1.2K
                                                        </span>
                                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                            </svg>6
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })}

                                </div>
                            </div>
                        </section>
                    </div>
                    </Fragment>): (<LoadingScreen />)}
                </div>
    )
}

export default spaceBlog