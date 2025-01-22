import {useState} from 'react'
import './Header.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import OutsideClickHandler from 'react-outside-click-handler'
import {Link} from 'react-router-dom'
import { BiMenu } from "react-icons/bi";

function Header() {
  const [menuOpened,setMenuOpened]=useState(false)
 const getMenuStyles=(menuOpened)=>{
  if(document.documentElement.clientWidth<=800){
   return{right:!menuOpened && '-100%'}
  }
 }
  return (
    <div>
          <div className="first">
        <div className="reach">
        <p className="call"><FaPhoneAlt/>  +234 712 3456 213</p>
        <p className="location"><IoIosMail/> dboss@gmail.com
        </p>
        {/* <p className="open">Open Hours: Monday-Sunday 8:00AM-9:00PM</p> */}
        </div>
        </div>

        <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
         <h3 className="d">DBOSS</h3>
          <OutsideClickHandler onOutsideClick={()=>{
        setMenuOpened(false)
       }}> </OutsideClickHandler>
        </div>
         <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Menu'>Menu</Link>
        <Link to='/Stories'>Stories</Link>
        <Link to='/Contact'>Contact</Link>
        <button className='button'><a href="contact">Book A Table</a></button>
       </div>

        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
        <BiMenu size={30}/>
       </div>
      </section>        
    </div>
  )
}

export default Header
