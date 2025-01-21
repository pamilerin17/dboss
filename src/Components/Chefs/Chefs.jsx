// import React from 'react'
import './Chefs.css'
import Chef1 from '../../assets/chef-1.jpg'
import Chef2 from '../../assets/chef-2.jpg'
import Chef3 from '../../assets/chef-3.jpg'
import Chef4 from '../../assets/chef-4.jpg'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Chefs() {
  return (
    <div>
      <div className="chef">
       <h3>Chef</h3>
       <h2>Our Chefs</h2>
      </div>
      <div className="ho">
        <div className="che">
       <img src={Chef4} alt="" />
       <h2>John Smooth</h2>
       <h1>Restaurant Owner</h1>
       <FaTwitter/><FaFacebookF/><FaLinkedin/><FaInstagram/>
      </div>
         <div className="che">
       <img src={Chef2} alt="" />
       <h2>Rebecca Welson</h2>
       <h1>Head Chef</h1>
       <FaTwitter/><FaFacebookF/><FaLinkedin/><FaInstagram/>
      </div>
        <div className="che">
       <img src={Chef3} alt="" />
       <h2>Karl Bryant</h2>
       <h1>Chef</h1>
       <FaTwitter/><FaFacebookF/><FaLinkedin/><FaInstagram/>
      </div>
      <div className="che">
       <img src={Chef1} alt="" />
       <h2>Luke Simon</h2>
       <h1>Chef</h1>
       <FaTwitter/><FaFacebookF/><FaLinkedin/><FaInstagram/>
      </div>
      </div>
    </div>
  )
}

export default Chefs
