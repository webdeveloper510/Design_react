import * as React from "react"
import { graphql } from "gatsby"
import Destination from "../Overview/Destination"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSliderComponent from '../router/slider';
import { faPlane, faAngleRight, faStar,  } from '@fortawesome/pro-solid-svg-icons';
import { faCalendarDays, faUser } from '@fortawesome/pro-thin-svg-icons';
import { faLocationDot } from '@fortawesome/pro-regular-svg-icons';
import rome  from "../../public/rome.png";
import beach  from "../../public/beach.png";
import paphos  from "../../public/paphos.png";
import Meze  from "../../public/Meze.png";
import Layer1   from "../../public/Layer1.png";
import Layer2   from "../../public/Layer2.png";
import Layer3   from "../../public/Layer3.png";
import salad   from "../../public/salad.png";
import grilled   from "../../public/grilled.png";
const destination = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const sections = data.markdownRemark.frontmatter
  console.log(sections)

  function toggleNumbers() {
    console.log('here')
    var x = document.getElementById("filterss");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function open() {
    console.log('here1')
    var x = document.getElementById("dates");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// function toggleNumbers1() {
//     console.log('here')
//     var x = document.getElementById("filterss1");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
function toggleNumbers2() {
    console.log('here')
    var x = document.getElementById("filterss2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function toggleNumbers3() {
    console.log('here')
    var x = document.getElementById("Destination");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function toggleNumbers4() {
    console.log('here')
    var x = document.getElementById("flight");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function toggleNumbers5() {
    console.log('here')
    var x = document.getElementById("Airport");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <>
     <Seo title={sections.title} description={sections.description} image={sections.image} url={sections.url} />
        <Header />
    <section className='darkblue'>
        <div className="banner pt-5 darkblue">
           <div className=" narrow">        
               <div className="tabs mt-5">
                
              <div className="container">
              
               <ul className="nav nav-tabs custom_tab_style1" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#Profile" type="button" role="tab" aria-controls="home" aria-selected="true">Flight + Hotel</button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button className="nav-link" id="flight-tab" data-bs-toggle="tab" data-bs-target="#Flight" type="button" role="tab" aria-controls="flight" aria-selected="false">Hotels</button>
                    </li>
                </ul>
                </div>
                
                <div className="tab-content" id="myTabContent">
                  
                   {/*------------------ Package Holidays section---------------------- */}
                    <div className="tab-pane fade show active" id="Profile" role="tabpanel" aria-labelledby="home-tab">
                    <div className="container">
                     <div className="flighttabs">
                         <form>
                       <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label >Destination(s) or Hotel Name</label>
                                    <div className="input-group mb-3">

                                    <input type="text" className="form-control" />
                                    <button className="btn btn-secondary " onClick={toggleNumbers3}  type="button"> <FontAwesomeIcon icon={faLocationDot } /> <p>list</p></button>
                                  </div>
                                 
                                </div>
                                <div className="suggection " id="Destination"   style={{display:'none'}}>
                                <div className="flush"></div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any Destination</li>
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Mediterranean</li>
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Canary Islands</li>
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Greek Islands</li>
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Balearic Islands</li>
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Africa</li>
                                  </ul>
                                </div>
                              </div>
                            
                              <div className="col-md-2">
                                <div className="form-group">
                                    <label >Departure Airport</label>
                                    <div className="input-group mb-3">
                                    <input type="text" className="form-control" />
                                    <button className="btn btn-secondary " onClick={toggleNumbers5}  type="button">  <FontAwesomeIcon icon={faPlane} /></button>
                                    </div>
                                </div>
          
                                <div className="suggection1 " id="Airport"  style={{display:'none'}}>
                                <div className="flush"></div>
                                  <ul className="list-group list-group-flush">
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any London Airport</li>
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any Midlands Airport</li>
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any North East Airport</li>
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any North West Airport</li>
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any Scotland Airport</li>
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any South West Airport</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                    <label >Departure Date</label>
                                    <div className="input-group mb-3">

                                    <input type="date" className="form-control" readOnly onClick={open}/>
                                    <button className="btn btn-secondary "  onClick={open}  type="button"> <FontAwesomeIcon icon={faCalendarDays} /></button>

                                    </div>
                                    
                                  
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                    <label >Duration</label>
                                    
                                    <select className="form-select" id="inputGroupSelect01">
                                        <option selected>7 Nights</option>
                                        <option value="1">1 Night</option>
                                        <option value="2"> 2 Nights</option>
                                        <option value="3">3 Nights</option>
                                        <option value="4"> 4 Nights</option>
                                        <option value="5"> 5 Nights</option>
                                        <option value="6"> 6 Nights</option>
                                        <option value="8"> 8 Nights</option>
                                        <option value="9"> 9 Nights</option>
                                        <option value="10"> 10 Nights</option>
                                        <option value="11">11 Nights</option>
                                        <option value="12"> 12 Nights</option>
                                        <option value="13">13 Nights</option>
                                        <option value="14"> 14 Nights</option>
                                        
                                    </select>
                                </div>
                              </div>
                            
                               <div className="col-md-2">
                               <div className="form-group">
                                
                                   <label>Rooms & Guests</label>
                                   <div className="input-group mb-3">


                                <input type="text" className="form-control" />
                                <button className="btn btn-secondary " onClick={toggleNumbers}  type="button"><FontAwesomeIcon icon={faUser}/> </button>
                             
                                </div>
                               
                                 </div>
                               </div>
                              
                               
                              <div className="col text-center">
                                <div className="form-group">
                                    <label ></label><br/>
                                    <button className="btn btn-primary form-control" style={{height:"60px"}} type="button">Search </button>
                                </div>
                              </div>
                           </div>
                          
                          
                                   <div className="filterss1" tabIndex="-1" id="filterss" style={{display:'none'}}>
                                          <div className="">
                                            <div className="modal-content">
                                              <div className="modal-header">
                                                <h5 className="modal-title text-dark">Holidays</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleNumbers}></button>
                                              </div>
                                              <div className="modal-body text-dark">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                      <label>Number of rooms</label>
                                                        <select className="form-select" id="inputGroupSelect01">
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
                                                        <select className="form-select" id="inputGroupSelect01">
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
                                                        <select className="form-select" id="inputGroupSelect01">
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
                                                              <select className="form-select" id="inputGroupSelect01">
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
                                                              <select className="form-select" id="inputGroupSelect01">
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
                                              <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleNumbers}>Clear All</button>
                                                <button type="button" className="btn btn-primary">Done</button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                         

                                       




                                   </form>
                                   </div>
                                 
                        </div></div>
      
                         {/*------------------ hotals section---------------------- */}
                         <div className="tab-pane fade " id="Flight" role="tabpanel" aria-labelledby="flight-tab">
                          <div className="container">
                         <div className="flighttabs">
                         <form>
                       <div className="row">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label >Destination(s) or Hotel Name</label>
                                     <div className="input-group mb-3">

                                    <input type="text" className="form-control" />
                                    <button className="btn btn-secondary " onClick={toggleNumbers4}  type="button"><FontAwesomeIcon icon={faLocationDot} /><p>list</p></button>
                                  </div>
                                    <div className="suggection3 " id="flight"  style={{display:'none'}}>
                                <div className="flush1"></div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Any Destination</li>
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Mediterranean</li>
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Canary Islands</li>
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Greek Islands</li>
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Balearic Islands</li>
                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input"/> Africa</li>
                                  </ul>
                                </div>
                                </div>
                              </div>
                             
                              <div className="col-md-3">
                                <div className="form-group">
                                    <label >Check-in / Check-out</label>
                                    <div className="input-group mb-3">
                                    <input type="date" className="form-control" readOnly onClick={open}/>
                                    <button className="btn btn-secondary "  onClick={open}  type="button"> <FontAwesomeIcon icon={faCalendarDays} /></button>
                                    </div>
                                
                                </div>
                              </div>
                              <div className="col-md-3">
                               <label >Rooms & Guests</label>
                               <div className="input-group mb-3">
                                <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                                <button className="btn btn-secondary" type="button" onClick={toggleNumbers2}><img  alt='rome' src={rome}/></button>
                              </div>
                               </div>
                              <div className="col-md-2 text-center">
                                <div className="form-group">
                                    <label ></label><br/>
                                    <button className="btn btn-primary" style={{height:'60px'}}type="button">Search &nbsp;&nbsp; <FontAwesomeIcon icon={faAngleRight} /> </button>
                                </div>
                              </div>
                           </div>
                          
                        
                                   <div className="filterss1" tabIndex="-1" id="filterss2" style={{display:'none'}}>
                                          <div className="">
                                            <div className="modal-content">
                                              <div className="modal-header">
                                                <h5 className="modal-title text-dark">Hotals</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleNumbers2}></button>
                                              </div>
                                              <div className="modal-body text-dark">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                      <label>Number of rooms</label>
                                                        <select className="form-select" id="inputGroupSelect01">
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
                                                        <select className="form-select" id="inputGroupSelect01">
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
                                                        <select className="form-select" id="inputGroupSelect01">
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
                                                              <select className="form-select" id="inputGroupSelect01">
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
                                                              <select className="form-select" id="inputGroupSelect01">
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
                                              <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleNumbers2}>Clear All</button>
                                                <button type="button" className="btn btn-primary">Done</button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                 
                                   </form>
                                   </div>
                         </div>
                       
 </div> </div> </div> </div>
            <div className="He">
            <ImageSliderComponent />
            </div>
        </div>
        <div className='container'>
            <nav aria-label="breadcrumb " className='mt-3'>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href>Destinations</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Cyprus</li>
                </ol>
            </nav>
        </div>


        {/* second Section */}
        <div className="container my-4 ">
            <h3 className="my-3">Deals we’ve found for you</h3>
            <div className="row">
                <div className="col-md-4">
                    <div className="Paphos">
                        <div className="overlay">
                            <div className="row p-2">
                                <div className="col-md-8 col-8">
                                    <h5>Paphos, CYP</h5>
                                    <p>25 Mar ... 02 Apr</p>
                                    <p> <span><FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/></span>Sunny Isles Beach, FL<br /> Ramada Plaza Marco Polo Beach</p>
                                </div>
                                <div className="col-md-4 col-4 text-right">
                                    <h3><span className="youro">£</span> 329</h3>
                                    <div className="text-right mt-4">

                                        <p>   <i className="fa fa-plane"></i> easyJet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row red">
                                <div className="col-md-6 col-6" style={{ padding: '0px' }}>
                                    <button className="btn form-control ">ADD TO WISHLIST</button>
                                </div>
                                <div className="col-md-6 col-6 " style={{ padding: '0px' }}>
                                    <button className="btn btn-primary form-control">BOOK & SAVE £59 pp</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="Ayia">
                        <div className="overlay">
                            <div className="row p-2">
                                <div className="col-md-8 col-8">
                                    <h5>Ayia Napa, CYP</h5>
                                    <p>25 Mar ... 02 Apr</p>
                                    <p><span><FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/></span>Sunny Isles Beach, FL<br /> Ramada Plaza Marco Polo Beach</p>
                                </div>
                                <div className="col-md-4 col-4 text-right">
                                    <h3><span className="youro">£</span> 329</h3>
                                    <div className="text-right mt-4">

                                        <p> <i className="fa fa-plane"></i> easyJet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row red">
                                <div className="col-md-6 col-6" style={{ padding: '0px' }}>
                                    <button className="btn form-control red">ADD TO WISHLIST</button>
                                </div>
                                <div className="col-md-6 col-6" style={{ padding: '0px' }}>
                                    <button className="btn btn-primary form-control">BOOK & SAVE £59 pp</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="Limassol">
                        <div className="overlay">
                            <div className="row p-2">
                                <div className="col-md-8 col-8">
                                    <h5>Limassol, CYP</h5>
                                    <p>25 Mar ... 02 Apr</p>
                                    <p><span><FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/>
          <FontAwesomeIcon icon={faStar}/></span>Sunny Isles Beach, FL<br /> Ramada Plaza Marco Polo Beach</p>
                                </div>
                                <div className="col-md-4 col-4 text-right">
                                    <h3><span className="youro">£</span> 329</h3>
                                    <div className="text-right mt-4">

                                        <p>  <i className="fa fa-plane"></i>easyJet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row red">
                                <div className="col-md-6 col-6" style={{ padding: '0px' }}>
                                    <button className="btn form-control ">ADD TO WISHLIST</button>
                                </div>
                                <div className="col-md-6 col-6" style={{ padding: '0px' }}>
                                    <button className="btn btn-primary form-control">BOOK & SAVE £59 pp</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <p className='staytext'>A stay in Cyprus breathes new life into familiar myths and legends. Think magnificent mountain ranges, dramatic coastlines and tranquil beach holidays, and it’s easy to see why this island is often the backdrop for tales about ancient adventures and Hellenistic heroes. With a warm Mediterranean climate, romantic coves and a rich backstory, a holiday in Cyprus is ideal for sun-seeking couples and history buffs alike.</p>
            </div>
        </div>


            {/* Third Section */}
        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-5'>
                    <h3 className='mb-4'>{ sections.destinationPage.destinationtitle }</h3>
                    <p>{ sections.destinationPage.description }<br/>
                    <br/>
                    { sections.destinationPage.description1 }<br/>
                    <br/>
                    { sections.destinationPage.description2 }
                    </p>
                </div>
                <div className='col-md-7'>
                    <img src={beach} height='100%'  alt='rome' className='img-fluid'/>
                </div>
            </div>
        </div>
         {/* 4th Section */}
        
        <div className='container'>
            <div className='thinks'>
                <h3 className='my-5'>Things to do in Cyprus</h3>
                <p> <b>Explore the Tombs of the Kings</b> <br/>
            To the west of the island, close to Paphos and surrounded by desert-like landscape, sit the Tombs of the Kings. This UNESCO World Heritage Site is an underground network of tunnels and chambers dating all the way back to 4th century BC. Exploring the Egyptian-inspired resting places will give you a real feel for ancient Cypriot history, and if you get there early you can avoid the afternoon hustle, bustle and heat.
            <br/><br/>
            <b>Spend the day at Lara Beach</b><br/>
            A short drive along a rocky road on the Akamas Peninsula will lead you to Lara Beach, a stretch of unspoilt coastline with a reputation for natural beauty. This is a quiet spot, but Lara Restaurant is on hand for beachside dining and drinks if you need a break from the sun. To preserve this piece of paradise, you won’t find sun loungers or parasols here – though you might spot some native sea turtles and monk seals if you’re lucky.
            <br/><br/>
            <b>Discover Emira Pottery</b><br/>
            About a five-minute walk from Finikoudes Beach in Larnaca you will find a hidden gem called Emira Pottery. This shop sells stunning ceramics, including traditional cooking pots and decorative vases, and also offers a history of Cypriot pottery-making techniques. Whether you pick an artfully-made original piece or channel the film Ghost by creating your own vase, you’re bound to find the perfect souvenir here.
            <br/><br/>
            <b>Take a tour of the Cyprus Wine Museum</b><br/>
            Immerse yourself in the vineyards and exhibits at the Cyprus Wine Museum, and learn about the island’s colourful history of wine making. When the short tour is done, head downstairs to taste the fruits of the vineyard’s labours - you might even meet the friendly cat that’s made the winery his home.</p>
            </div>
        </div>



          {/* 5th Section */}
          <div className='container'>
              <div className="">
                  <h3 className='my-5'>Whats the weather like in Cyprus?</h3>

                  <p className='mb-5'>Sun-soaked Cyprus offers an average 326 days of sunshine each year, making it a great choice for a brilliant beach break. Visit in July for average coastal temperatures where the thermometer 
                   rarely drops below 27°C. Even if you choose to see the island in its low season – between November and February – the temperature tends to be a pleasantly mild 12°C on average.</p>
              </div>
              <div className='soaked'>
                  <div className='soaked1'></div>
              <Slider {...settings} className="subitem">
                <div className='soakedItem '>
                    <h4>Jan</h4>
                    <h3>17<sup>o</sup> C</h3>
                    <small>Avg. Rain: 85mm</small>
                </div>
                <div className='soakedItem active'>
                    <h4>Feb</h4>
                    <h3>17<sup>o</sup> C</h3>
                    <small>Avg. Rain: 85mm</small>
                </div>
                <div className='soakedItem'>
                    <h4>Mar</h4>
                    <h3>17<sup>o</sup> C</h3>
                    <small>Avg. Rain: 85mm</small>
                </div>
                <div className='soakedItem'>
                    <h4>Apr</h4>
                    <h3>17<sup>o</sup> C</h3>
                    <small>Avg. Rain: 85mm</small>
                </div>
                <div className='soakedItem'>
                    <h4>May</h4>
                    <h3>17<sup>o</sup> C</h3>
                    <small>Avg. Rain: 85mm</small>
                </div>
                <div className='soakedItem'>
                    <h4>Jun</h4>
                    <h3>17<sup>o</sup> C</h3>
                    <small>Avg. Rain: 85mm</small>
                </div>
                <div className='soakedItem'>
                    <h4>Jul</h4>
                    <h3>17<sup>o</sup> C</h3>
                    <small>Avg. Rain: 85mm</small>
                </div>
                <div className='soakedItem'>
                    <h4>Aug</h4>
                    <h3>17<sup>o</sup> C</h3>
                    <small>Avg. Rain: 85mm</small>
                </div>
                <div className='soakedItem'>
                    <h4>Sep</h4>
                    <h3>17<sup>o</sup> C</h3>
                    <small>Avg. Rain: 85mm</small>
                </div>
                <div className='soakedItem'>
                    <h4>Oct</h4>
                    <h3>17<sup>o</sup> C</h3>
                    <small>Avg. Rain: 85mm</small>
                </div>
                <div className='soakedItem'>
                    <h4>Nov</h4>
                    <h3>17<sup>o</sup> C</h3>
                    <small>Avg. Rain: 85mm</small>
                </div>
                <div className='soakedItem'>
                    <h4>Dec</h4>
                    <h3>17<sup>o</sup> C</h3>
                    <small>Avg. Rain: 85mm</small>
                </div>
                </Slider>
              </div>
          </div>



        {/* 6th Section */}
        <div className="container">
            <h3 className="my-5">Featured Cyprus Destinations</h3>
            <div className="row">
                <div className="col-md-8 overhead">
                    <img  alt='rome' src={paphos} className="img-fluid w-100 h-100" />
                    <div className="Layer2">
                        <h3>Paphos</h3>
                        <p>A cosmopolitan destination with vibrant bars,<br/>
                             outstanding resorts and some of the best<br/>
                              historic sights on the Island </p>

                        <button className="btn btn-primary float-right" type="button">Search &nbsp;&nbsp; <FontAwesomeIcon icon={faAngleRight} /> </button>

                    </div>
                </div>
                <div className="col-md-4 overhead">
                    <img  alt='rome' src={Layer3} className="img-fluid w-100" />
                    <div className="Layer">
                        <h3>Ayia Napa</h3>
                        <p>Lively or relaxed resorts with <br/>
                             stunning beaches and long hot <br/>
                              summers</p>
                        <button className="btn btn-primary float-right" type="button">Search &nbsp;&nbsp; <FontAwesomeIcon icon={faAngleRight} /> </button>

                    </div>
                </div>
            </div>

            <div className="row my-2">

                <div className="col-md-4 overhead">
                    <img  alt='rome' src={Layer1} className="img-fluid w-100" />
                    <div className="Layer">
                        <h3>Limassol</h3>
                        <p>Shimmering reefs, spicy salsa,<br/> reggae, pirate hideouts to sugar <br/> sand beaches</p>
                        <button className="btn btn-primary float-right" type="button">Search &nbsp;&nbsp; <FontAwesomeIcon icon={faAngleRight} /> </button>

                    </div>
                </div>

                <div className="col-md-8 overhead">
                    <img  alt='rome' src={Layer2} className="img-fluid w-100" />
                    <div className="Layer2">
                        <h3>Nissi Beach</h3>
                        <p>Majorca, Ibiza & Menorca. Beautiful coves<br/>
                          & historic old towns make these Islands the<br/> perfect getaway</p>
                        <button className="btn btn-primary float-right" type="button">Search &nbsp;&nbsp; <FontAwesomeIcon icon={faAngleRight} /> </button>

                    </div>
                </div>

            </div>
        </div>
        
        {/* 7th Section */}
    <div className='container'>
        <div className='mt-5 darkblue' >
            <h3>Things to eat in Cyprus</h3>
            <p>From Turkish influences to cosy Greek tavernas, the food of Cyprus is certainly something to celebrate. Grilled halloumi is a must-try, as is lahmacun – the Turkish answer to pizza, which is often sprinkled with lamb and herbs. Meze meals and fresh fish are other common dining options, accompanied by locally-made fruit juices or spirits such as ouzo or the grape-based zivania.</p>
       
           <div className='row'>
               <div className='col-md-4'>
                   <div className='card1 darkblue'>
                       <img src={salad} className="img-fluid"  alt='rome'/>
                       <h3>Greek Salad</h3>
                       <p>A traditional Greek Salad consists of sliced cucumber, tomatoes, Kalamata olives, red onion, feta and oregano</p>
                   </div>
               </div>
               <div className='col-md-4'>
               <div className='card1 darkblue'>
                       <img src={grilled} className="img-fluid"  alt='rome'/>
                       <h3>Grilled Halloumi</h3>
                       <p>A traditional Greek Salad consists of sliced cucumber, tomatoes, Kalamata olives, red onion, feta and oregano</p>
                   </div>
               </div>
               <div className='col-md-4'>
               <div className='card1 darkblue'>
                       <img src={Meze} className="img-fluid"  alt='rome'/>
                       <h3>Meze</h3>
                       <p>A traditional Greek Salad consists of sliced cucumber, tomatoes, Kalamata olives, red onion, feta and oregano</p>
                   </div>
               </div>
           </div>
        </div>

    </div>

    <div className='container'>
        <div className='darkblue'>
            <h3>Cultural holidays in Cyprus</h3>

              <p>Greek traditions from the south of the island and Turkish culture from the north blend harmoniously to create the unique melting pot of Cypriot culture. Sample the full spectrum of this exciting country by checking out local festivals. Limassol offers a celebration of spring with a colourful parade called Anthestiriya and the theatrical Medieval Festival takes place in Ayia Napa during October - though there are many more to choose from.</p>

            <h3>Important Information about travelling to Cyprus</h3>

           <p><b>How long does it take to fly to Cyprus?</b></p> 
            <p>It takes about four and a half hours to fly to Cyprus from the UK.</p>

            <p><b>What’s the time difference between the UK and Cyprus?</b></p>
            <p>Cyprus is two hours ahead of the time in the UK.</p>

            <p><b> What currency do they use in Cyprus?</b></p>
            <p>The official currency of Cyprus is the Euro.</p>

            <p><b> What language do they speak in Cyprus?</b></p>
           <p> The official languages spoken in Cyprus are Greek and Turkish.</p>

             </div>
    </div>

    </section>
    <Footer />
    </>
  )
}



export default destination

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark {
      frontmatter {
        title
        description
        url
        image
        destinationPage {
          description
          description1
          description2
          descriptiontext
          destinationtitle
          title
        }
        secondsection {
          title2
        }
        thirdsection {
          description1
          title
        }
      }
    }
  }
`
