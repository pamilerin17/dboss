// import React from 'react'
import './Home.css'
import Food1 from '../../assets/breakfast-1.jpg'
import Food2 from '../../assets/breakfast-2.jpg'
import Food3 from '../../assets/breakfast-3.jpg'
import Food4 from '../../assets/breakfast-4.jpg'

function Home() {
  return (
    <div>
      <section className="page">
       <div className="page-container">
        <h3 className="text">DBoss</h3>
        <p className="txt">Delicious Meal</p>
       </div>

       <div className="food">
        <img src={Food1} alt="" />
        <h2>Grilled Beef with Potatoes</h2>
        <h1>Meat, Potatoes, Rice, Tomatoes</h1>
       </div>
             <div className="food">
        <img src={Food2} alt="" />
        <h2>Grilled Beef with Potatoes</h2>
        <h1>Meat, Potatoes, Rice, Tomatoes</h1>
       </div>
             <div className="food">
        <img src={Food3} alt="" />
        <h2>Grilled Beef with Potatoes</h2>
        <h1>Meat, Potatoes, Rice, Tomatoes</h1>
       </div>
             <div className="food">
        <img src={Food4} alt="" />
        <h2>Grilled Beef with Potatoes</h2>
        <h1>Meat, Potatoes, Rice, Tomatoes</h1>
       </div>
      </section>
    </div>
  )
}

export default Home
