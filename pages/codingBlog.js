import React, { useState, useEffect, Fragment } from 'react'
import LandingPage from '../components/LandingPage'
import LoadingScreen from '../components/LoadingScreen'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import CodeBlock from "../components/CodeBlock"
import rehypeRaw from 'rehype-raw';
// import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const CodingBlog = ({ posts }) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  const title = "Learn coding through my Journey and Experience"
  const video = "codingAnimation.mp4"
  const description = "In this blog there will be blogs about Data Structures and Algorithms Questions, learning different languages like Python, Java, Javascript, C++ etc, Web Development and many more advance topics like Blockchain, Machine Learning, AI."

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
                          <div className="flex items-center justify-between flex-wrap ">
                            <Link href={`/blog/${item.attributes.slug}`}>
                              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer">Read More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                            </Link>
                            {/* <div className='like-btn flex items-center'>
                              <button onClick={() => item.attributes.like += 1}>
                              {liked ? <ThumbUpOutlinedIcon className="text-red-600" /> : <ThumbUpIcon className="text-red-600" />}
                              <ThumbUpOutlinedIcon className="text-red-600" /> 
                                {item.attributes.like}
                                {likeCount} {posts.attributes.like === 1 ? "Like" : "Likes"}
                              </button>
                            </div> */}
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
  const api_key = process.env.NEXTAUTH_SECRET
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[category][categoryName][$contains]=Coding&populate=*`

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content_Type": "application/json",
      "Authorization": `Bearer ${api_key}`
    }
  })
  const posts = await response.json()

  return {
    props: { posts: posts.data }
  }
}

export default CodingBlog