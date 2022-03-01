import React from 'react';
import StepHeader from './StepHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faAngleRight, faStar,  } from '@fortawesome/pro-solid-svg-icons';
function Step1() {
  return <div >
    <StepHeader />
    <section className='holidays'>
      <div className='container'>
        <div className='row py-2'>
          <div className='col-md-3 '>
            <div className='clock p-1'>
              <img  alt='' src="clock.png" width="80px" className=' m-0' />
              <div className='deal'>
                <h3 className='blue m-0'> <b> 29:59 </b></h3>
                <p className='blue'><b>Left to book this deal! </b></p>
              </div>
            </div>
          </div>
          <div className='col-md-9 process'>
            <img  alt='' src="step1.png" className='img-fluid' />
          </div>
        </div>
        <div className='row '>
          <div className='col-md-8 '>
            <div className="lead">
              <h5>Add transfers <img  alt='' src="img.png" className='img-fluid mx-2' /></h5>
            </div>
            <div className='safe'>
              <p>Safe, secure and cost effective return transfer options to suit all budgets.</p>
              <p> <img  alt='' src="ser.png" className='img-fluid' /> <b>Financial protection with ATOL </b> when booked as part of a flight-inclusive package holiday</p>
              <p> <img  alt='' src="ser.png" className='img-fluid' /> <b> Free cancellation on all transfers,</b> if cancelled up to 7 days before departure</p>

              <div className='row py-3 service'>
                <div className='col-7'>
                  <h5 className='blue'>Shuttle Service (return)</h5>
                  <p className='blue'>From Paphos Airport <br />
                    Estimated journey time: 1h 15m <br />
                    2 passengers <br />
                    Supplied through HT Group - PFO - Shuttles</p>
                </div>
                <div className='col-4'>
                  <h4 className='blue'>£20.88 pp</h4>
                </div>
                <div className='col-1'>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                </div>
              </div>
              <hr />
              <div className='row py-3 service active'>
                <div className='col-7'>
                  <h5 className='blue'>Speedy Shuttle (return) Max 4 stops</h5>
                  <p className='blue'>From Paphos Airport <br />
                    Estimated journey time: 1h 15m <br />
                    2 passengers <br />
                    Supplied through HT Group - PFO - Shuttles</p>
                </div>
                <div className='col-4'>
                  <h4 className='blue'>£20.88 pp</h4>
                </div>
                <div className='col-1'>
                  <input class="form-check-input" type="radio" checked name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                </div>
              </div>
              <hr />
              <div className='row py-3 service'>
                <div className='col-7'>
                  <h5 className='blue'>Speedy Shuttle (return) Max 4 stops</h5>
                  <p className='blue'>From Paphos Airport <br />
                    Estimated journey time: 1h 15m <br />
                    2 passengers <br />
                    Supplied through HT Group - PFO - Shuttles</p>
                </div>
                <div className='col-4'>
                  <h4>£20.88 pp</h4>
                </div>
                <div className='col-1'>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                </div>
              </div>
            </div>

            <div className='my-4'>
              <div className='lead'>
                <h5>Add Hold Baggage <img  alt='' src="img.png" className='img-fluid mx-2' /></h5>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className='row'>
                    <div className='col-md-9'>
                      <h5>£37 per hold bag each way. Hold bag weight limit is 15kg.</h5>
                      <p>Your booking includes hand luggage with no weight limit, max size 45x36x20cm per person.</p>
                    </div>
                    <div className='col-md-3'>
                      <div className='d-flex mt-4'>
                        <img  alt='' src="sum.png" className='img-fluid sum' />
                        <input type='number' className="form-control" />
                        <img  alt='' src="add.png" className='img-fluid sum' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='lead'>
              <h5>Add insurance <img  alt='' src="img.png" className='img-fluid mx-2' /></h5>
            </div>
            <div className='row mt-3'>
              <div className='col-6'>
                <p className='p-3 blue'><b> Travel Insurance </b></p>
              </div>
              <div className='col-5 text-right'>
                <h4 className='blue'>£19.30 pp</h4>
                <p>(includes insurance premium tax)</p>
              </div>
              <div className='col'>
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              </div>
            </div>
            <p className='blue pl-14'>If you're travelling in Europe, our insurance now covers you for a range of COVID-19 related scenarios to make sure you're covered while away, regardless of any changes to FCDO advice as a result of COVID-19.
              <br />
              <br />
              Travel with confidence with instant cover for everyone on your trip.</p>

            <div className='travelling'>
              <img  alt='' src="ser.png" className='img-fluid' />
              <div>
                <h6 className='blue'>Medical teatment in European destination</h6>
                <p>Even if the FCDO warns against all but essential travel as a result of COVID-19</p>
              </div>
            </div>
            <div className='travelling'>
              <img  alt='' src="ser.png" className='img-fluid' />
              <div>
                <h6 className='blue'>£10 million</h6>
                <p>Medical & emergency repatriation expenses</p>
              </div>
            </div>
            <div className='travelling'>
              <img  alt='' src="ser.png" className='img-fluid' />
              <div>
                <h6 className='blue'>£1,500</h6>
                <p>Baggage & belongings cover</p>
              </div>
            </div>
            <div className='travelling'>
              <img  alt='' src="ser.png" className='img-fluid' />
              <div>
                <h6 className='blue'>£2,000</h6>
                <p>Cancellation cover</p>
              </div>
            </div>
            <hr />
            <h5 className='blue pl-14'>Travel Insurance NOT required</h5>
            <p className='pl-14'>Travel insurance is not compulsory but it highly recommended that you obtain a suitable travel insurance policy for your finacial protection</p>

            <div className="lead">
              <h5>Add transfers <img  alt='' src="img.png" className='img-fluid mx-2' /></h5>
            </div>
            <div className='safe'>
              <p>Safe, secure and cost effective return transfer options to suit all budgets.</p>
              <p> <img  alt='' src="ser.png" className='img-fluid' /> <b>Save up to 80% </b> when booked in advance</p>
              <p> <img  alt='' src="ser.png" className='img-fluid' /> <b> Free cancellation </b>  on parking up to 7 days before departure</p>

              <div className='row py-3 service'>
                <div className='col-7'>
                  <h5 className='blue'>Off-Site Parking</h5>
                  <p className='blue'>Purple Parking Summer Special <br />
                    <br />
                    Transfers every 20 mins</p>
                </div>
                <div className='col-4'>
                  <h4 className='blue'>£98.69 pp</h4>
                </div>
                <div className='col-1'>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                </div>
              </div>
              <div className='row py-3 service'>
                <div className='col-7'>
                  <h5 className='blue'>Off-Site Parking</h5>
                  <p className='blue'>Purple Parking Summer Special <br />
                    <br />
                    Transfers every 20 mins</p>
                </div>
                <div className='col-4'>
                  <h4 className='blue'>£98.69 pp</h4>
                </div>
                <div className='col-1'>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                </div>
              </div>
              <div className='row py-3 service active'>
                <div className='col-7'>
                  <h5 className='blue'>Off-Site Parking</h5>
                  <p className='blue'>Purple Parking Summer Special <br />
                    <br />
                    Transfers every 20 mins</p>
                </div>
                <div className='col-4'>
                  <h4 className='blue'>£98.69 pp</h4>
                </div>
                <div className='col-1'>
                  <input class="form-check-input" checked type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                </div>
              </div>
              <div className='row py-5 service'>
                <div className='col-7'>
                  <h5 className='blue'>No parking required</h5>
                </div>
              </div>
              <div className='lead'>
                <h5>How to pay <img  alt='' src="img.png" className='img-fluid mx-2' /></h5>
              </div>
              <p className='my-3 blue pl-14'>See full details and make your selection in the checkout.</p>
              <div className='row mb-3'>
                <div className='col-md-4 monthly p-3'>
                  <h4 className='blue'>Pay monthly</h4>
                  <h3 className='blue'>£60.00</h3>
                  <h5 className='gray'>today</h5>
                  <p className='green'>Low deposit</p>
                  <p>then 3 equal monthly payments of £337.07 and a final payment due by 5th Jun 2022</p>
                </div>
                <div className='col-md-4 monthly p-3'>
                  <h4 className='blue'>Pay in installments</h4>
                  <h3 className='blue'>£60.00</h3>
                  <h5 className='gray'>today</h5>
                  <p className='green'>Low deposit</p>
                  <p>then 2 further installments  and a final installment of £1,05.80 due by Jun 2022</p>
                </div>
                <div className='col-md-4 packing p-3'>
                  <h4 className='blue'>Pay in full</h4>
                  <h3 className='blue'>£1,408.25</h3>
                  <h5 className='gray'>today</h5>
                  <p style={{ opacity: 0 }}>Low deposit</p>
                  <p>pay all in one go and start packing!</p>
                </div>
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
            <div className='Secure'>
              <div>
                <h3>Continue to checkout</h3>
                <p>Secure your holiday for just £29 pp</p>
              </div>
              <img  alt='' src="Shape.png" className='img-fluid' />
            </div>
            <div className='emailme mt-3'>
              <h3>Email me this holiday deal</h3>
              <p>I want to subscribe to holiday deals by email</p>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label className="form-check-label" htmlFor="inlineCheckbox2">No</label>
              </div>
              <form className="d-flex">
                <input className="form-control me-2" type="email" placeholder="Enter email address" />
                <button className="btn btn-warning" type="submit">Send</button>
              </form>
              <div className='text-right'>
                <small>Read our <a href rel="noreferrer"> Privacy Policy </a></small>
              </div>
            </div>

            <div className='freec'>
              <h5 className='blue'>Free cancellation on this hotel</h5>
              <p className='blue'>If you cancel your hotel stay more than 28 days before
                you travel you won't pay any cancellation fees for this
                part of the booking. On the Beach administration fees
                will apply and cancellation fees may apply to the flight
                element of your booking, please see
                <a href rel="noreferrer"> Terms & Conditions </a> for more information.</p>
            </div>
            <div className='payments'>
              <img  alt='' src="cardicon.png" className="img-fluid" />
              <div>
                <h5 className='blue'>No card payment fees</h5>
                <p>Pay in full or spread the cost until 28 days before departure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <hr />

  </div>;
}

export default Step1;
