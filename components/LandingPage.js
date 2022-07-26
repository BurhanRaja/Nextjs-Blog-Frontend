import React from 'react'

const LandingPage = (props) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 pb-36 pt-10 md:flex-row flex-col items-center">

                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            {props.title}
                        </h1>
                        <p className="mb-8 leading-relaxed text-gray-400">{props.description}</p>
                    </div>

                    <div className="lg:max-w-lg lg:w-full md:w-1/2">
                        <video playsInline autoPlay muted loop className='video w-full h-full rounded-2xl'>
                            <source src={`/assets/${props.video}`} type="video/mp4" className='video h-full  ' />
                            <p>Your browser does not support the video tag.</p>
                        </video>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage