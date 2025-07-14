import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                   <Link to='/' className="logo">Cuisine.</Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa sit praesentium reiciendis labore commodi est dolorum eius, sint obcaecati. Sed ipsa commodi laboriosam iste asperiores at tempore dolorem iure?
                    </p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footer-content-right">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-center">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+1-32432882</li>
                        <li>tem@gmail.com</li>
                    </ul>

                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 @ temp.gmail.com - All Rights Reseved</p>
        </div>
    )
}

export default Footer
