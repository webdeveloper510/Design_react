import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home';
import Filter from '../Filter/Filter';
import Holiday from '../Holiday/Holiday';

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
         <Route exact path="/filter" element={<Filter/>} /> 
         <Route exact path="/holiday" element={<Holiday/>} /> 
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default Routers;