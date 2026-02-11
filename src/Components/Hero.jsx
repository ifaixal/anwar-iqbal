import React from 'react'
import { ReactTyped } from "react-typed";
import './Hero.css'

const Hero = () => {
  const handleClickHero = () => {
    window.location.href = 
      "mailto:ana.anwar420@gmail.com?subject=Avail your services&body=Hello Anwar, I saw your accounting solutions and wanted to avail your service."
  }

  return (
    <div className='HeroSection' id='Home'>
        <div className="leftContainer">
          <div className="textArea">
            <ReactTyped
              strings={["Hi there! ", "Bonjour! ", "Hola! " ,"السلام علیکم"]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
            <span className='Introduction'><h1 className='headingcolor'>ANWAR</h1> IS HERE TO BE YOUR ASSISTANCE</span>
            <p>Focus on growing your business while we handle the numbers.</p>
          </div>

          <div className="CTA">
            <button onClick={handleClickHero}>Let's Discuss!</button>
          </div>
        </div>

        <div className="rightContainer">
          <img loading='lazy' src="/Vector - 3.png" alt="img"/>
        </div>
    </div>
  )
}

export default Hero