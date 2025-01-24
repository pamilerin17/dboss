// import React from 'react'
import './Map.css'

function Map() {
  return (
    <div>
      <div className="cont">
       <h2>Contact Us</h2>
        <input type="text" placeholder="Full Name" className="nam"/>
        <input type="text" name="Email" placeholder="Email" required className="nam" />
        <input type="text" name="Subject" placeholder="Subject" required className="nam" />
        <input type="submit" value="Send Message" className="buttton" />
      </div>
    </div>
  )
}

export default Map
