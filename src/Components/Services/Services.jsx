// import React from 'react'
import './Services.css'
import Cake from '../../assets/918234.png'
import Wedding from '../../assets/1058378.png'
import Business from '../../assets/1965701.png'
import House from '../../assets/house.png'

function Services() {
  return (
    <div>
      <div className="serv">
       <h3>Services</h3>
       <h1 className="our">Our Services</h1>
       </div>
       <div className="hold">
             <div className="second">
        <img src={Cake} alt="" />
        <h2>Birthday Party</h2>
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
       </div>

        <div className="second">
        <img src={Business} alt="" />
        <h2>Business Meeting</h2>
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
       </div>

        <div className="second">
        <img src={Wedding} alt="" />
        <h2>Wedding Planning</h2>
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
       </div>

          <div className="second">
        <img src={House} alt="" />
        <h2>House Party</h2>
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
       </div>
       </div>
      
    </div>
  )
}

export default Services
