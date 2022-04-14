import { React, useState } from 'react'
import './Navbar.css'
import Link from 'react-scroll/modules/components/Link'

function Navbar() {

    const [nav, setNav] = useState(false)
    const [responsvie, setResponsvie] = useState(false)
    const [clicked, setClicked] = useState(false)

    function changeBackground() {
        window.scrollY >= 50 ? setNav(true) : setNav(false)
    }
    window.addEventListener('scroll', changeBackground)


    function handleClick() {
        setResponsvie(false)
    }



    return (
        <>

            {

                !responsvie ?

                    <nav className={nav ? 'nav actives' : 'nav'}>
                        <div className='left'>
                            <p className='logo'>Gym.</p>
                        </div>
                        <div className='right'>
                            <ul>
                                {/* <li><a href='#'>Home</a></li>
                                <li><a href='#FEATURES'>Features</a></li>
                                <li><a href='#OFFER'>Offer</a></li>
                                <li><a href='#ABOUT'>About</a></li>
                                <li><a href='#CONTACT'>Contact Us</a></li> */}
                                <Link to='HOME' spy={true} smooth={true} offset={1} duration={500} onClick={handleClick}>Home</Link>
                                <Link to='FEATURES' spy={true} smooth={true} offset={-250} duration={500} onClick={handleClick}>Features</Link>
                                <Link to='OFFER' spy={true} smooth={true} offset={-70} duration={500} onClick={handleClick}>Offer</Link>
                                <Link to='ABOUT' spy={true} smooth={true} offset={-170} duration={500} onClick={handleClick}>About</Link>
                                <Link to='CONTACT' spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>Contact Us</Link>
                                <button onClick={() => setResponsvie(!responsvie)}><i class="fa-solid fa-bars"></i></button>
                            </ul>
                        </div>
                    </nav>

                    :

                    <nav className='responsive_nav'>

                        <ul className='responsive_links'>
                            {/* <li onClick={() => setResponsvie(false)}><a href='#'>Home</a></li>
                            <li onClick={() => setResponsvie(false)}><a href='#FEATURES'>Features</a></li>
                            <li onClick={() => setResponsvie(false)}><a href='#OFFER'>Offer</a></li>
                            <li onClick={() => setResponsvie(false)}><a href='#ABOUT'>About</a></li>
                            <li onClick={() => setResponsvie(false)}><a href='#CONTACT'>Contact</a></li> */}
                            <Link to='HOME' spy={true} smooth={true} offset={1} duration={500} onClick={handleClick}>Home</Link>
                            <Link to='FEATURES' spy={true} smooth={true} offset={-240} duration={500} onClick={handleClick}>Features</Link>
                            <Link to='OFFER' spy={true} smooth={true} offset={-70} duration={500} onClick={handleClick}>Offer</Link>
                            <Link to='ABOUT' spy={true} smooth={true} offset={-170} duration={500} onClick={handleClick}>About</Link>
                            <Link to='CONTACT' spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>Contact Us</Link>
                            <button onClick={() => setResponsvie(!responsvie)}><i class="fa-solid fa-xmark"></i></button>
                        </ul>
                    </nav >
            }
        </>
    )
}

export default Navbar