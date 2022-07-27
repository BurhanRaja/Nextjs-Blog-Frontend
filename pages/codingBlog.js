import React, { useState, useEffect, Fragment } from 'react'
import LandingPage from '../components/LandingPage'
import LoadingScreen from '../components/LoadingScreen'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import CodeBlock from "../components/CodeBlock"
import rehypeRaw from 'rehype-raw';

const codingBlog = ({posts}) => {
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 2000);
  }, [])

  const title = "Learn coding through my Journey and Experience"
  const video = "codingAnimation.mp4"
  const description = "In this blog there will be blogs about Data Structures and Algorithms Questions, learning different languages like Python, Java, Javascript, C++ etc, Web Development and many more advance topics like Blockchain, Machine Learning, AI."

  const slide = [1, 2, 3, 4, 5, 6]
  return (
    <div>
      {!loading ? (
        <Fragment>
          <div className='bg-gray-800'>
            <LandingPage title={title} video={video} description={description} />
            <section className="text-gray-600 body-font">
              <div className='text-center'>
                <h2 className='text-3xl text-white font-semibold'>Coding Blogs</h2>
              </div>
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {posts.map((item, index) => {
                    return <div key={index} className="p-4 md:w-1/3">
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.attributes.image.data.attributes.name} alt="blog" />
                        <div className="p-6">
                          <h1 className="title-font text-lg font-bold text-white mb-3">{item.attributes.title}</h1>
                          <ReactMarkdown className="leading-relaxed text-gray-200 mb-3" rehypePlugins={[rehypeRaw]} components={CodeBlock}>{item.attributes.blogContent.slice(0, 100)}</ReactMarkdown>
                          <div className="flex items-center flex-wrap ">
                            <Link href={`/blog/${item.attributes.slug}`}>
                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer">Read More
                              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            </Link>
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
        </Fragment>) : (<LoadingScreen />)}
    </div>
  )
}

export async function getServerSideProps(context) {
  const host = "http://localhost:1337"
  const api_key = process.env.NEXT_PUBLIC_PRIVATE_KEY

  const response = await fetch(`${host}/api/posts?filters[category][categoryName][$contains]=Coding&populate=*`, {
    method:"GET",
    headers:{
      "Content_Type":"application/json",
      "Authorization":`Bearer ${api_key}`
    }
  })
  const posts = await response.json()

  return {
    props: {posts: posts.data}
  }
}

export default codingBlog