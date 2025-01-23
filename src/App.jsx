// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Restaurant from './Components/Restaurant/Restaurant'
import Services from './Components/Services/Services'
import Specialities from './Components/Specialities/Specialities';
import Chefs from './Components/Chefs/Chefs'
import Book from './Components/Book/Book'
import Testimony from './Components/Testimony/Testimony';
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'

function App() {


  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<><Home/><Restaurant/><Services/><Specialities/><Chefs/><Book/><Testimony/><Blog/></>}/>
        <Route path='/about' element={<><About/><Restaurant/><Services/><Chefs/><Book/><Testimony/></>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
