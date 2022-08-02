import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar"
import '../styles/globals.css'
import "../styles/Navbar.css"


function MyApp({ Component, pageProps }) {

  // const[codingliked, setCodingLiked] = useState(false)
  // const[codinglikeCount, setCodingLikeCount] = useState(1)

  // const codingHandleLike = () => {
  //   setCodingLiked(!codingliked)
  //   if (codingliked === false) {
  //     setCodingLikeCount(codinglikeCount - 1)
  //   }
  //   else {
  //     setCodingLikeCount(codinglikeCount+1)
  //   }
  // }


  return <>
      <Navbar />
      <Component {...pageProps}  />
      <Footer />
  </>
}

export default MyApp
