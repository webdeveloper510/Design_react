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
                       <div className="lists">
                      <ul> 
                        <li className="holiday-data "> Holidays v  <div className="Holidays1">
                           <div className="row">
                             <div className="col-md-4">
                               <h3>Featured Holidays</h3>
                               <img src="menu.png" className="img-fluid" height="124px"/>
                               <ul class="list-group list-group-flush">
                                  <li class="list-group-item"> Holidays to Greecs & Cyprus &#11166;</li>
                                  </ul>
                               </div>
                               <div className="col-md-4">
                               <h3>Holidays </h3>
                               <ul class="list-group list-group-flush">
                                  <li class="list-group-item">All-inclusive Holidays  &#11166;</li>
                                  <li class="list-group-item">Beach Holidays &#11166;</li>
                                  <li class="list-group-item">Family Holidays &#11166;</li>
                                  <li class="list-group-item"> Adult Holidays &#11166;</li>
                                 
                                </ul>
                                 </div>
                                 <div className="col-md-4">
                                 <h3 style={{opacity:0}}>Holidays </h3>
                               <ul class="list-group list-group-flush">
                                  <li class="list-group-item">Balaerics Holidays &#11166;</li>
                                  <li class="list-group-item">Canaries Holidays &#11166;</li>
                                  <li class="list-group-item">Spain Holidays &#11166;</li>
                                  <li class="list-group-item"> USA Holidays &#11166;</li>
                                  
                                </ul>
                                 </div>
                             </div>
                             <hr/>
                             <div className="text-right">
                               <button className="btn btn-light" type="button">ALL HOLIDAYS &#11166;</button>
                               </div>
                         </div></li>
                        <li>flights v</li>
                        <li>Hostals v</li>
                        <li>Deals v</li>
                        <li>Extras v</li>
                      </ul>
                       </div>
                      
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
                           {/*------------------ Package Holidays section---------------------- */}
                            <div class="tab-pane fade show active" id="Profile" role="tabpanel" aria-labelledby="home-tab">
                             <div className="flighttabs">
                                 <form>
                               <div className="row">
                                    <div className="col-md-3">
                                        <div class="form-group">
                                            <label >Find Holidays in</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div class="form-group">
                                            <label >Departure Airport</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-md-2">
                                        <div class="form-group">
                                            <label >Departure Date</label>
                                            <input type="date" class="form-control"/>
                                        </div>
                                      </div>
                                      <div className="col-md-2">
                                        <div class="form-group">
                                            <label >Nights</label>
                                            <select class="form-select" id="inputGroupSelect01">
                                                <option selected>7 Nights</option>
                                                <option value="1">2 days 2 Nights</option>
                                                <option value="2">3 Days 2 Nights</option>
                                                
                                            </select>
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
                                                <option selected>Children 0, Room 1</option>
                                                <option value="1">Children 1, Room 1</option>
                                                <option value="2">Children 2, Room 2</option>
                                              
                                            </select>
                                         </div>
                                       </div>
                                      
                                       <div className="col-md-3">
                                         
                                           </div>
                                           <div className="col-md-3">
                                          
                                           </div>
                                           <div className="col-md-3">
                                                 <p className="text-white text-center"> <i class="fa fa-check-circle" style={{fontSize: '20px'}}></i>ATOL PROTECTED</p>
                                               </div>
                                           </div>
                                           </form>
                                           </div>
                                         
                                </div>
                                 {/*------------------ Flights section---------------------- */}
                            <div class="tab-pane fade " id="Gallery" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="flighttabs">
                                 <form>
                               <div className="row">
                                    <div className="col-md-3">
                                        <div class="form-group">
                                            <label >Find Holidays in</label>
                                            <input type="text" class="form-control" placeholder="From"/>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div class="form-group">
                                            <label >Departure Airport</label>
                                            <input type="text" class="form-control" placeholder="To"/>
                                        </div>
                                      </div>
                                      <div className="col-md-2">
                                        <div class="form-group">
                                            <label >Check-in</label>
                                            <input type="date" class="form-control"/>
                                        </div>
                                      </div>
                                      <div className="col-md-2">
                                        <div class="form-group">
                                            <label >Check-out</label>
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
                                                <option selected>2 Adult ,1 Room</option>
                                                <option value="1">2 Adult 2 Children ,2 Room</option>
                                                <option value="2">2 Adult 1 Children ,1 Room</option>
                                               
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
                                                 <p className="text-white text-center"> <i class="fa fa-check-circle" style={{fontSize: '20px'}}></i>PRICE MATCH GUARANTEE</p>
                                               </div>
                                           </div>
                                           </form>
                                           </div>
                                 </div>
                                 {/*------------------ hotals section---------------------- */}
                                 <div class="tab-pane fade " id="Flight" role="tabpanel" aria-labelledby="flight-tab">
                                 <div className="flighttabs">
                                 <form>
                               <div className="row">
                                    <div className="col-md-6">
                                        <div class="form-group">
                                            <label >Find accommodation in</label>
                                            <input type="text" class="form-control" />
                                       
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
                                      
                                       <div className="col-md-6 d-flex">
                                       <p className="m-2">Hotel Rating</p> <div class="rating"> <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label> </div>

                                          
                                           
                                           </div>
                                           <div className="col-md-3">
                                                 <p className="text-white text-center"><i class="fa fa-check-circle"  style={{fontSize: '20px'}}></i>PRICE MATCH GUARANTEE</p>
                                               </div>
                                           </div>
                                           </form>
                                           </div>
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
                 <div className="col-md-4 my-3">
                      <p><i class="fa fa-star"></i> Trustpilot</p>
                      <div className="stars">
                      <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                        </div>
                     </div>
                     <div className="col-md-4 my-3 d-flex">
                     <i class="fa fa-lightbulb-o"></i>
                     <p style={{textAlign:"left"}}> Package Holiday <br/>Experts</p>
                  </div>
                  <div className="col-md-4 my-3 d-flex">
                  <i class="fa fa-check-circle"></i>
                   <p style={{textAlign:"left"}}>Deposits from <br/> £30</p>
                  </div>
               </div>
               </div>
           </div>
          
        </div>
           
               {/* second Section */}
               <div className="container ">
                   <h3 className="my-3">Package Holiday Deals</h3>
                   <div className="row">
                       <div className="col-md-4 my-3">
                          <div className="hotals">
                           
                         
                          <div className="overlay">
                                 <div className="row">
                                    <div className="col-8">
                                    <h5>Miami, FL</h5>
                                    <p>25 Mar ... 02 Apr</p>
                                    <p>Sunny Isles Beach, FL<br/> Ramada Plaza Marco Polo Beach</p>
                                        </div>
                                        <div className="col-4 text-right">
                                            <h3><span className="youro">£</span> 329</h3>
                                            <div className="text-right mt-5">
                                          
                                              <p>   <i class="fa fa-plane"></i> Delta</p>
                                            </div>
                                            </div>    
                                 </div>
                                 <div className="row">
                                    <div className="col-6">
                                      <button className="btn ">ADD TO WISHLIST</button>
                                        </div>
                                        <div className="col-6">
                                        <button className="btn btn-primary">BOOK & SAVE $59</button>
                                        </div>
                                     </div>
                                     </div>
                                
                              </div>
                           </div>
                           <div className="col-md-4 my-3">
                           <div className="hotals">
                           <div className="overlay">
                                 <div className="row">
                                    <div className="col-8">
                                    <h5>Miami, FL</h5>
                                    <p>25 Mar ... 02 Apr</p>
                                    <p>Sunny Isles Beach, FL<br/> Ramada Plaza Marco Polo Beach</p>
                                        </div>
                                        <div className="col-4 text-right">
                                            <h3><span className="youro">£</span> 329</h3>
                                            <div className="text-right mt-5">
                                            
                                              <p> <i class="fa fa-plane"></i> Delta</p>
                                            </div>
                                            </div>    
                                 </div>
                                 <div className="row">
                                    <div className="col-6">
                                      <button className="btn ">ADD TO WISHLIST</button>
                                        </div>
                                        <div className="col-6">
                                        <button className="btn btn-primary">BOOK & SAVE $59</button>
                                        </div>
                                     </div>
                              
                                 </div>
                              </div>
                        </div>
                        <div className="col-md-4 my-3">
                        <div className="hotals">
                             <div className="overlay">
                                 <div className="row">
                                    <div className="col-8">
                                    <h5>Miami, FL</h5>
                                    <p>25 Mar ... 02 Apr</p>
                                    <p>Sunny Isles Beach, FL<br/> Ramada Plaza Marco Polo Beach</p>
                                        </div>
                                        <div className="col-4 text-right">
                                            <h3><span className="youro">£</span> 329</h3>
                                            <div className="text-right mt-5">
                                           
                                              <p>  <i class="fa fa-plane"></i>Delta</p>
                                            </div>
                                            </div>    
                                 </div>
                                 <div className="row">
                                    <div className="col-6">
                                      <button className="btn ">ADD TO WISHLIST</button>
                                        </div>
                                        <div className="col-6">
                                        <button className="btn btn-primary">BOOK & SAVE $59</button>
                                        </div>
                                     </div>
                              
                                 </div>
                              </div>
                        </div>
                       </div>
               </div>
               <div className="container">
                 <h3  className="my-3">I am looking for...?</h3>
                  <div className="row">
                    <div className="col-md-6 ">
                        <div className="family">
                         <div className="overlay1">
                           <div className="row">
                             <div className="col-7">
                             <p>last minute deals <br/>
                                from £129 per person</p>
                             </div>
                              <div className="col-5 mt-3 text-right">
                                <button className="btn btn-primary" type="button">Search Deals
                                  </button>
                              </div>
                           </div>
                           </div>
                          </div>
                      </div>
                      <div className="col-md-2 col-4">
                        <img src="pack1.png" className="img-fluid"/>
                        </div>
                        <div className="col-md-4 col-8">
                            <div className="holiday">
                                <div className=" overlay2 text-right">
                                   <button className="btn btn-primary" type="button">
                                   Search Deals
                                   </button>
                                  </div>
                              </div>
                          </div>
                    </div>
               </div>
               <div className="container">
                 <h3 className="my-3">Featured Destinations</h3>
                 <div className="row">
                   <div className="col-md-8">
                       <img src="Layer4.png" className="img-fluid w-100"/>
                       <div className="over1">
                          <h3>Holidays to Greece & cyprus</h3>
                          <p>Amazing deals on all-inclusive holidays with<br/>
                              up to £750 off per couple and<br/>
                              1000’s of free kid’s places</p>
                              <div className="search text-right">
                               <button className="btn btn-primary" type="button">Search  </button>
                                </div>
                         </div>
                     </div>
                     <div className="col-md-4">
                     <img src="Layer3.png" className="img-fluid w-100"/>
                     <div className="over">
                      <h3>Italy & the lakes</h3>
                      <p>Culture, beauty, beaches & sights<br/>
                          From Italy with love...</p>
                          <div className="search text-right">
                               <button className="btn btn-primary" type="button">Search  </button>
                                </div>
                         </div>
                       </div>
                       </div>
                  
                   <div className="row my-4">
                  
                     <div className="col-md-4">
                     <img src="Layer1.png" className="img-fluid w-100"/>
                     <div className="over">
                      <h3>Carribean</h3>
                      <p>Shimmering reefs, spicy salsa, reggae,<br/> pirate hideouts to sugar sand beaches</p>
                      <div className="search text-right">
                               <button className="btn btn-primary" type="button">Search  </button>
                                </div>
                         </div>
                     </div>
                      
                       <div className="col-md-8">
                       <img src="Layer2.png" className="img-fluid w-100"/>
                       <div className="over1">
                          <h3>Holidays to the Balearic Islands</h3>
                          <p>Majorca, Ibiza & Menorca. Beautiful coves<br/>
