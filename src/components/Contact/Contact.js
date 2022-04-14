import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contact-cont'>
            <img src='https://wallpaperaccess.com/full/2147265.jpg'></img>
            <form id='CONTACT' className='form-cont'>
                <h1>CONTACT US</h1>
                <input type='text' placeholder='Full Name'></input>
                <input type='text' placeholder='E-Mail'></input>
                <textarea placeholder='Send Us a Message...'></textarea>
                <button>SEND</button>
            </form>
        </div>
    )
}

export default Contact