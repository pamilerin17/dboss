// import React from 'react'
import './Book.css'

function Book() {
  return (
    <div>
      <div className="back">
       <div className="form">
        <h2 className="reserve">Book A Table</h2>
        <h1 className="make">Make A Reservation</h1>
       </div>
       <div className="input-box">
        <input type="text" placeholder="Full Name" className="name"/>
        <input type="text" name="Email" placeholder="Email" required className="name" />
        <input type="text" name="Phone Number" placeholder="Phone Number" required className="name" />
        <input type="text" name="Time" placeholder="Time" required className="name" />
        <input type="text" name="Person(s)" placeholder="Person(s)" required className="name" />
       </div>
       <textarea name="Message" id="" cols="30" rows="10" placeholder="Your Message" required className="name"> </textarea>
       <input type="submit" value="Send Message" className="btn" />
      </div>
    </div>
  )
}

export default Book
