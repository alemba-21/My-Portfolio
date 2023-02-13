import React from 'react'
import Navbar from "../components/Navbar";
import img1 from '../assets/Alemba.png'
import './Hero.css';

const Hero = () => {
  return (
    <div className='background'>
      <Navbar/>
      <div className='content'>
      <img className='img1' src={img1} alt="img1" />
        <div className="info">
          <h1>I'm Alex Kiragu</h1>
          <p>Fullstack Developer and a UI/UX Designer.</p>
          <button >Projects</button>  
          <button >Resume</button>
        </div>
      </div> 
    </div>
  )
}

export default Hero