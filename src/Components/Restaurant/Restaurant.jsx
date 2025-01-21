// import React from 'react'
import About1 from '../../assets/about-1.jpg'
import About2 from '../../assets/about.jpg'
// import CountUp from 'react-countup'
import './Restaurant.css'

function Restaurant() {
  return (
    <div>
      <div className="ab">
       <img src={About2} alt="" className='abbbb' />
       <img src={About1} alt="" />
      </div>

      <div className="boss">
       <h2>about</h2>
       <h1>DBoss <span>Restaurant</span></h1>
       <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
       <p className='time'>Mon - Fri 8 AM - 11 PM</p>
       <p className='num'>+234 712 3456 213</p>
      </div>

      {/* <div className="count">
 <div className="start">
       <div className="cou">
        <span>
         <CountUp start={5} end={20} duration={10}></CountUp>
         <span className="secondary">Years Experienced</span>
        </span>
       </div>
       <div className="cou">
        <span><CountUp start={20} end={200} duration={10}></CountUp></span>
       
        <span className='secondary'>Menu/Dishes</span>
        
       </div>
       <div className="cou">
        <span><CountUp start={10} end={50} duration={10}></CountUp></span>
        <span className='secondary'>Staff</span>
       </div>
       <div className="cou">
        <span><CountUp start={1000} end={10000} duration={10}></CountUp></span>
        <span className='secondary'>Happy Customers</span>
       </div>
      </div>
      </div> */}
    </div>
  )
}

export default Restaurant
