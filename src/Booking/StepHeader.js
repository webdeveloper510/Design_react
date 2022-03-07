import React from 'react';
import logo from "../../public/suntours_logo.svg"
import pro from "../../public/pro.png"
import Locks from "../../public/Locks.png"
function StepHeader() {
  return <div className='container'>
    <div className='row'>
      <div className='col-md-2'>
        <img  alt='' src={logo} width="277px" height="60px" className='mt-3'/>
      </div>
      <div className='col'></div>
      <div className='col-md-8 text-right'>
        <button className='btn btn-primary mr-3' type="button">Call to book 0800 030 5500</button>
        <img  alt='' src={pro} width="84px" className=' p-3'/>
        <img  alt='' src={Locks} width="46px" />
      </div>
    </div>
      
  </div>;
}

export default StepHeader;
