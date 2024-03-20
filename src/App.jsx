import React from 'react'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Tracking from './components/Tracking'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/tracking' element={<Tracking/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
      <Footer />

    </>
  )
}

export default App
