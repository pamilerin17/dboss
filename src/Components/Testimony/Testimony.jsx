// import React from 'react'
import Person2 from '../../assets/person_2.jpg'
import Person3 from '../../assets/person_3.jpg'
import Person4 from '../../assets/person_4.jpg'
import Person1 from '../../assets/person_1 (1).jpg'
import './Testimony.css'

function Testimony() {
  return (
    <div>
      <div className="tes">
       <h2>Testimony</h2>
       <h1>Happy Testimony</h1>
      </div>
      <div className="test">
       <img src={Person2} alt="" />
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad nostrum eligendi ratione fugiat pariatur tenetur officiis nobis magnam reiciendis! Cum corporis iste fugiat beatae dicta fugit debitis officia ut.</p>
       <h2>Mark Stevenson</h2>
       <h1>customer</h1>
      </div>
        <div className="test">
       <img src={Person3} alt="" />
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad nostrum eligendi ratione fugiat pariatur tenetur officiis nobis magnam reiciendis! Cum corporis iste fugiat beatae dicta fugit debitis officia ut.</p>
       <h2>Art Leonard</h2>
       <h1>customer</h1>
      </div>
        <div className="test">
       <img src={Person4} alt="" />
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad nostrum eligendi ratione fugiat pariatur tenetur officiis nobis magnam reiciendis! Cum corporis iste fugiat beatae dicta fugit debitis officia ut.</p>
       <h2>Peter Markson</h2>
       <h1>customer</h1>
      </div>
        <div className="test">
       <img src={Person1} alt="" />
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad nostrum eligendi ratione fugiat pariatur tenetur officiis nobis magnam reiciendis! Cum corporis iste fugiat beatae dicta fugit debitis officia ut.</p>
       <h2>Simon Dest</h2>
       <h1>customer</h1>
      </div>
    </div>
  )
}

export default Testimony
