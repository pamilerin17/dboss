// import React from 'react'
import './Specialities.css'
import Break1 from '../../assets/breakfast-1.jpg'
import Break2 from '../../assets/breakfast-2.jpg'
import Break3 from '../../assets/breakfast-3.jpg'
import Break4 from '../../assets/breakfast-4.jpg'
import Break5 from '../../assets/breakfast-5.jpg'
import Break6 from '../../assets/breakfast-6.jpg'

function Specialities() {
  return (
    <div>
      <div className="special">
       <h3>Specialities</h3>
       <h2>Our Menu</h2>
      </div>
      <div className="hol">
        <div className="bre">
       <img src={Break1} alt="" />
       <p className="price">$40</p>
        <h2>Grilled Beef with Potatoes</h2>
        <h1>Meat, Potatoes, Rice, Tomatoes</h1>
        <button className='order'>Order Now</button>
      </div>
        <div className="bre">
       <img src={Break2} alt="" />
       <p className="price">$40</p>
        <h2>Grilled Beef with Potatoes</h2>
        <h1>Meat, Potatoes, Rice, Tomatoes</h1>
        <button className='order'>Order Now</button>
      </div>
         <div className="bre">
       <img src={Break3} alt="" />
       <p className="price">$40</p>
        <h2>Grilled Beef with Potatoes</h2>
        <h1>Meat, Potatoes, Rice, Tomatoes</h1>
        <button className='order'>Order Now</button>
      </div>
         <div className="bre">
       <img src={Break4} alt="" />
       <p className="price">$40</p>
        <h2>Grilled Beef with Potatoes</h2>
        <h1>Meat, Potatoes, Rice, Tomatoes</h1>
        <button className='order'>Order Now</button>
      </div>
         <div className="bre">
       <img src={Break5} alt="" />
       <p className="price">$40</p>
        <h2>Grilled Beef with Potatoes</h2>
        <h1>Meat, Potatoes, Rice, Tomatoes</h1>
        <button className='order'>Order Now</button>
      </div>
        <div className="bre">
       <img src={Break6} alt="" />
       <p className="price">$40</p>
        <h2>Grilled Beef with Potatoes</h2>
        <h1>Meat, Potatoes, Rice, Tomatoes</h1>
        <button className='order'>Order Now</button>
      </div>
      </div>
    </div>
  )
}

export default Specialities
