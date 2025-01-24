// import React from 'react'
import Insta from '../../assets/insta-2.jpg'
import Insta2 from '../../assets/insta-5.jpg'
import Insta3 from '../../assets/insta-6.jpg'
import Insta4 from '../../assets/insta-2.jpg'
import './Story.css'
import { FaArrowRight } from 'react-icons/fa'

function Story() {
  return (
    <div>
      <div className="bl">
       <div className="bbl">
        <img src={Insta} alt="" />
         <p>Sept 05, 2020</p>
          <h2>Taste The Delicious Food in Asia</h2>
           <h1>Read more <FaArrowRight/></h1>
       </div>
         <div className="bbl">
        <img src={Insta2} alt="" />
         <p>Sept 05, 2020</p>
         <h2>Taste The Delicious Food in Asia</h2>
         <h1>Read more <FaArrowRight/></h1>
       </div>
         <div className="bbl">
        <img src={Insta3} alt="" />
         <p>Sept 05, 2020</p>
          <h2>Taste The Delicious Food in Asia</h2>
           <h1>Read more <FaArrowRight/></h1>
       </div>
         <div className="bbl">
        <img src={Insta4} alt="" />
         <p>Sept 05, 2020</p>
          <h2>Taste The Delicious Food in Asia</h2>
           <h1>Read more <FaArrowRight/></h1>
       </div>
      </div>
    </div>
  )
}

export default Story
