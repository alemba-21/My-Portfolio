import React from 'react'
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
        <div className="toggle">
          <Link to='/Designs'><button>Designs</button></Link>
          <Link to='/E-Commerce'><button>E-Commerce</button></Link>
          <Link to='/API'><button>API Projects</button></Link>
        </div>
        <div className="cards">
          
        </div>
    </div>
  )
}

export default Projects