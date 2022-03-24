import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home';
import Filter from '../Filter/Filter';
import Holiday from '../Holiday/Holiday';
import Step1 from '../Booking/Step1';
import Step2 from '../Booking/Step2';
import Step3 from '../Booking/Step3';
import Step4 from '../Booking/Step4';
import Final from '../Booking/Final';
import Destination from '../Overview/Destination';

const Routers = () => {
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<Home />} />
         <Route exact path="/filter" element={<Filter/>} /> 
         <Route exact path="/holiday" element={<Holiday/>} /> 
         <Route exact path="/Destination/:destinationId" element={<Destination/>} /> 

         <Route exact path="/Step1" element={<Step1/>} /> 
         <Route exact path="/Step2" element={<Step2/>} /> 
         <Route exact path="/Step3" element={<Step3/>} /> 
         <Route exact path="/Step4" element={<Step4/>} /> 
         <Route exact path="/Final" element={<Final/>} /> 
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default Routers;