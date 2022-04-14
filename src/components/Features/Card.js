import React from 'react'

function Card({ img, header }) {
    return (
        <div className='card'>
            <img src={img}></img>
            <h2>{header}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        </div>
    )
}

export default Card