import React,{ useEffect } from 'react';
import "../Home/Home.css"
import { useState } from 'react';
import { useParams } from "react-router-dom";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faAngleRight, faStar,  } from '@fortawesome/pro-solid-svg-icons';
import { faCalendar,faCalendarDays, faUser } from '@fortawesome/pro-thin-svg-icons';
import { faLocationDot } from '@fortawesome/pro-regular-svg-icons';
import ImageSliderComponent from '../router/slider';
import {Helmet} from "react-helmet";


function Destination() {
    const [counter, setCounter] = useState(1); 
    const baseURL = "http://138.68.163.128:3000/v1";
    const baseURL1 = "http://localhost:3001/v1";
    const [meta, setMeta] = useState({});
    const [destinationData, setDestinationData] = useState({});
    const [section1, setSection1] = useState([]);
    const [section2, setSection2] = useState([]);
    const [section3, setSection3] = useState([]);
    const [section4, setSection4] = useState([]);
    const [section5, setSection5] = useState([]);
    const [section6, setSection6] = useState([]);
    const [section7, setSection7] = useState([]);

    const { destinationName } = useParams()
    
    useEffect(() => {
        
        // Update the document title using the browser API
        // getDestinationPageMetaData()
        getDestinationPageData()
      },[]);
      
      async function getDestinationPageMetaData(id) {
        window.scrollTo(0, 0)
        try {
           const res = fetch(`${baseURL}/destination/destinationMeta/${id}`)
           const data =  (await res).json().then(res1=>{
               console.log(res1)
             setMeta(res1)
           })
      
        } catch (err) {
        //  setGetResult(err.message);
        }
      }

      async function getDestinationPageData() {
        try {
           const res = fetch(`${baseURL}/destination/name/${destinationName}`)
           const data =  (await res).json().then(res1=>{
               console.log(res1,"herer")
             setDestinationData(res1)
             getDestinationPageSections(res1.id)
             getDestinationPageMetaData(res1.id)
             //console.log(destinationData.slides)
           })
      
        } catch (err) {
        //  setGetResult(err.message);
        }
      }

      async function getDestinationPageSections(id) {
        try {
           const res = fetch(`${baseURL}/destination/${id}/sections`)
           const data =  (await res).json().then(res1=>{
               console.log(res1,"herer1")
               res1.map(section=>{
                   if(section.type=='section1'){
                       
                    setSection1(section)
                   }else if(section.type=='section2'){
                    setSection2(section)
                    }else if(section.type=='section3'){
                        setSection3(section)
                    }else if(section.type=='section4'){
                        setSection4(section)
                    }else if(section.type=='section5'){
                        setSection5(section)
                    }else if(section.type=='section6'){
                        console.log(section,"6")
                        setSection6(section)
                    }else if(section.type=='section7'){
                        setSection7(section)
                    }
               })
               
             //console.log(destinationData.slides)
           })
      
        } catch (err) {
        //  setGetResult(err.message);
        }
      }

    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    } 
    const [counter1, setCounter1] = useState(1);
    const incrementCounter1 = () => setCounter1(counter1 + 1);
    let decrementCounter1 = () => setCounter1(counter1 - 1);
    if (counter1 <= 1) {
        decrementCounter1 = () => setCounter1(1);
    }
    const [counter2, setCounter2] = useState(1);
    const incrementCounter2 = () => setCounter2(counter2 + 1);
    let decrementCounter2 = () => setCounter2(counter2 - 1);
    if (counter2 <= 1) {
        decrementCounter2 = () => setCounter(1);
    }

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

    function toggleNumbers1() {
        console.log('here')
        var x = document.getElementById("filterss1");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

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
              <Helmet>
                <meta charSet="utf-8" />
                <title>{ destinationData.metaTitle }</title>
                <meta name="description" content={destinationData.metaDescription}></meta>
                <link rel="canonical" href={destinationData.canonical} />
            </Helmet>
            <Header />
            <section className='darkblue'>
                <div className="banner pt-5 darkblue">
                   <div className=" narrow">        
                       <div className="tabs mt-5">
                        
                      <div className="container">
                      
                       <ul className="nav nav-tabs custom_tab_style1" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#Profile" type="button" role="tab"  aria-selected="true">Flight + Hotel</button>
                            </li>
                            <li className="nav-item" role="presentation">
                            <button className="nav-link" id="flight-tab" data-bs-toggle="tab" data-bs-target="#Flight" type="button" role="tab" aria-selected="false">Hotels</button>
                            </li>
                        </ul>
                        </div>
                        
                        <div className="tab-content" id="myTabContent">
                          
                           {/*------------------ Package Holidays section---------------------- */}
                            <div className="tab-pane fade show active" id="Profile" role="tabpanel">
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
                                            
                                            <select className="form-select" id="inputGroupSelect121">
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
                                                                <select className="form-select" id="inputGroupSelect1">
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
                                                                <select className="form-select" id="inputGroupSelect2">
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
                                                                <select className="form-select" id="inputGroupSelect3">
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
                                                                      <select className="form-select" id="inputGroupSelect4">
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
                                                                      <select className="form-select" id="inputGroupSelect5">
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
                                 <div className="tab-pane fade " id="Flight" role="tabpanel">
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
                                        <button className="btn btn-secondary" type="button" onClick={toggleNumbers2}><img  alt='' src="rome.png"/></button>
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
                                                                <select className="form-select" id="inputGroupSelect6">
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
                                                                <select className="form-select" id="inputGroupSelect7">
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
                                                                <select className="form-select" id="inputGroupSelect8">
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
                                                                      <select className="form-select" id="inputGroupSelect9">
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
                                                                      <select className="form-select" id="inputGroupSelect10">
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
         {destinationData.slides ? 
                    <div className="He ">
                    <ImageSliderComponent images={destinationData.slides}/>
                    </div>
                     : null }
                </div>
               
                <div className='container'>
                    <nav aria-label="breadcrumb " className='mt-3'>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Destinations</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{destinationData.title}</li>
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
                { section1? 
                    <div className='container'>
                        <div className='row my-5'>
                            <div className='col-md-5'>
                                <h3 className='mb-4'>{section1.title}</h3>
                                {/* <p> section1.sections[0]['description'] : null}</p> */}
                            </div>
                            <div className='row'>
                            { section1.sections ? section1.sections.map(sect=>{
                               return <div style={{width:`${sect.percentage}%`}}>
                                   <div >
                                    <p>{sect.description}</p>
                                </div>
                                <div>
                                    <img src={sect.image} height='100%' className='img-fluid'/>
                                </div></div>
                            })  : null }
                               </div> 
                            
                            
                        </div>
                    </div>
                : null }
                 {/* 4th Section */}
                 { section2? 
                    <div className='container'>
                        <div className='thinks'>
                            <h3 className='my-5'>{section2.title}</h3>
                            {section2.sections? 
                                section2.sections.map(sect1=>{
                                    return <div style={{width:`${sect1.percentage}%`}}>
                                        <p><b>{sect1.title}</b></p>
                                        <p>{sect1.description}</p>
                                    </div>
                                })
                            : null}
                        </div>
                    </div>
                : null }


                  {/* 5th Section */}
                  { section3? 
                  <div className='container'>
                      <div className="">
                          <h3 className='my-5'>{section3.title}</h3>

                          <p className='mb-5'>
                          {section3.description}
                          </p>
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

                  : null }

                {/* 6th Section */}

                { section4? 
                <div className="container">
                    <h3 className="my-5">{section4.title}</h3>
                    <div className="row">
                        { section4.sections? 
                        section4.sections.map(sect2=>{
                            return  <div class="overhead my-1" style={{width:`${sect2.percentage}%`}}>
                                        <img alt="" src={sect2.image} class="img-fluid w-100" />
                                        <div class="over1"><h3>{sect2.title}</h3>
                                        <p> {sect2.description}</p>
                                        <button class="btn btn-primary float-right" type="button">Search &nbsp;&nbsp; </button>
                                        </div>
                                </div>
                                
                               
                        })
                        
                        : null }
                    </div>

                   
                </div>
                : null }
                {/* 7th Section */}

                { section5? 
                <div className="container">
                    <div className='mt-5 darkblue' >
                        <h3>{section5.title}</h3>
                        <p>{section5.description}</p>
                
                    <div className='row'>
                        { section5.sections ? 
                         section5.sections.map(sect3=>{
                            return <div className='col-md-4'>
                                        <div className='card1 darkblue'>
                                            <img src={sect3.image} className="img-fluid"/>
                                            <h3>{sect3.title}</h3>
                                            <p>{sect3.description}</p>
                                        </div>
                                    </div>
                         })
                         : null }
                        
                    </div>
                    </div>

                </div>
            : null }

            { section6? 
            <div className='container'>
                <div className='darkblue'>
                    <h3>{section6.title}</h3>
                    <p>{section6.description}</p>
                    {section6.sections ? 
                    section6.sections.map(sect4=>{
                       <div> <h3>{sect4.title}</h3>
                        <p>{sect4.description}</p>
                        </div>
                    })
                    : null }
                     
                     </div>
            </div>
            : null }
            { section7? 
            <div className='container'>
                <div className='darkblue'>
                    <h3>{section7.title}</h3>
                    <p>{section7.description}</p>
                    {section7.sections ? 
                    section7.sections.map(sect5=>{
                       <div> <h3>{sect5.title}</h3>
                        <p>{sect5.description}</p>
                        </div>
                    })
                    : null }
                     
                     </div>
            </div>
            : null }
            </section>
            <Footer />
        </>
    )
}

export default Destination
