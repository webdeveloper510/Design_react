import React from 'react';
import StepHeader from './StepHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faAngleRight, faStar,  } from '@fortawesome/pro-solid-svg-icons';
import image from "../../public/step2.png"
import clock from "../../public/clock.png"
import easyjet from "../../public/Easyjet.png"
import flights1 from "../../public/flights1.png"
import char from "../../public/Char.png"
import shape from "../../public/Shape.png"
import hotel from "../../public/hotel.png"
import rightflight from "../../public/rightflight.png"
import rightarrow from "../../public/rightarrow.png"

function Step2() {
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
              <h5>Lead passenger (must be 18+)</h5>
            </div>
            <div className='step2body'>
              <div className='discuss pt-4 px-4'>
                <form>
                  <div class="row">
                    <div class="col-2">
                      <label>Title*</label>
                      <select class="form-select mb-3" aria-label=".form-select-lg example">
                        <option selected> </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-4">
                      <label>First Name*</label>
                      <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col-4">
                      <label>Last Name*</label>
                      <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col-2">
                      <label>Age*</label>
                      <select class="form-select  mb-3" aria-label=".form-select-lg example">
                        <option selected> </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div class="mb-3 form-check text-right">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label blue fw-bold" for="exampleCheck1">Apply surname to all passengers</label>
                  </div>
                </form>
              </div>
              <div className='surname'>
                <h5>Passenger 2</h5>
              </div>
              <div className='discuss px-4 pt-4'>
                <form>
                  <div class="row">
                    <div class="col-2">
                      <label>Title*</label>
                      <select class="form-select mb-3" aria-label=".form-select-lg example">
                        <option selected> </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-4">
                      <label>First Name*</label>
                      <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col-4">
                      <label>Last Name*</label>
                      <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col-2">
                      <label>Age*</label>
                      <select class="form-select  mb-3" aria-label=".form-select-lg example">
                        <option selected> </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div class="mb-3 form-check ">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label blue fw-bold" for="exampleCheck1">Authorise this passenger to discuss the booking with Suntours</label>
                  </div>
                </form>
              </div>
              <div className='surname'>
                <h5>Disabled access <img  alt='' src={char} className='img-fluid mx-2' /></h5>
              </div>

              <div className='discuss px-4 pt-4'>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label blue fw-bold" style={{ fontSize: 13 }} for="exampleCheck1">Tick this box if someone in your party requires support with disabled access on your flight, transfer or hotel</label>
                </div>
                <div class="col-md-6">
                  <label className='blue fw-700'>Name of passenger who requires support</label>
                  <select class="form-select  mb-3" aria-label=".form-select-lg example">
                    <option selected> Please select passenger </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <p className='blue fw-700'>Someone in the party requires wheelchair assistance within the airport/one of our party is unable to walk long distances</p>
                <div class="form-check form-check-inline mb-3">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label blue fw-bold" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline mb-3">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label blue fw-bold" for="inlineRadio2">No</label>
                </div>


                <p className='blue fw-700'>Will you bring your own wheelchair?</p>
                <div class="form-check form-check-inline mb-3">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label blue fw-bold" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline mb-3">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label blue fw-bold" for="inlineRadio2">No</label>
                </div>

                <p className='blue fw-700'>Can you walk up and down stairs unaided?</p>
                <div class="form-check form-check-inline mb-3">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label blue fw-bold" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline mb-3">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label blue fw-bold" for="inlineRadio2">No</label>
                </div>

                <p className='blue fw-700'>Are you able to climb a minimum of three steps for your transfer? (if a transfer is selected)</p>
                <div class="form-check form-check-inline mb-3">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label blue fw-bold" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline mb-3">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label blue fw-bold" for="inlineRadio2">No</label>
                </div>
                <div className=''>
                  <p className='blue fw-700'>Please read the hotel description to ensure it is suitable for your needs</p>
                </div>
                <hr />
                <p className='blue fw-700'>Do you require a specially adapted hotel room?</p>
                <div class="form-check form-check-inline mb-3">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label blue fw-bold" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline mb-3">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label blue fw-bold" for="inlineRadio2">No</label>
                </div>

                <p className='blue fw-700'>Does anyone else in your party require support with disabled access on your flight, transfer or hotel?</p>
                <div class="form-check form-check-inline mb-3">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label blue fw-bold" for="inlineRadio1">Yes</label>
                </div>
                <div class="form-check form-check-inline mb-3">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label blue fw-bold" for="inlineRadio2">No</label>
                </div>
              </div>

              <div className='row mt-5'>
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
                  <h3 className='blue'>Continue to checkout <img  alt='' src={shape} className='img-fluid' /></h3>
                </div>
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

export default Step2;
