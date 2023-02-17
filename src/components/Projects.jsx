import React from 'react'
import CardData from './CardData'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import{FaTwitter, FaGithub, FaLinkedin, FaHome} from 'react-icons/fa'
import "./Projects.css"

const Projects = () => {
  return (
    <div className='projo'>
        <div className="navbar">
        <div className='alemba'>Alemba</div>
          <div className="socials">
              <Link to='/'><FaHome className='icons'/></Link>
              <Link to='https://www.linkedin.com/in/alex-kiragu-754690219/'><FaLinkedin className='icons'/></Link>
              <Link to='https://twitter.com/alemba97'><FaTwitter className='icons'/></Link>
              <Link to='https://github.com/Alemba-Alex'><FaGithub className='icons'/></Link>
          </div>
        </div>
        <div className="info2">
            <h1>Projects</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nam adipisci soluta officia at commodi iure illo natus blanditiis consequuntur ipsa temporibus hic fugit, veritatis recusandae debitis enim sequi magni!</p>
        </div>
        <div className="toggle" defaultValue="Designs">
            <button>Designs</button>
            <button>E-Commerce</button>
            <button>API Projects</button>
          <div className="content-1">
            <Cards details={CardData}/>
          </div>
        </div>
    </div>
  )
}

export default Projects