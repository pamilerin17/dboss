// import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Footer.css'

function Footer() {
  return (
    <div>
      <div className="footer"> 
       <h2>DBOSS</h2>
       <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
       <FaTwitter/><FaFacebookF/><FaLinkedin/><FaInstagram/>
      <div className="open">
       <h2>Open Hours</h2>
       <h1>Monday 8:00 - 9:00 <br />
        Tuesday 8:00 - 9:00 <br />
        Wednesday 8:00 - 9:00 <br />
        Thursday 8:00 - 9:00 <br />
        Friday 8:00 - 9:00 <br />
        Saturday 8:00 - 9:00 <br />
        Sunday 8:00 - 9:00</h1>
      </div>
      <div className="newsletter">
       <textarea className="mail" name="Message" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
       <input type="submit" value="Send Message" className="buttonn" />
      </div>
      {/* <p className="copy">Copyright ©2025 All rights reserved </p> */}
      </div>
      
    </div>
  )
}

export default Footer
