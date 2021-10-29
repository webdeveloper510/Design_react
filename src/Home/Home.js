import React from 'react';
import "./Home.css"
function Home() {
    return (
    <section>
        <div className="banner pt-5">
           <div className="container">
               <div className="row">
                   <div className="col"></div>
                   <div className="col-md-12">
                       <div className="tabs">
                       <ul class="nav nav-tabs custom_tab_style1" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#Profile" type="button" role="tab" aria-controls="home" aria-selected="true">Package Holidays</button>
                            </li>
                            <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Gallery" type="button" role="tab" aria-controls="profile" aria-selected="false">Flights</button>
                            </li>
                            <li class="nav-item" role="presentation">
                            <button class="nav-link" id="flight-tab" data-bs-toggle="tab" data-bs-target="#Flight" type="button" role="tab" aria-controls="flight" aria-selected="false">Hotels</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="Profile" role="tabpanel" aria-labelledby="home-tab">
                             <div className="flighttabs">
                                 <form>
                               <div className="row">
                                    <div className="col-md-3">
                                        <div class="form-group">
                                            <label >From</label>
                                            <input type="text" class="form-control" placeholder="From"/>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div class="form-group">
                                            <label >To</label>
                                            <input type="text" class="form-control" placeholder="To"/>
                                        </div>
                                      </div>
                                      <div className="col-md-2">
                                        <div class="form-group">
                                            <label >Leaving On</label>
                                            <input type="date" class="form-control"/>
                                        </div>
                                      </div>
                                      <div className="col-md-2">
                                        <div class="form-group">
                                            <label >Returning On</label>
                                            <input type="date" class="form-control"/>
                                        </div>
                                      </div>
                                      <div className="col-md-2 text-center">
                                        <div class="form-group">
                                            <label ></label><br/>
                                            <button className="btn btn-warning" type="button">Find</button>
                                        </div>
                                      </div>
                                   </div>
                                  
                                   <div className="row mt-3">
                                       <div className="col-md-3">
                                         <div class="input-group mb-3">
                                           
                                            <select class="form-select" id="inputGroupSelect01">
                                                <option selected>1 Adult</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                         </div>
                                       </div>
                                      
                                       <div className="col-md-3">
                                          <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                                                    <label class="btn btn-outline-secondary">Return</label>

                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                                    <label class="btn btn-outline-secondary">One Way</label>
                                            </div>
                                           </div>
                                           <div className="col-md-3">
                                           <div class="btn-group" role="group" >
                                                    <input type="radio" class="btn-check" name="radio" id="btnradio11" autocomplete="off" checked />
                                                    <label class="btn btn-outline-secondary">Economy</label>

                                                    <input type="radio" class="btn-check" name="radio" id="btnradio12" autocomplete="off" />
                                                    <label class="btn btn-outline-secondary" >Business</label>

                                                    <input type="radio" class="btn-check" name="radio" id="btnradio13" autocomplete="off" />
                                                    <label class="btn btn-outline-secondary" >First</label>
                                            </div>
                                           </div>
                                           <div className="col-md-3">
                                                 <p className="text-white text-center">PRICE MATCH GUARANTEE</p>
                                               </div>
                                           </div>
                                           </form>
                                           </div>
                                         
                                </div>
                            <div class="tab-pane fade " id="Gallery" role="tabpanel" aria-labelledby="profile-tab">
                            <h1>flight</h1>
                                 </div>
                                 <div class="tab-pane fade " id="Flight" role="tabpanel" aria-labelledby="flight-tab">
                                 <h1>flight</h1>
                                 </div>
                               
         
                       </div>
                       <div className="row">
                                             <div className="col-md-4">
                                                <div className="offers">
                                                   <h4>Super savings</h4>
                                                   <p>Save up to <span className="text-yellow">£750 per person </span> on selected holidays to Greece, Spain Portugal & Italy</p>
                                                   <div className="text-right">
                                                        <button className="btn btn-warning" type="button">See Deals</button>
                                                        </div>
                                                    </div>
                                                 </div> 
                                                 <div className="col-md-4">
                                                <div className="offers">
                                                    <h4>Covid Hub</h4>
                                                    <p>See destinations,entry requirements & testing packs</p>
                                                    <div className="text-right">
                                                        <button className="btn btn-warning" type="button">View Hub</button>
                                                        </div>
                                                    </div>
                                                 </div> 
                                                 <div className="col-md-4">
                                                <div className="offers">
                                                     <h4>ATOL Protection</h4>
                                                     <div className="text-right">
                                                        <img style={{ marginTop: '-24px'}} src="Layer.png"width="50px" height="50px"/>
                                                     </div>
                                                     <p>ATOL protection for your peace of mind</p>
                                                    </div>
                                                 </div> 
                                               </div>
                   </div>
                   </div>
                  
         
        </div>
        </div>
        <div className="content text-center">
            <div className="container">
                   <div className="row">
                 <div className="col-md-4">
                      <p>Trustpilot</p>
                     </div>
                     <div className="col-md-4">
                     <p>Package Holiday Experts</p>
                  </div>
                  <div className="col-md-4">
                     <p>Deposits from £30</p>
                  </div>
               </div>
               </div>
           </div>
          
        </div>
           
               {/* second Section */}
               <div className="container">
                   <h3>Package Holiday Deals</h3>
                   <div className="row">
                       <div className="col-md-4">
                          <div className="hotals">
                             <div className="overlay">
                                 <div className="row">
                                    <div className="col-md-8">
                                    <h3>Miami, FL</h3>
                                    <p>25 Mar ... 02 Apr</p>
                                    <p>Sunny Isles Beach, FL</p>
                                    <p>Ramada Plaza Marco Polo Beach</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h1>329</h1>
                                            <p>Delta</p>
                                            </div>    
                                 </div>
                                 <div className="row">
                                    <div className="col-md-6">
                                      <button className="btn ">ADD TO WISHLIST</button>
                                        </div>
                                        <div className="col-md-6">
                                      <button className="btn ">BOOK & SAVE $59</button>
                                        </div>
                                     </div>
                              
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4">
                           <div className="hotals">
                             <div className="overlay">
                                 <div className="row">
                                    <div className="col-md-8">
                                    <h3>Miami, FL</h3>
                                    <p>25 Mar ... 02 Apr</p>
                                    <p>Sunny Isles Beach, FL</p>
                                    <p>Ramada Plaza Marco Polo Beach</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h1>329</h1>
                                            <p>Delta</p>
                                            </div>    
                                 </div>
                                 <div className="row">
                                    <div className="col-md-6">
                                      <button className="btn ">ADD TO WISHLIST</button>
                                        </div>
                                        <div className="col-md-6">
                                      <button className="btn ">BOOK & SAVE $59</button>
                                        </div>
                                     </div>
                              
                                 </div>
                              </div>
                        </div>
                        <div className="col-md-4">
                        <div className="hotals">
                             <div className="overlay">
                                 <div className="row">
                                    <div className="col-md-8">
                                    <h3>Miami, FL</h3>
                                    <p>25 Mar ... 02 Apr</p>
                                    <p>Sunny Isles Beach, FL</p>
                                    <p>Ramada Plaza Marco Polo Beach</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h1>329</h1>
                                            <p>Delta</p>
                                            </div>    
                                 </div>
                                 <div className="row">
                                    <div className="col-md-6">
                                      <button className="btn ">ADD TO WISHLIST</button>
                                        </div>
                                        <div className="col-md-6">
                                      <button className="btn ">BOOK & SAVE $59</button>
                                        </div>
                                     </div>
                              
                                 </div>
                              </div>
                        </div>
                       </div>
               </div>

        </section>
    )
}

export default Home
