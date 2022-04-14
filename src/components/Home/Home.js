import React from 'react'
import './Home.css'

function Home() {
    return (
        <div id='HOME' className='header'>
            <img src='https://wallpaperaccess.com/full/3622791.jpg'></img>
            <div className='header-text'>
                <h2>STEP UP YOUR</h2>
                <h1><span>FITNESS</span> WITH US</h1>
                <p className='header-details'>Build your body and fitness with proffessional touch</p>
                <button>Join Us</button>
            </div>
        </div>
    )
}

export default Home