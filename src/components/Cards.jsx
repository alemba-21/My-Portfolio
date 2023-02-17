import React from 'react';
import './Cards.css';

const Cards = (props) => {
  return (
    props.details.map((value, index) => (
      <div className='cards' key={index}>
        <div className="cards-img">
          <img src={value.img} alt={value.title}/>
        </div>
        <div>
          <h3 className='cards-title'>{value.title}</h3>
          <p className='cards-descriptions'>{value.description}</p>
        </div>
      </div>
    ))
  )
}

export default Cards
