import React from 'react'
import { FaPinterest, FaInstagram,FaTwitter, FaYoutube  } from "react-icons/fa6";
const Footer = () => {
    return (
        <div id='footer'>

            <div className="footer-main">
                <div className="f-left">
                    <div className="f-column">
                        <h5>CUSTOMER SUPPORT</h5>
                        <li>Terms and Conditions</li>
                        <li>Privacy policy</li>
                        <li>Track Order</li>
                        <li>Return/Exchange Request</li>
                        <li>Return/Refund Policy</li>
                        <li>Operational Address</li>
                        <li>Contact us</li>
                        <li>Refund policy</li>
                    </div>
                    <div className="f-column">
                        <h5>HELP?</h5>
                        <li>Order Status</li>
                        <li>Delivery</li>
                        <li>Returns</li>
                        <li>FAQs</li>
                        <li>Shipping Policy</li>
                    </div>
                    <div className="f-column">
                        <h5>ABOUT US</h5>
                        <li>Company Profile</li>
                        <li>Our Vision</li>
                        <li>Terms And Conditions For Membership Program</li>
                        <li>Investors</li>
                        <li>History</li>
                    </div>
                </div>

                <div className="f-right">
                    <div className="f-column2">
                        <h4>JOIN NOVANOOK COMMUNITY </h4>
                        <input type="email" placeholder='E-Mail' />
                        <p>Sign up to our community to receive exclusive offers.</p>
                        <button className='btn3'>Subscribe</button>
                    </div>
                </div>
            </div>


            <div className="footer-base">
                <div className="base-left">
                <FaPinterest />
                <FaInstagram/>
                <FaTwitter/>
                < FaYoutube />
                </div>
                <div className="base-right">
                    <p>© 2024 - WELCOME TO NOVANOOKOFFICIAL</p>
                </div>
            </div>

            <div className="footer-base2">
                NOVANOOK
            </div>

           
        </div>
    )
}

export default Footer
