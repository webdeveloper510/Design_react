import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Filter from '../Filter/Filter';

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
         <Route exact path="/filter" element={<Filter/>} /> 
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default Routers;