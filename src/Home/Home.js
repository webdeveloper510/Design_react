import React from 'react';
import "./Home.css"
import { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
function Home() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=1) {
    decrementCounter = () => setCounter(1);
  }
  const [counter1, setCounter1] = useState(1);
  const incrementCounter1 = () => setCounter1(counter1 + 1);
  let decrementCounter1 = () => setCounter1(counter1 - 1);
  if(counter1<=1) {
    decrementCounter1 = () => setCounter1(1);
  }
  const [counter2, setCounter2] = useState(1);
  const incrementCounter2 = () => setCounter2(counter2 + 1);
  let decrementCounter2 = () => setCounter2(counter2 - 1);
  if(counter2<=1) {
    decrementCounter2 = () => setCounter(1);
  }
  function toggleNumbers(){
    console.log('here')
    var x = document.getElementById("filterss");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
  function open(){
    console.log('here')
    var x = document.getElementById("dates");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
  function toggleNumbers1(){
    console.log('here')
    var x = document.getElementById("filterss1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
  function toggleNumbers2(){
    console.log('here')
    var x = document.getElementById("filterss2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
    return (
    <section>
        <div className="banner pt-5">
           <div className="container">
               <div className="row">
                   <div className="col"></div>
                   <div className="col-md-12">
                        <div className="row mt-5 pt-5">
                          <div className="col-md-9">
                          <div className="lists">
                      <ul> 
                        <li className="holiday-data lists1"> Holidays  <div className="Holidays1">
                          <div className="arrow-up"></div>
                           <div className="row">
                             <div className="col-md-4">
                               <h4 className="mb-4">Featured Holidays</h4>
                               <img src="menu.png" className="mt-2 mb-2" height="158px" width="80%"/>
                               <ul class="list-group list-group-flush first-list">
                                  <li class="list-group-item"> <a href="#">Holidays to Greecs & Cyprus  &nbsp;&nbsp; > </a></li>
                                  </ul>
                               </div>
                               <div className="col-md-4">
                               <h4 className="mb-4">Holidays </h4>
                               <ul class="list-group list-group-flush">
                                  <li class="list-group-item first"><a href="#">All-inclusive Holidays &nbsp;&nbsp; > </a></li>
                                  <li class="list-group-item"><a href="#">Beach Holidays &nbsp;&nbsp; > </a></li>
                                  <li class="list-group-item"><a href="#">Family Holidays &nbsp;&nbsp; > </a></li>
                                  <li class="list-group-item last"><a href="#"> Adult Holidays &nbsp;&nbsp; > </a></li>
                                 
                                </ul>
                                 </div>
                                 <div className="col-md-4">
                                 <h4 className="mb-4" style={{opacity:0}}>Holidays </h4>
                               <ul class="list-group list-group-flush">
                                  <li class="list-group-item first"><a href="#">Balaerics Holidays &nbsp;&nbsp; > </a></li>
                                  <li class="list-group-item"><a href="#">Canaries Holidays &nbsp;&nbsp; > </a></li>
                                  <li class="list-group-item"><a href="#">Spain Holidays &nbsp;&nbsp; > </a></li>
                                  <li class="list-group-item last"><a href="#"> USA Holidays &nbsp;&nbsp; > </a></li>
                                  
                                </ul>
                                 </div>
                             </div>
                            
                             <div className="text-right">
                             <ul class="list-group list-group-flush ">
                                  <li class="list-group-item"><a href="#"> ALL HOLIDAYS  &nbsp;&nbsp; > </a></li>
                                  </ul>
                                  </div>
                         </div></li>
                        <li className="lists1">Flights</li>
                        <li className="lists1">Hostels </li>
                        <li className="lists1">Deals </li>
                        <li className="lists1">Extras</li>
                      </ul>
                       </div>
                            </div>
                            <div className="col-md-3">
                            {/* <div className="weather">
                              <div className="row">
                                  <div className="col-8">
                                  <h4>Paphos,CYP</h4>
                              <small style={{fontSize:"12px" }}>9 Aug, Mon - Sunny/Cloudy</small>
                                    </div>
                                    <div className="col-4">
                                      <p className="weather-time">12:43</p>
                                      </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                       <p className="celc">+25</p>
                                      </div>
                                      <div className="col-6 text-center">
                                      <i class='fa fa-cloud-sun fa-flip-horizontal'></i>
                                        </div>
                                  </div>
                                    
                                    </div> */}
                              </div>
                          </div>
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
                                        <div className="suggection ">
                                        <div className="flush"></div>
                                          <ul class="list-group list-group-flush">
                                            <li class="list-group-item">An item</li>
                                            <li class="list-group-item">A second item</li>
                                            <li class="list-group-item">A third item</li>
                                            <li class="list-group-item">A fourth item</li>
                                            <li class="list-group-item">And a fifth one</li>
                                          </ul>
                                        </div>
                                      </div>
                                    
                                      <div className="col-md-3">
                                        <div class="form-group">
                                            <label >Departure Airport</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div className="suggection1 ">
                                        <div className="flush"></div>
                                          <ul class="list-group list-group-flush">
                                            <li class="list-group-item">An item</li>
                                            <li class="list-group-item">A second item</li>
                                            <li class="list-group-item">A third item</li>
                                            <li class="list-group-item">A fourth item</li>
                                            <li class="list-group-item">And a fifth one</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="col-md-2">
                                        <div class="form-group">
                                            <label >Departure Date</label>
                                            <input type="date" class="form-control" readOnly onClick={open}/>
                                            <i class="fa fa-calendar" onClick={open} aria-hidden="true"></i>
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
                                  
                                   <div className="row ">
                                       <div className="col-md-4">
                                       <div class="input-group mb-3">
                                         {/* <div className="Filters" id="filterss" style={{display:'none'}}>
                                         <div className="bottom-arrow"></div>
                                         <div className="row">
                                               <div className="col-4">
                                                    <p className="m-0">Adult</p>
                                                    <small style={{fontSize:"10px"}}>(12+)</small>
                                                 </div>
                                                 <div className="col-8">
                                                 <div className="d-flex justify-content-end"><span className="sum"><button className="btn btn-sm btn-primary"onClick={decrementCounter} type="button"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></span><span className="value">{counter}</span><span className="add"><button className="btn btn-sm btn-primary" onClick={incrementCounter} type="button"><i class="fa fa-plus-circle"></i></button></span></div>
                                                   </div>
                                           </div>
                                           <div className="row">
                                               <div className="col-4">
                                                    <p className="m-0"> Children</p>
                                                    <small style={{fontSize:"10px"}}>(2-11)</small>
                                                 </div>
                                                 <div className="col-8">
                                                 <div className="d-flex justify-content-end"><span className="sum"><button className="btn btn-sm btn-primary"onClick={decrementCounter1} type="button"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></span><span className="value">{counter1}</span><span className="add"><button className="btn btn-sm btn-primary" onClick={incrementCounter1} type="button"><i class="fa fa-plus-circle"></i></button></span></div>
                                                   </div>
                                           </div>
                                           <div className="row">
                                               <div className="col-4">
                                                    <p className="m-0">Infants</p>
                                                    <small style={{fontSize:"10px"}}>(0-23 Mths)</small>
                                                 </div>
                                                 <div className="col-8">
                                                 <div className="d-flex justify-content-end"><span className="sum"><button className="btn btn-sm btn-primary"onClick={decrementCounter2} type="button"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></span><span className="value">{counter2}</span><span className="add"><button className="btn btn-sm btn-primary" onClick={incrementCounter2} type="button"><i class="fa fa-plus-circle"></i></button></span></div>
                                                   </div>
                                           </div>
                                            
                                           </div> */}
                                        <button class="btn btn-secondary " onClick={toggleNumbers}  type="button"><img src="filter.png"/></button>
                                       
                                        <input type="text" class="form-control" aria-label="Text input with dropdown button"/>
                                      </div>
                                       </div>
                                      
                                       <div className="col-md-2">
                                         
                                           </div>
                                           <div className="col-md-3">
                                          
                                           </div>
                                           <div className="col-md-3">
                                                 <p className="text-white text-center"> <i class="fa fa-check-circle" style={{fontSize: '20px'}}></i>ATOL PROTECTED</p>
                                               </div>
                                           </div>
                                           <div class="filterss1" tabindex="-1" id="filterss" style={{display:'none'}}>
                                                  <div class="">
                                                    <div class="modal-content">
                                                      <div class="modal-header">
                                                        <h5 class="modal-title text-dark">Holidays</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleNumbers}></button>
                                                      </div>
                                                      <div class="modal-body text-dark">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                              <label>Number of rooms</label>
                                                                <select class="form-select" id="inputGroupSelect01">
                                                                  <option selected>I don't mind</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                </select>
                                                              </div>
                                                              <div className="col-md-2">
                                                              <label>Adults</label>
                                                                <select class="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                </select>

                                                                </div>
                                                                <div className="col-md-2">
                                                                <label>Children (0-17)</label>
                                                                <select class="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                  <option value="10">10</option>
                                                                  <option value="11">11</option>
                                                                  <option value="12">12</option>
                                                                  <option value="13">13</option>
                                                                  <option value="14">14</option>
                                                                  <option value="15">15</option>
                                                                  <option value="16">16</option>
                                                                  <option value="17">17</option>
                                                                 
                                                                </select>

                                                                </div>
                                                          </div>
                                                          <div className="row">
                                                               <div className="col-md-4"></div>
                                                               <div className="col-md-4 mt-3">
                                                                 <p>Child ages</p>
                                                                 <p>Please enter the ages of the children travelling (0 -17) on return date </p>
                                                                 <div className="row">
                                                                      <div className="col-md-4">
                                                                      <label>Child 1</label>
                                                                      <select class="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                  <option value="10">10</option>
                                                                  <option value="11">11</option>
                                                                  <option value="12">12</option>
                                                                  <option value="13">13</option>
                                                                  <option value="14">14</option>
                                                                  <option value="15">15</option>
                                                                  <option value="16">16</option>
                                                                  <option value="17">17</option>
                                                                 
                                                                </select>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                        <label>Child 2</label>
                                                                      <select class="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                  <option value="10">10</option>
                                                                  <option value="11">11</option>
                                                                  <option value="12">12</option>
                                                                  <option value="13">13</option>
                                                                  <option value="14">14</option>
                                                                  <option value="15">15</option>
                                                                  <option value="16">16</option>
                                                                  <option value="17">17</option>
                                                                 
                                                                </select>
                                                                        </div>
                                                                   </div>
                                                               </div>
                                                            </div>
                                                      </div>
                                                      <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleNumbers}>Clear All</button>
                                                        <button type="button" class="btn btn-primary">Done</button>
                                                      </div>
                                                    </div>
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
                                        <div className="suggection ">
                                        <div className="flush"></div>
                                          <ul class="list-group list-group-flush">
                                            <li class="list-group-item">An item</li>
                                            <li class="list-group-item">A second item</li>
                                            <li class="list-group-item">A third item</li>
                                            <li class="list-group-item">A fourth item</li>
                                            <li class="list-group-item">And a fifth one</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div class="form-group">
                                            <label >Departure Airport</label>
                                            <input type="text" class="form-control" placeholder="To"/>
                                        </div>
                                        <div className="suggection1 ">
                                        <div className="flush"></div>
                                          <ul class="list-group list-group-flush">
                                            <li class="list-group-item">An item</li>
                                            <li class="list-group-item">A second item</li>
                                            <li class="list-group-item">A third item</li>
                                            <li class="list-group-item">A fourth item</li>
                                            <li class="list-group-item">And a fifth one</li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="col-md-2">
                                        <div class="form-group">
                                            <label >Check-in</label>
                                            <input type="date" class="form-control" readOnly onClick={open}/>
                                            <i class="fa fa-calendar" onClick={open} aria-hidden="true"></i>
                                        </div>
                                      </div>
                                      <div className="col-md-2">
                                        <div class="form-group">
                                            <label >Check-out</label>
                                            <input type="date" class="form-control" readOnly onClick={open}/>
                                            <i class="fa fa-calendar" onClick={open} aria-hidden="true"></i>
                                        </div>
                                      </div>
                                      <div className="col-md-2 text-center">
                                        <div class="form-group">
                                            <label ></label><br/>
                                            <button className="btn btn-warning" type="button">Find</button>
                                        </div>
                                      </div>
                                   </div>
                                  
                                   <div className="row ">
                                       <div className="col-md-3">
                                       <div class="input-group mb-3">
                                       {/* <div className="Filters" id="filterss1" style={{display:'none'}}>
                                         <div className="bottom-arrow"></div>
                                         <div className="row">
                                               <div className="col-4">
                                                    <p className="m-0">Adult</p>
                                                    <small style={{fontSize:"10px"}}>(12+)</small>
                                                 </div>
                                                 <div className="col-8">
                                                 <div className="d-flex justify-content-end"><span className="sum"><button className="btn btn-sm btn-primary"onClick={decrementCounter} type="button"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></span><span className="value">{counter}</span><span className="add"><button className="btn btn-sm btn-primary" onClick={incrementCounter} type="button"><i class="fa fa-plus-circle"></i></button></span></div>
                                                   </div>
                                           </div>
                                           <div className="row">
                                               <div className="col-4">
                                                    <p className="m-0"> Children</p>
                                                    <small style={{fontSize:"10px"}}>(2-11)</small>
                                                 </div>
                                                 <div className="col-8">
                                                 <div className="d-flex justify-content-end"><span className="sum"><button className="btn btn-sm btn-primary"onClick={decrementCounter1} type="button"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></span><span className="value">{counter1}</span><span className="add"><button className="btn btn-sm btn-primary" onClick={incrementCounter1} type="button"><i class="fa fa-plus-circle"></i></button></span></div>
                                                   </div>
                                           </div>
                                           <div className="row">
                                               <div className="col-4">
                                                    <p className="m-0">Infants</p>
                                                    <small style={{fontSize:"10px"}}>(0-23 Mths)</small>
                                                 </div>
                                                 <div className="col-8">
                                                 <div className="d-flex justify-content-end"><span className="sum"><button className="btn btn-sm btn-primary"onClick={decrementCounter2} type="button"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></span><span className="value">{counter2}</span><span className="add"><button className="btn btn-sm btn-primary" onClick={incrementCounter2} type="button"><i class="fa fa-plus-circle"></i></button></span></div>
                                                   </div>
                                           </div>
                                            
                                           </div> */}
                                        <button class="btn btn-secondary " onClick={toggleNumbers1} type="button" ><img src="filter.png"/></button>
                                       
                                        <input type="text" class="form-control" aria-label="Text input with dropdown button"/>
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
                                           <div class="filterss1" tabindex="-1" id="filterss1" style={{display:'none'}}>
                                                  <div class="">
                                                    <div class="modal-content">
                                                      <div class="modal-header">
                                                        <h5 class="modal-title text-dark">Rooms & Guests</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleNumbers1}></button>
                                                      </div>
                                                      <div class="modal-body text-dark">
                                                        <div className="row">
                                                           
                                                              <div className="col-md-2">
                                                              <label>Adults</label>
                                                                <select class="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                </select>

                                                                </div>
                                                                <div className="col-md-4">
                                                                <label>Children (0-17)</label>
                                                                <select class="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                  <option value="10">10</option>
                                                                  <option value="11">11</option>
                                                                  <option value="12">12</option>
                                                                  <option value="13">13</option>
                                                                  <option value="14">14</option>
                                                                  <option value="15">15</option>
                                                                  <option value="16">16</option>
                                                                  <option value="17">17</option>
                                                                 
                                                                </select>

                                                                </div>
                                                          </div>
                                                          <div className="row">
                                                               <div className="col-md-2"></div>
                                                               <div className="col-md-4 mt-3">
                                                                 <p>Child ages</p>
                                                                 <p>Please enter the ages of the children travelling (0 -17) on return date </p>
                                                                 <div className="row">
                                                                      <div className="col-md-4">
                                                                      <label>Child 1</label>
                                                                      <select class="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                  <option value="10">10</option>
                                                                  <option value="11">11</option>
                                                                  <option value="12">12</option>
                                                                  <option value="13">13</option>
                                                                  <option value="14">14</option>
                                                                  <option value="15">15</option>
                                                                  <option value="16">16</option>
                                                                  <option value="17">17</option>
                                                                 
                                                                </select>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                        <label>Child 2</label>
                                                                      <select class="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                  <option value="10">10</option>
                                                                  <option value="11">11</option>
                                                                  <option value="12">12</option>
                                                                  <option value="13">13</option>
                                                                  <option value="14">14</option>
                                                                  <option value="15">15</option>
                                                                  <option value="16">16</option>
                                                                  <option value="17">17</option>
                                                                 
                                                                </select>
                                                                        </div>
                                                                   </div>
                                                               </div>
                                                            </div>
                                                      </div>
                                                      <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleNumbers1}>Clear All</button>
                                                        <button type="button" class="btn btn-primary">Done</button>
                                                      </div>
                                                    </div>
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
                                            <div className="suggection ">
                                        <div className="flush"></div>
                                          <ul class="list-group list-group-flush">
                                            <li class="list-group-item">An item</li>
                                            <li class="list-group-item">A second item</li>
                                            <li class="list-group-item">A third item</li>
                                            <li class="list-group-item">A fourth item</li>
                                            <li class="list-group-item">And a fifth one</li>
                                          </ul>
                                        </div>
                                        </div>
                                      </div>
                                      <div className="col-md-2">
                                        <div class="form-group">
                                            <label >Leaving On</label>
                                            <input type="date" class="form-control" readOnly onClick={open}/>
                                            <i class="fa fa-calendar"onClick={open} aria-hidden="true"></i>
                                        </div>
                                      </div>
                                      <div className="col-md-2">
                                        <div class="form-group">
                                            <label >Returning On</label>
                                            <input type="date" class="form-control" readOnly onClick={open}/>
                                            <i class="fa fa-calendar" onClick={open} aria-hidden="true"></i>
                                        </div>
                                      </div>
                                      <div className="col-md-2 text-center">
                                        <div class="form-group">
                                            <label ></label><br/>
                                            <button className="btn btn-warning" type="button">Find</button>
                                        </div>
                                      </div>
                                   </div>
                                  
                                   <div className="row">
                                       <div className="col-md-3">
                                       <div class="input-group mb-3">
                                       {/* <div className="Filters" id="filterss2" style={{display:'none'}}>
                                         <div className="bottom-arrow"></div>
                                         <div className="row">
                                               <div className="col-4">
                                                    <p className="m-0">Adult</p>
                                                    <small style={{fontSize:"10px"}}>(12+)</small>
                                                 </div>
                                                 <div className="col-8">
                                                 <div className="d-flex justify-content-end"><span className="sum"><button className="btn btn-sm btn-primary"onClick={decrementCounter} type="button"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></span><span className="value">{counter}</span><span className="add"><button className="btn btn-sm btn-primary" onClick={incrementCounter} type="button"><i class="fa fa-plus-circle"></i></button></span></div>
                                                   </div>
                                           </div>
                                           <div className="row">
                                               <div className="col-4">
                                                    <p className="m-0"> Children</p>
                                                    <small style={{fontSize:"10px"}}>(2-11)</small>
                                                 </div>
                                                 <div className="col-8">
                                                 <div className="d-flex justify-content-end"><span className="sum"><button className="btn btn-sm btn-primary"onClick={decrementCounter1} type="button"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></span><span className="value">{counter1}</span><span className="add"><button className="btn btn-sm btn-primary" onClick={incrementCounter1} type="button"><i class="fa fa-plus-circle"></i></button></span></div>
                                                   </div>
                                           </div>
                                           <div className="row">
                                               <div className="col-4">
                                                    <p className="m-0">Infants</p>
                                                    <small style={{fontSize:"10px"}}>(0-23 Mths)</small>
                                                 </div>
                                                 <div className="col-8">
                                                 <div className="d-flex justify-content-end"><span className="sum"><button className="btn btn-sm btn-primary"onClick={decrementCounter2} type="button"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></span><span className="value">{counter2}</span><span className="add"><button className="btn btn-sm btn-primary" onClick={incrementCounter2} type="button"><i class="fa fa-plus-circle"></i></button></span></div>
                                                   </div>
                                           </div>
                                            
                                           </div> */}
                                        <button class="btn btn-secondary" type="button" onClick={toggleNumbers2}><img src="filter.png"/></button>
                                       
                                        <input type="text" class="form-control" aria-label="Text input with dropdown button"/>
                                      </div>
                                       </div>
                                      
                                       <div className="col-md-6 d-flex">
                                       <p className="m-2">Hotel Rating</p> <div class="rating"> <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label> <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label> </div>

                                          
                                           
                                           </div>
                                           <div className="col-md-3">
                                                 <p className="text-white text-center"><i class="fa fa-check-circle"  style={{fontSize: '20px'}}></i>PRICE MATCH GUARANTEE</p>
                                               </div>
                                           </div>
                                           <div class="filterss1" tabindex="-1" id="filterss2" style={{display:'none'}}>
                                                  <div class="">
                                                    <div class="modal-content">
                                                      <div class="modal-header">
                                                        <h5 class="modal-title text-dark">Hotals</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleNumbers2}></button>
                                                      </div>
                                                      <div class="modal-body text-dark">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                              <label>Number of rooms</label>
                                                                <select class="form-select" id="inputGroupSelect01">
                                                                  <option selected>I don't mind</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                </select>
                                                              </div>
                                                              <div className="col-md-2">
                                                              <label>Adults</label>
                                                                <select class="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                </select>

                                                                </div>
                                                                <div className="col-md-2">
                                                                <label>Children (0-17)</label>
                                                                <select class="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                  <option value="10">10</option>
                                                                  <option value="11">11</option>
                                                                  <option value="12">12</option>
                                                                  <option value="13">13</option>
                                                                  <option value="14">14</option>
                                                                  <option value="15">15</option>
                                                                  <option value="16">16</option>
                                                                  <option value="17">17</option>
                                                                 
                                                                </select>

                                                                </div>
                                                          </div>
                                                          <div className="row">
                                                               <div className="col-md-4"></div>
                                                               <div className="col-md-4 mt-3">
                                                                 <p>Child ages</p>
                                                                 <p>Please enter the ages of the children travelling (0 -17) on return date </p>
                                                                 <div className="row">
                                                                      <div className="col-md-4">
                                                                      <label>Child 1</label>
                                                                      <select class="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                  <option value="10">10</option>
                                                                  <option value="11">11</option>
                                                                  <option value="12">12</option>
                                                                  <option value="13">13</option>
                                                                  <option value="14">14</option>
                                                                  <option value="15">15</option>
                                                                  <option value="16">16</option>
                                                                  <option value="17">17</option>
                                                                 
                                                                </select>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                        <label>Child 2</label>
                                                                      <select class="form-select" id="inputGroupSelect01">
                                                                  <option selected>Choose...</option>
                                                                  <option value="1">1</option>
                                                                  <option value="2">2</option>
                                                                  <option value="3">3</option>
                                                                  <option value="4">4</option>
                                                                  <option value="5">5</option>
                                                                  <option value="6">6</option>
                                                                  <option value="7">7</option>
                                                                  <option value="8">8</option>
                                                                  <option value="9">9</option>
                                                                  <option value="10">10</option>
                                                                  <option value="11">11</option>
                                                                  <option value="12">12</option>
                                                                  <option value="13">13</option>
                                                                  <option value="14">14</option>
                                                                  <option value="15">15</option>
                                                                  <option value="16">16</option>
                                                                  <option value="17">17</option>
                                                                 
                                                                </select>
                                                                        </div>
                                                                   </div>
                                                               </div>
                                                            </div>
                                                      </div>
                                                      <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleNumbers2}>Clear All</button>
                                                        <button type="button" class="btn btn-primary">Done</button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                         
                                           </form>
                                           </div>
                                 </div>
                               
         
                       </div>
                       <div class="filterss" tabindex="-1" id="dates" >
                                                  <div class="">
                                                    <div class="modal-content">
                                                      <div class="modal-header">
                                                        <h5 class="modal-title text-dark">Date</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"onClick={open} ></button>
                                                      </div>
                                                      <div class="modal-body text-dark">
                                                       <div className="row">
                                                            <div className="col-md-8">
                                                            <Calendar />
                                                              </div>
                                                              <div className="col-md-4 dayss">
                                                                <h4>How flexible</h4>
                                                                <div class="mb-3 form-check">
                                                                      <input type="radio" class="form-check-input" name="day" />
                                                                      <label class="form-check-label" for="exampleCheck1">Not Flexible</label>
                                                                    </div>
                                                                    <div class="mb-3 form-check">
                                                                      <input type="radio" class="form-check-input" name="day"/>
                                                                      <label class="form-check-label" for="exampleCheck1">+/- 3 Days</label>
                                                                    </div>
                                                                    <div class="mb-3 form-check">
                                                                      <input type="radio" class="form-check-input"name="day"/>
                                                                      <label class="form-check-label" for="exampleCheck1">+/- 7 Days  </label>
                                                                    </div>
                                                                </div>
                                                         </div>
                                                      </div>
                                                     
                                                    </div>
                                                  </div>
                                                </div>
                       <div className="row">
                                             <div className="col-md-4">
                                                <div className="offers">
                                                   <h4>Super savings</h4>
                                                   <p>Save up to <a href="#" className="text-yellow">£750 per person </a> on selected holidays to Greece, Spain Portugal & Italy</p>
                                                   <div className="deals">
                                                        <button className="btn btn-warning" type="button">See Deals</button>
                                                        </div>
                                                    </div>
                                                 </div> 
                                                 <div className="col-md-4">
                                                <div className="offers">
                                                    <h4>Covid Hub</h4>
                                                    <p>See <a href="#" className="text-yellow">destinations,entry requirements</a> & <a href="#" className="text-yellow">testing packs</a></p>
                                                    <div className="deals">
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
                       <div className="col-md-4">
                          <div className="hotals">
                           
                         
                          <div className="overlay">
                                 <div className="row p-2">
                                    <div className="col-md-8 col-8">
                                    <h5>Miami, FL</h5>
                                    <p>25 Mar ... 02 Apr</p>
                                    <p> <span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span>Sunny Isles Beach, FL<br/> Ramada Plaza Marco Polo Beach</p>
                                        </div>
                                        <div className="col-md-4 col-4 text-right">
                                            <h3><span className="youro">£</span> 329</h3>
                                            <div className="text-right mt-4">
                                          
                                              <p>   <i class="fa fa-plane"></i> Delta</p>
                                            </div>
                                            </div>    
                                 </div>
                                 <div className="row red">
                                    <div className="col-md-6 col-6" style={{padding:'0px'}}>
                                      <button className="btn form-control ">ADD TO WISHLIST</button>
                                        </div>
                                        <div className="col-md-6 col-6 "  style={{padding:'0px'}}>
                                        <button className="btn btn-primary form-control">BOOK & SAVE $59</button>
                                        </div>
                                     </div>
                                     </div>
                                
                              </div>
                           </div>
                           <div className="col-md-4">
                           <div className="hotals">
                           <div className="overlay">
                                 <div className="row p-2">
                                    <div className="col-md-8 col-8">
                                    <h5>Miami, FL</h5>
                                    <p>25 Mar ... 02 Apr</p>
                                    <p><span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span>Sunny Isles Beach, FL<br/> Ramada Plaza Marco Polo Beach</p>
                                        </div>
                                        <div className="col-md-4 col-4 text-right">
                                            <h3><span className="youro">£</span> 329</h3>
                                            <div className="text-right mt-4">
                                            
                                              <p> <i class="fa fa-plane"></i> Delta</p>
                                            </div>
                                            </div>    
                                 </div>
                                 <div className="row red">
                                    <div className="col-md-6 col-6" style={{padding:'0px'}}>
                                      <button className="btn form-control red">ADD TO WISHLIST</button>
                                        </div>
                                        <div className="col-md-6 col-6" style={{padding:'0px'}}>
                                        <button className="btn btn-primary form-control">BOOK & SAVE $59</button>
                                        </div>
                                     </div>
                              
                                 </div>
                              </div>
                        </div>
                        <div className="col-md-4">
                        <div className="hotals">
                             <div className="overlay">
                                 <div className="row p-2">
                                    <div className="col-md-8 col-8">
                                    <h5>Miami, FL</h5>
                                    <p>25 Mar ... 02 Apr</p>
                                    <p><span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span>Sunny Isles Beach, FL<br/> Ramada Plaza Marco Polo Beach</p>
                                        </div>
                                        <div className="col-md-4 col-4 text-right">
                                            <h3><span className="youro">£</span> 329</h3>
                                            <div className="text-right mt-4">
                                           
                                              <p>  <i class="fa fa-plane"></i>Delta</p>
                                            </div>
                                            </div>    
                                 </div>
                                 <div className="row red">
                                    <div className="col-md-6 col-6" style={{padding:'0px'}}>
                                      <button className="btn form-control ">ADD TO WISHLIST</button>
                                        </div>
                                        <div className="col-md-6 col-6" style={{padding:'0px'}}>
                                        <button className="btn btn-primary form-control">BOOK & SAVE $59</button>
                                        </div>
                                     </div>
                              
                                 </div>
                              </div>
                        </div>
                       </div>
               </div>
               <div className="container">
                 <h3  className="my-5">I am looking for...?</h3>
                  <div className="row">
                    <div className="col-md-6">
                        <div className="family">
                        <div className="bannerpack">
                                <h3>Family Holidays </h3>
                             </div>
                         <div className="overlay1">
                         
                           <div className="row">
                             <div className="col-md-7 col-7">
                             <p>last minute deals <br/>
                                from £129 per person</p>
                             </div>
                              <div className="col-md-5 mt-3 col-5 text-right">
                                <button className="btn btn-primary" type="button">Search Deals
                                  </button>
                              </div>
                           </div>
                           </div>
                          </div>
                      </div>
                      <div className="col-md-2">
                        <div className="flight">
                      <div className="bannerpack">
                                <h3>Flights  </h3>
                             </div>
                             </div>
                       
                        </div>
                        <div className="col-md-4">
                            <div className="holiday">
                            <div className="bannerpack">
                                <h3>All Inclusive Holidays   </h3>
                             </div>
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
                 <h3 className="my-5">Featured Destinations</h3>
                 <div className="row">
                   <div className="col-md-8 overhead">
                       <img src="Layer4.png" className="img-fluid w-100"/>
                       <div className="over1">
                          <h3>Holidays to Greece & cyprus</h3>
                          <p>Amazing deals on all-inclusive holidays with<br/>
                              up to £750 off per couple and<br/>
                              1000’s of free kid’s places</p>
                              
                               <button className="btn btn-primary float-right" type="button">Search &nbsp;&nbsp; > </button>
                               
                         </div>
                     </div>
                     <div className="col-md-4 overhead">
                     <img src="Layer3.png" className="img-fluid w-100"/>
                     <div className="over">
                      <h3>Italy & the lakes</h3>
                      <p>Culture, beauty, beaches & sights<br/>
                          From Italy with love...</p>
                          <button className="btn btn-primary float-right" type="button">Search &nbsp;&nbsp; > </button>
                               
                         </div>
                       </div>
                       </div>
                  
                   <div className="row my-2">
                  
                     <div className="col-md-4 overhead">
                     <img src="Layer1.png" className="img-fluid w-100"/>
                     <div className="over">
                      <h3>Carribean</h3>
                      <p>Shimmering reefs, spicy salsa, reggae,<br/> pirate hideouts to sugar sand beaches</p>
                      <button className="btn btn-primary float-right" type="button">Search &nbsp;&nbsp; > </button>
                               
                         </div>
                     </div>
                      
                       <div className="col-md-8 overhead">
                       <img src="Layer2.png" className="img-fluid w-100"/>
                       <div className="over1">
                          <h3>Holidays to the Balearic Islands</h3>
                          <p>Majorca, Ibiza & Menorca. Beautiful coves<br/>
                            & historic old towns make<br/> these Islands the perfect getaway</p>
                            <button className="btn btn-primary float-right" type="button">Search &nbsp;&nbsp; > </button>
                               
                         </div>
                     </div>
                 
                   </div>
                   </div>
                  
                  <div className="summer">
                    <div className="container">
                    <div className="row">
                      <div className="col-md-1"></div>
                       <div className="col-md-5">
                           <div className="summer-text">
                             <h3 className="mb-5">Book now for Summer 2022</h3>
                             <p className="mb-5">With our safe booking policy, it’s now even more secure to book your 2022 holidays.
                                  <br/><br/>
                                  Search now and secure your next holiday with low deposits starting from £30 per person.</p>
                                  <button className="btn btn-primary btn-lg" type="button">Search Holidays &nbsp;&nbsp; > </button>                             </div>
                         </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <h3 className="my-3 px-4">Popular Destinations</h3>
                    <div className="row text-darkblue">
                       <div className="col-md-3 px-5">
                         <p><a href="">Ibiza </a><br/>
                         <a href="#"> Majorca</a><br/>
                         <a href="#">Crete</a><br/>
                         <a href="#"> Cyprus</a><br/>
                         <a href="#"> Portugal</a><br/>
                         <a href="#"> Turkey</a><br/>
                         <a href="#"> Greece</a><br/>
                         <a href="#"> Zante</a>
                            </p>
                         </div>
                         <div className="col-md-3 px-5">
                         <p><a href="">Ibiza</a><br/>
                         <a href="#"> Majorca</a><br/>
                         <a href="#"> Crete</a><br/>
                         <a href="#">Cyprus</a><br/>
                         <a href="#">Portugal</a><br/>
                         <a href="#"> Turkey</a><br/>
                         <a href="#">Greece</a><br/>
                         <a href="#"> Zante</a>
                            </p>
                         </div>
                         <div className="col-md-3 px-5">
                         <p><a href="">Ibiza</a><br/>
                         <a href="#"> Majorca</a><br/>
                         <a href="#"> Crete</a><br/>
                         <a href="#"> Cyprus</a><br/>
                         <a href="#">  Portugal</a><br/>
                         <a href="#"> Turkey</a><br/>
                         <a href="#"> Greece</a><br/>
                         <a href="#">  Zante</a>
                            </p>
                         </div>
                         <div className="col-md-3 px-5">
                         <p><a href="">Ibiza</a><br/>
                         <a href="#">Majorca</a><br/>
                         <a href="#">Crete</a><br/>
                         <a href="#">Cyprus</a><br/>
                         <a href="#">Portugal</a><br/>
                         <a href="#">Turkey</a><br/>
                         <a href="#">Greece</a><br/>
                         <a href="#">Zante</a>
                            </p>
                         </div>
                      </div>
                  </div>
                     
                     <div className="Contacting">
                  <div className="container">
                    <div className="row last-section py-4">
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
                                    <div className="float-right">
                                     <img src="chat.png" width="50px" height="50px"/>
                                      </div> 
                                    <a href="#">Chat with us online</a>
                            </div>
                            <div className="col-md-4 px-5">
                              <h4 className="text-center my-3">Ask a Question?</h4>
                              <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                              </form>
                              <ul class="list-group my-4">
                                <li class="list-group-item"> <a href="#">Airline Baggage Fees</a></li>
                                <li class="list-group-item"><a href="#">Online Flight Check-in</a></li>
                                <li class="list-group-item"><a href="#">Covid 19 Travel Advisories</a></li>
                                <li class="list-group-item"><a href="#">Cancellation Policy</a></li>
                                <li class="list-group-item"><a href="#">Airport Security</a></li>
                              </ul>
                              </div>
                      </div>
                  </div>
                  </div>
                  
     

        </section>
    )
}

export default Home
