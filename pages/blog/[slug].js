import React from 'react'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import CodeBlock from "../../components/CodeBlock"
import rehypeRaw from 'rehype-raw';


const Slug = ({ post }) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className="container mx-auto">
      <div className='mt-24'>
        <div className='mb-9 text-center'>
          <div className='title mt-10 mb-2'>
            <h1 className='text-6xl'>{post.attributes.title}</h1>
          </div>
          <div className='title mt-10 mb-2'>
            <p className='text-lg'>{post.attributes.tags}</p>
          </div>
          <div className='createdAt'>
            <p><span>{post.attributes.createdAt}</span></p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={post.attributes.image.data.attributes.name} />
        </div>
      </div>
      <div className='content flex flex-col justify-center my-7 mb-16 text-base' style={{ "marginLeft": "15vw", "marginRight": "15vw" }}>
        <div className=" text-lg">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} components={CodeBlock}>{post.attributes.blogContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
  const api_key = process.env.NEXTAUTH_SECRET
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[slug]=${context.query.slug}&populate=*`

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content_Type": "application/json",
      "Authorization": `Bearer ${api_key}`
    }
  })
  const post = await response.json()

  return {
    props: { post: post.data[0] }
  }
}

export default Slug
