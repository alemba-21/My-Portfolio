import React from 'react'
import img1 from '../assets/img1.jpg'
import {Link, Routes, Route, useNavigate} from 'react-router-dom'
import{FaTwitter, FaGithub, FaLinkedin, FaHome} from 'react-icons/fa'
import "./Projects.css"

const Projects = () => {

  const navigate = useNavigate();

  const navigateToDesigns = () => {
    navigate('/designs-cards');
  };

  const navigateEcommerce = () => {
    navigate('/designs-cards2');
  };

  const navigateApi = () => {
    navigate('/designs-cards3');
  };

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
          <Link>
            <button onClick={navigateToDesigns}>Designs</button>
          </Link>
          <Link>
            <button onClick={navigateEcommerce}>E-Commerce</button>
          </Link>
          <Link>
            <button onClick={navigateApi}>API Projects</button>
          </Link>
          <div className="content">
            <div className="cards">
              <div className="cards-img">
                <img src={img1} alt="" />
              </div>
              <div>
                <h3 className='cards-title'>Designs</h3>
                <p className='cards-descriptions'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, recusandae? Laudantium tenetur nisi, omnis repellat doloremque maiores voluptatum deserunt. Minus corporis a dolor cum labore deserunt porro ipsa laboriosam alias.
                Id recusandae aperiam harum, laborum molestiae iste deserunt nam soluta dolore dolorem consequatur quia officiis doloribus inventore, fugiat architecto ipsum placeat nulla reprehenderit distinctio dicta! Tempore molestiae dolore debitis assumenda.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects