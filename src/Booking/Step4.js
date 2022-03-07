import React from 'react';
import StepHeader from './StepHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,  } from '@fortawesome/pro-solid-svg-icons';
import image from "../../public/step4.png"
import clock from "../../public/clock.png"
import hotel from "../../public/hotel.png"
import rightarrow from "../../public/rightarrow.png"
import img from "../../public/img.png"
import Shape from "../../public/Shape.png"
import easyjet from "../../public/Easyjet.png"
import flights1 from "../../public/flights1.png"
import rightflight from "../../public/rightflight.png"
function Step4() {
  return <div >
    <StepHeader />
    <section className='holidays'>
      <div className='container'>
        <div className='row py-2'>
          <div className='col-md-3 '>
            <div className='clock p-1'>
              <img  alt='' src={clock} width="80px" className=' m-0' />
              <div className='deal'>
                <h3>29:59</h3>
                <p><b>Left to book this deal! </b></p>
              </div>
            </div>
          </div>
          <div className='col-md-9 process'>
            <img  alt='' src={image} className='img-fluid' />
          </div>
        </div>
        <div className='row '>
          <div className='col-md-8 '>
            <div className="lead">
              <h5>Lead Passenger Contact Details <img  alt='' src={img} className='img-fluid mx-2' /></h5>
            </div>
            <div className='passenger'>
              <p className='px-3'>We can only discuss this booking with the lead or authorised passengers</p>
              <div className='number'>
                <div className='px-3'>

                  <div class="mb-3 col-md-7">
                    <label>Phone Number*</label>
                    <input className='form-control' type="text" placeholder=" enter number" />
                  </div>
                  <div class="mb-3 col-md-7">
                    <label>Last Name*</label>
                    <input className='form-control' type="text" placeholder=" enter name" />
                  </div>
                  <div class="form-check col-md-7">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label class="form-check-label blue" for="invalidCheck">
                      I would like to receive offers from Suntours
                    </label>
                  </div>
                  <div className='col-md-7 text-right'>
                    <a href className='blue fw-700'>Privacy Policy</a>
                  </div>
                </div>
                <div className='bill'>
                  <h4>Billing Address</h4>
                </div>
                <div className='px-3'>
                  <div className='row'>
                    <div className='col-6'>
                      <div class="mb-3">
                        <label>Postcode*</label>
                        <input className='form-control mb-3' type="text" placeholder=" enter postcode" />
                        <a href >I’m in Ireland</a>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div style={{ marginTop: '1.9rem' }}>
                        <label></label>
                        <button className='btn btn-primary mb-3' type='button'> Find Address </button> <br />
                        <a href >or enter manually</a>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div class="mb-3">
                        <label>Billing Address*</label>
                        <input className='form-control' type="text" placeholder=" search abover or enter manually" />
                      </div>
                    </div>
                    <div className='col-6'>
                      <div class="mb-3">
                        <label>Town / City*</label>
                        <input className='form-control' type="text" placeholder=" search above or enter manually" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <div className='clock1 p-1'>
                  <img  alt='' src={clock} width="60px" height="60px" className=' mt-2' />
                  <div className='deal1'>
                    <h3 className='blue m-0'> <b> 29:59 </b></h3>
                    <p className='blue'><b>Left to book this deal! </b></p>
                  </div>
                </div>
              </div>
              <div className='col-8 text-center Continue'>
                <h3 className='blue'>Continue to checkout <img  alt='' src={Shape} className='img-fluid' /></h3>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='bannerhotal'>
              <img  alt='' src={hotel} className='img-fluid' />
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
                <img  alt='' src={easyjet} className='img-fluid' />
                <h5 className='blue'>Tue 05 Jul 2022 (EZY 8935)</h5>
                <div className='row'>
                  <div className='col'>
                    <p>London Gatwick <br />
                      <span className='flighttime'>15:45</span>
                    </p>
                  </div>
                  <div className='col-2 '>
                    <img  alt='' src={rightflight} className='img-fluid p-2' />
                  </div>
                  <div className='col'>
                    <p>London Gatwick <br />
                      <span className='flighttime'>15:45 (4 hr 35m)</span>
                    </p>
                  </div>
                </div>
                <hr />
                <img  alt='' src={easyjet} className='img-fluid' />
                <h5 className='blue'>Tue 05 Jul 2022 (EZY 8935)</h5>
                <div className='row'>
                  <div className='col'>
                    <p>London Gatwick <br />
                      <span className='flighttime'>23:10</span>
                    </p>
                  </div>
                  <div className='col-2'>
                    <img  alt='' src={flights1} className='img-fluid p-2' />
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
                    <img  alt='' src={rightarrow} className='img-fluid' />
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

export default Step4;
