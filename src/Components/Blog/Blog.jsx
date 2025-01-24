// import React from 'react'
import Image1 from '../../assets/image_1.jpg'
import Image2 from '../../assets/image_2.jpg'
import Image3 from '../../assets/image_3.jpg'
import { FaArrowRight } from "react-icons/fa";
import Image4 from '../../assets/bg_2.jpg'
import './Blog.css'

function Blog() {
  return (
    <div>
      <div className="blo">
       <h2>Blog</h2>
       <h1>Our Recent Blog</h1>
      </div>
      <div className="recent">
       <img src={Image1} alt="" />
       <p>Sept 05, 2020</p>
       <h2>Taste The Delicious Food in Asia</h2>
       <h1>Read more <FaArrowRight/></h1>
      </div>
       <div className="recent">
       <img src={Image2} alt="" />
       <p>Sept 05, 2020</p>
       <h2>Taste The Delicious Food in Asia</h2>
       <h1>Read more <FaArrowRight/></h1>
      </div>
         <div className="recent">
       <img src={Image3} alt="" />
       <p>Sept 05, 2020</p>
       <h2>Taste The Delicious Food in Asia</h2>
       <h1>Read more <FaArrowRight/></h1>
      </div>
       <div className="recent">
       <img src={Image4} alt="" />
       <p>Sept 05, 2020</p>
       <h2>Taste The Delicious Food in Asia</h2>
       <h1>Read more <FaArrowRight/></h1>
      </div>
    </div>
  )
}

export default Blog
