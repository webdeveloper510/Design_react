import React from 'react';
import StepHeader from './StepHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,  } from '@fortawesome/pro-solid-svg-icons';
function Step3() {
  return <div >
    <StepHeader />
    <section className='holidays'>
      <div className='container'>
        <div className='row py-2'>
          <div className='col-md-3 '>
            <div className='clock p-1'>
              <img  alt='' src="clock.png" width="80px" className=' m-0' />
              <div className='deal'>
                <h3>29:59</h3>
                <p><b>Left to book this deal! </b></p>
              </div>
            </div>
          </div>
          <div className='col-md-9 process'>
            <img  alt='' src="step3.png" className='img-fluid' />
          </div>
        </div>
        <div className='row '>
          <div className='col-md-8 '>
            <div className="lead">
              <h5>Payment options </h5>
            </div>
            <div className='pay'>
              <div className='row'>
                <div className='col'>
                  <div className='dot'></div>
                </div>
                <div className='col-5'>
                  <h3 className='blue'>Pay monthly</h3>
                  <h2 className='blue'>£60.00</h2>
                  <h4 className='gray'>today</h4>
                  <p className='green'>Low deposit</p>
                  <p>then 3 equal monthly installments  of £337.06 and a final installment due by Jun 2022</p>
                  <hr />
                  <h3 className='blue'>Pay monthly</h3>
                  <h2 className='blue'>£60.00</h2>
                  <h4 className='gray'>today</h4>
                  <p className='green'>Low deposit</p>
                  <p>then 2 further installments  and a final installment of £1,05.80 due by Jun 2022</p>
                  <hr />
                  <h3 className='blue'>Pay monthly</h3>
                  <h2 className='blue'>£1,408.25</h2>
                  <h4 className='gray'>today</h4>
                  <p>pay all in one go and start packing!</p>
                  <hr />
                </div>
                <div className='col-6'>
                  <h4 className='mb-3'>Payment breakdown</h4>
                  <table className='w-100 breakdown'>
                    <thead>
                      <tr>
                        <th>Due by :</th>
                        <th className='amountright'>Amount :</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>5 Feb 2022</th>
                        <td> £60.00 </td>
                      </tr>
                      <tr>
                        <th>5 Mar 2022</th>
                        <td> £60.00 </td>
                      </tr>
                      <tr>
                        <th>5 Apr 2022</th>
                        <td> £60.00 </td>
                      </tr>
                      <tr>
                        <th>5 May 2022</th>
                        <td> £60.00 </td>
                      </tr>
                      <tr>
                        <th>5 Jun 2022</th>
                        <td> £60.00 </td>
                      </tr>
                      <tr>
                        <th>Total</th>
                        <th className='amountright'> £1,408.25 </th>
                      </tr>
                    </tbody>
                  </table>
                  <p className='mt-4'>Payment dates can be amended after you've made your booking. No additional fees when you make a payment.</p>
                </div>
              </div>
            </div>
            <div className='abouts mb-2'>
              <p>Important information about <a href='#' className='text-decoration-underline'> paying monthly or in instalments.</a> <br />Cancellation charges may apply.</p>
            </div>
            <div className='row'>
              <div className='col-4'>
                <div className='clock1 p-1'>
                  <img  alt='' src="clock.png" width="60px" height="60px" className=' mt-2' />
                  <div className='deal1'>
                    <h3 className='blue m-0'> <b> 29:59 </b></h3>
                    <p className='blue'><b>Left to book this deal! </b></p>
                  </div>
                </div>
              </div>
              <div className='col-8 text-center Continue'>
                <h3 className='blue'>Continue to checkout <img  alt='' src="Shape.png" className='img-fluid' /></h3>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='bannerhotal'>
              <img  alt='' src="hotel.png" className='img-fluid' />
              <div className='title'>
                <h4 className='blue'>Queens Bay Hotel
                <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                  <FontAwesomeIcon icon={faStar}/>
                </h4>
                <h5 className='blue'>Paphos</h5>
                <p className='blue'>Tue 05 Jul 2022, 14 nights, 1x Double or Twin Room <br />
                  with Inland View, Bed & Breakfast<br />
                  <br />
                  Supplied through Five rocks Beach ltd Queens Bay Hotel</p>
                <hr />
                <img  alt='' src="easyjet.png" className='img-fluid' />
                <h5 className='blue'>Tue 05 Jul 2022 (EZY 8935)</h5>
                <div className='row'>
                  <div className='col'>
                    <p>London Gatwick <br />
                      <span className='flighttime'>15:45</span>
                    </p>
                  </div>
                  <div className='col-2 '>
                    <img  alt='' src="rightflight.png" className='img-fluid p-2' />
                  </div>
                  <div className='col'>
                    <p>London Gatwick <br />
                      <span className='flighttime'>15:45 (4 hr 35m)</span>
                    </p>
                  </div>
                </div>
                <hr />
                <img  alt='' src="easyjet.png" className='img-fluid' />
                <h5 className='blue'>Tue 05 Jul 2022 (EZY 8935)</h5>
                <div className='row'>
                  <div className='col'>
                    <p>London Gatwick <br />
                      <span className='flighttime'>23:10</span>
                    </p>
                  </div>
                  <div className='col-2'>
                    <img  alt='' src="flights1.png" className='img-fluid p-2' />
                  </div>
                  <div className='col'>
                    <p>London Gatwick <br />
                      <span className='flighttime'>02:00 (+1 Day) (4 hr 35m)</span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col'>
                    <h5>ATOL Protection</h5>
                  </div>
                  <div className='col text-right'>
                    <h5>£5.00</h5>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-2 arrors mt-1'>
                    <h5>VIP</h5>
                  </div>
                  <div className='col mt-3 text-center'>
                    <h5 className='blue'>FREE Aiport lounge</h5>
                  </div>
                  <div className='col-3 mt-3'>
                    <h5 className='pink'>Included</h5>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-2 arrors mt-1'>
                    <img  alt='' src="rightarrow.png" className='img-fluid' />
                  </div>
                  <div className='col mt-3 text-center'>
                    <h5 className='blue'>FREE Aiport lounge</h5>
                  </div>
                  <div className='col-3 mt-3'>
                    <h5 className='pink'>Included</h5>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-6'>
                    <h5 className='blue'>Total Price</h5>
                    <h5 style={{ color: '#ff6200' }}>Ref: 2678987655</h5>
                  </div>
                  <div className='col-6 text-right mt-3'>
                    <h2 className='blue'>£1,270.97</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />

  </div>;
}

export default Step3;