& historic old towns make<br/> these Islands the perfect getaway</p>
                              <div className="search text-right">
                               <button className="btn btn-primary" type="button">Search  </button>
                                </div>
                         </div>
                     </div>
                 
                   </div>
                   </div>
                  
                  <div className="summer">
                    <div className="container">
                    <div className="row">
                       <div className="col-md-6">
                           <div className="summer-text">
                             <h3>Book now for Summer 2022</h3>
                             <p>With our safe booking policy, it’s now even more secure to book your 2022 holidays.
                                  <br/><br/>
                                  Search now and secure your next holiday with low deposits starting from £30 per person.</p>
                                  <button className="btn btn-primary btn-lg" type="button">Search Holidays</button>                             </div>
                         </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <h3 className="my-3">Popular Destinations</h3>
                    <div className="row text-center">
                       <div className="col-md-3 col-6">
                         <p>Ibiza<br/>
                            Majorca<br/>
                            Crete<br/>
                            Cyprus<br/>
                            Portugal<br/>
                            Turkey<br/>
                            Greece<br/>
                            Zante
                            </p>
                         </div>
                         <div className="col-md-3 col-6">
                         <p>Ibiza<br/>
                            Majorca<br/>
                            Crete<br/>
                            Cyprus<br/>
                            Portugal<br/>
                            Turkey<br/>
                            Greece<br/>
                            Zante
                            </p>
                         </div>
                         <div className="col-md-3 col-6">
                         <p>Ibiza<br/>
                            Majorca<br/>
                            Crete<br/>
                            Cyprus<br/>
                            Portugal<br/>
                            Turkey<br/>
                            Greece<br/>
                            Zante
                            </p>
                         </div>
                         <div className="col-md-3 col-6">
                         <p>Ibiza<br/>
                            Majorca<br/>
                            Crete<br/>
                            Cyprus<br/>
                            Portugal<br/>
                            Turkey<br/>
                            Greece<br/>
                            Zante
                            </p>
                         </div>
                      </div>
                  </div>

                  <div className="container">
                    <div className="row last-section">
                        <div className="col-md-4 px-5">
                         <h4 className="my-3">Contacting us by Email</h4>
                         <p><b>Send us an email with any non-
                              urgent questions. We respond 
                              to inquiries within 48 hours.</b></p>
                              <form>
                              <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Name" />
                              </div>
                              <div class="mb-3">
                                
                                <input type="email" class="form-control" placeholder="Email"/>
                              </div>
                              <div class="mb-3">
                                
                                <input type="text" class="form-control" placeholder="Booking Reference"/>
                              </div>
                              <div class="mb-3">
                                
                              <textarea class="form-control" placeholder="Question" rows="3"></textarea>
                              </div>
                              <div className="mb-3 text-right">
                               <p>All Fields are Required! <button type="submit" class="btn btn-primary">Send</button></p>
                              
                              </div>
                            </form>
                          </div>
                          <div className="col-md-4 px-5">
                              <h4 className="my-3">Contacting us by Phone</h4>
                              <p><b>For urgent assistance please call
                                      our 24hr helpline, please have 
                                      your booking reference to hand.</b></p>
                                <p><b>Call us 24 hours a day, <br/>
                                    7 days a week</b></p>
                                    <h3>0800-200-9900</h3>
                                    <p>Toll-free UK</p>
                                    <hr/>
                                    <h3>020-200-2000</h3>
                                    <p>Outside the UK</p>
                                    <a href="#">Chat with us online</a>
                            </div>
                            <div className="col-md-4 px-5">
                              <h4 className="text-center my-3">Ask a Question?</h4>
                              <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                              </form>
                              <ul class="list-group my-4">
                                <li class="list-group-item">Airline Baggage Fees</li>
                                <li class="list-group-item">Online Flight Check-in</li>
                                <li class="list-group-item">Covid 19 Travel Advisories</li>
                                <li class="list-group-item">Cancellation Policy</li>
                                <li class="list-group-item">Airport Security</li>
                              </ul>
                              </div>
                      </div>
                  </div>

        </section>
    )
}

export default Home
