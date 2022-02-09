import React from 'react';
import StepHeader from './StepHeader';
function Step2() {
  return <div >
    <StepHeader />
    <section className='holidays'>
      <div className='container'>
        <div className='row py-2'>
          <div className='col-md-3 '>
            <div className='clock p-1'>
              <img src="clock.png" width="80px" className=' m-0' />
              <div className='deal'>
                <h3>29:59</h3>
                <p><b>Left to book this deal! </b></p>
              </div>
            </div>
          </div>
          <div className='col-md-9 process'>
            <img src="step2.png" className='img-fluid' />
          </div>
        </div>
        <div className='row '>
          <div className='col-md-8 '>
            <div className="lead">
              <h5>Lead passenger (must be 18+)</h5>
            </div>
           <div className='discuss mt-4'>
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
                  <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                <div class="col-4">
                  <label>Last Name*</label>
                  <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
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
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Apply surname to all passengers</label>
              </div>
             </form>
           </div>
           <div className='surname'>
             <h5>Passenger 2</h5>
           </div>
           <div className='discuss'>
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
                  <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                <div class="col-4">
                  <label>Last Name*</label>
                  <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
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
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Authorise this passenger to discuss the booking with Suntours</label>
              </div>
             </form>
           </div>
           <div className='surname'>
             <h5>Disabled access <img src="Char.png" className='img-fluid mx-2' /></h5>
           </div>
           <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Tick this box if someone in your party requires support with disabled access on your flight, transfer or hotel</label>
              </div>
              <div class="col-md-6">
                  <label>Name of passenger who requires support</label>
                   <select class="form-select  mb-3" aria-label=".form-select-lg example">
                    <option selected> Please select passenger </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                   </select>
                </div>
                <p>Someone in the party requires wheelchair assistance within the airport/one of our party is unable to walk long distances</p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">No</label>
                  </div>


                  <p>Will you bring your own wheelchair?</p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">No</label>
                  </div>

                  <p>Can you walk up and down stairs unaided?</p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">No</label>
                  </div>

                  <p>Are you able to climb a minimum of three steps for your transfer? (if a transfer is selected)</p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">No</label>
                  </div>
                  <div className=''>
                    <p>Please read the hotel description to ensure it is suitable for your needs</p>
                  </div>
                  <hr/>
                  <p>Do you require a specially adapted hotel room?</p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">No</label>
                  </div>

                  <p>Does anyone else in your party require support with disabled access on your flight, transfer or hotel?</p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label class="form-check-label" for="inlineRadio1">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label class="form-check-label" for="inlineRadio2">No</label>
                  </div>

                  <div className='row mt-5'>
              <div className='col-4'>
                <div className='clock1 p-1'>
                  <img src="clock.png" width="80px" className=' m-0' />
                  <div className='deal1'>
                    <h4 className='blue'>29:59</h4>
                    <p className='blue'><b>Left to book this deal! </b></p>
                  </div>
                </div>
              </div>
              <div className='col-8 text-center Continue'>
                <h3>Continue to checkout <img src="Shape.png" className='img-fluid' /></h3>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='bannerhotal'>
              <img src="hotel.png" className='img-fluid' />
              <div className='title'>
                <h3 className='blue'>Queens Bay Hotel
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </h3>
                <h5 className='blue'>Paphos</h5>
                <p className='blue'>Tue 05 Jul 2022, 14 nights, 1x Double or Twin Room <br />
                  with Inland View, Bed & Breakfast<br />
                  <br />
                  Supplied through Five rocks Beach ltd Queens Bay Hotel</p>
                <hr />
                <img src="easyjet.png" className='img-fluid' />
                <h5 className='blue'>Tue 05 Jul 2022 (EZY 8935)</h5>
                <div className='row'>
                  <div className='col'>
                    <p>London Gatwick <br />
                      <span className='flighttime'>15:45</span>
                    </p>
                  </div>
                  <div className='col-2 '>
                    <img src="rightflight.png" className='img-fluid p-2' />
                  </div>
                  <div className='col'>
                    <p>London Gatwick <br />
                      <span className='flighttime'>15:45 (4 hr 35m)</span>
                    </p>
                  </div>
                </div>
                <hr />
                <img src="easyjet.png" className='img-fluid' />
                <h5 className='blue'>Tue 05 Jul 2022 (EZY 8935)</h5>
                <div className='row'>
                  <div className='col'>
                    <p>London Gatwick <br />
                      <span className='flighttime'>23:10</span>
                    </p>
                  </div>
                  <div className='col-2'>
                    <img src="flights1.png" className='img-fluid p-2' />
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
                    <h5>Included</h5>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-2 arrors mt-1'>
                    <img src="rightarrow.png" className='img-fluid' />
                  </div>
                  <div className='col mt-3 text-center'>
                    <h5 className='blue'>FREE Aiport lounge</h5>
                  </div>
                  <div className='col-3 mt-3'>
                    <h5>Included</h5>
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
