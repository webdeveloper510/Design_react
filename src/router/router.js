import React from 'react'
import { HashRouter as Router,BrowserRouter as rou, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home';
import Filter from '../Filter/Filter';
import Holiday from '../Holiday/Holiday';
import Step1 from '../Booking/Step1';
import Step2 from '../Booking/Step2';
import Step3 from '../Booking/Step3';
import Step4 from '../Booking/Step4';
import Final from '../Booking/Final';
import Destination from '../Overview/Destination';
import Holiday1 from '../Holiday/Holiday1';

const Routers = () => {
  return (
    <Router basename='/'>
      <rou>
      <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route exact path="/filter" element={<Filter/>} /> 
        <Route exact path="/holiday/:holidayId" element={<Holiday/>} /> 
        <Route exact path="/holiday1" element={<Holiday1/>} /> 
        <Route exact path="/Destination/:destinationName" element={<Destination/>} /> 

        <Route exact path="/Step1" element={<Step1/>} /> 
        <Route exact path="/Step2" element={<Step2/>} /> 
        <Route exact path="/Step3" element={<Step3/>} /> 
        <Route exact path="/Step4" element={<Step4/>} /> 
        <Route exact path="/Final" element={<Final/>} /> 
        <Route path="*" element={<Home />} />
      </Routes>
      </rou>
    </Router>
  )
}

export default Routers;