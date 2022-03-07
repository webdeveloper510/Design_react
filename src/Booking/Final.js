import { faStar } from '@fortawesome/pro-solid-svg-icons';
import React from 'react';
import StepHeader from './StepHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from "../../public/step4.png"
import clock from "../../public/clock.png"
import hotel from "../../public/hotel.png"
import rightarrow from "../../public/rightarrow.png"
import bluelock from "../../public/bluelock.png"
import card from "../../public/card.png"
import cardicon from "../../public/cardicon.png"
import cardlock from "../../public/cardlock.png"
import easyjet from "../../public/Easyjet.png"
import flights1 from "../../public/flights1.png"
import rightflight from "../../public/rightflight.png"
function Final() {
  return <div >
    <StepHeader />
    <section className='holidays'>
      <div className='container'>
        <div className='row py-2'>
          <div className='col-md-3 '>
            <div className='clock p-1'>
              <img alt='' src={clock} width="80px" className=' m-0' />
              <div className='deal'>
                <h3>29:59</h3>
                <p><b>Left to book this deal! </b></p>
              </div>
            </div>
          </div>
          <div className='col-md-9 process'>
            <img alt='' src={image} className='img-fluid' />
          </div>
        </div>
        <div className='row '>
          <div className='col-md-8 '>
            <div className="lead">
              <h5>Card payment</h5>
            </div>
            <div className='final'>
              <div className='px-3'>
              <h3 className='blue'> <b>Pay £60.00 </b> <span className='today'> today </span></h3>

              <h5 className='p-3 blue'> Future payment breakdown </h5>
              <table className='w-100 table mx-3 blue'>
                <thead>
                  <tr>
                    <th>Due by :</th>
                    <th className='text-center'>Amount:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>5 Mar 2022</td>
                    <td className='text-center'>£337.06</td>
                  </tr>
                  <tr>
                    <td>5 Apr 2022</td>
                    <td className='text-center'>£337.06</td>
                  </tr>
                  <tr>
                    <td>5 May 2022</td>
                    <td className='text-center'>£337.06</td>
                  </tr>
                  <tr>
                    <td>5 Jun 2022</td>
                    <td className='text-center'>£337.06</td>
                  </tr>
                </tbody>
              </table>
              <div className='my-3'>
                <a href='#' className='blue fw-700'>Click here to read important information about deposits.</a> <br/>
                <small>(Holiday availability and price are subject to change)</small>
              </div>
              <div className='row'>
                <div className='col-6 d-flex blue'>
                <img alt="" src={bluelock} class="" width="63px" height="45px"/>
                  <h4 className='mt-4'>Card information</h4>
                </div>
                <div className='col-6 text-right mt-4'>
                  <img alt='' src={card} className='img-fluid' />
                </div>
              </div>
              <hr />
              <div class="mb-3 position-relative">
                <label class="form-label">Card number</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="1234 1234 1234 1234" />
                <img src={cardicon} className='img-fluid cards' />
              </div>
              <div class="row">
                <div class="col">
                  <label>Expiry date</label>
                  <input type="text" class="form-control" placeholder="MM/YY" />
                </div>
                <div class="col position-relative">
                  <label>CVC / CVV</label>
                  <input type="text" class="form-control" placeholder="123" />
                  <img src={cardicon} className='img-fluid cards1' />
                </div>
              </div>
              </div>
              <div className='cardlock text-center'>
                <h3 className='blue'><img src={cardlock} className='img-fluid' /> Pay £60.00</h3>
              </div>
               <div className='px-3'>
              <div class=" mt-3">
                <h5 className='blue'>Important information</h5>
                <p className='blue'>By clicking to confirm your booking, you are agreeing to the following:</p>

                <div className='row'>
                  <div className='col-6'>
                    <p><a href>Supplier booking conditions</a> <br />
                      <a href>Package travel rights</a><br />
                      <a href>Free airport lounge terms</a><br />
                      <a href>Free airport fast track terms</a><br />
                      <a href>Terms of business </a></p>
                  </div>
                  <div className='col-6'>
                    <a href>Insurance policy wording</a> <br />
                    <a href>Insurance terms of business</a> <br />
                    <a href>Insurance product information document</a>
                  </div>
                </div>
              
                <p className='blue'>Please read the following important information on <a href="">COVID-19 requirements </a> concerning entry into England and the requirements which apply in your destination.</p>
              </div>
              </div>
              <div className='surname'>
                <h4 className='blue'>Passenger information</h4>
              </div>
              <div className='px-3'>
              <div className='row'>
                <div className='col-6'>
                  <h5 className='blue'>Lead Passenger</h5>

                  <p className='blue'>
                    Mr john smith (18+) <br />
                    test@test.com<br />
                    0786 554 6789<br />
                    95 Wordsworth Street<br />
                    Hove<br />
                    bn35bj
                  </p>
                </div>
                <div className='col-6'>
                  <h5 className='blue'>Other Passengers</h5>
                  <p className='blue'> Mrs jen smith (18+) </p>

                </div>
              </div>
              <p className='gray'> <b> Edit details</b></p>
            </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='bannerhotal'>
              <img alt='' src={hotel} className='img-fluid' />
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
                <img alt='' src={easyjet} className='img-fluid' />
                <h5 className='blue'>Tue 05 Jul 2022 (EZY 8935)</h5>
                <div className='row'>
                  <div className='col'>
                    <p>London Gatwick <br />
                      <span className='flighttime'>15:45</span>
                    </p>
                  </div>
                  <div className='col-2 '>
                    <img alt='' src={rightflight} className='img-fluid p-2' />
                  </div>
                  <div className='col'>
                    <p>London Gatwick <br />
                      <span className='flighttime'>15:45 (4 hr 35m)</span>
                    </p>
                  </div>
                </div>
                <hr />
                <img alt='' src={easyjet} className='img-fluid' />
                <h5 className='blue'>Tue 05 Jul 2022 (EZY 8935)</h5>
                <div className='row'>
                  <div className='col'>
                    <p>London Gatwick <br />
                      <span className='flighttime'>23:10</span>
                    </p>
                  </div>
                  <div className='col-2'>
                    <img alt='' src={flights1} className='img-fluid p-2' />
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
                    <img alt='' src={rightarrow} className='img-fluid' />
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
              <div className='freec'>
                <h5 className='blue'>Free cancellation on this hotel</h5>
                <p className='blue'>If you cancel your hotel stay more than 28 days before
                  you travel you won't pay any cancellation fees for this
                  part of the booking. On the Beach administration fees
                  will apply and cancellation fees may apply to the flight
                  element of your booking, please see
                  <a href rel="noreferrer"> Terms & Conditions </a> for more information.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />

  </div>;
}

export default Final;
