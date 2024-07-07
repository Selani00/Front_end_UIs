import React from 'react'
import "../styles/welcomePage.css"
import Video1 from "../assets/Video1.mp4"
import Video2 from "../assets/Video2.mp4"
const Welcome_Page = () => {
  return (
    <div className='container'>
      <video autoPlay muted loop >
        <source src={Video1} type='video/mp4' />
      </video>
      <div className='text-box'>

        <h1><span>Hello</span><br/>Welcome</h1>
      </div>
      
    </div>
  )
}

export default Welcome_Page
