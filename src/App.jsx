// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Restaurant from './Components/Restaurant/Restaurant'
import Services from './Components/Services/Services'
import Specialities from './Components/Specialities/Specialities';
import Chefs from './Components/Chefs/Chefs'

function App() {


  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<><Home/><Restaurant/><Services/><Specialities/><Chefs/></>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
