import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
//import 'react-calendar/dist/Calendar.css';
import '@mobiscroll/react/dist/css/mobiscroll.react.min.css';
import { Datepicker, getJson, Page, setOptions  } from '@mobiscroll/react';
//import { Datepicker, Page, getJson, setOptions } from '@mobiscroll/react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import './Holiday.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faAngleRight } from '@fortawesome/pro-solid-svg-icons';
import { faStar  } from '@fortawesome/pro-solid-svg-icons';
import { faCalendarDays, faUser } from '@fortawesome/pro-thin-svg-icons';
import { faLocationDot } from '@fortawesome/pro-regular-svg-icons';
import { faPlaneDeparture as solidfaPlaneDeparture } from '@fortawesome/pro-solid-svg-icons';
import { faPlaneDeparture, faSuitcaseRolling, faHeart } from '@fortawesome/pro-regular-svg-icons';
import {Helmet} from "react-helmet";


import shortid from 'shortid';

let images1 = []
const baseURL = "http://sun-1.co.uk:3001/v1";
const baseURL1 = "http://localhost:3001/v1";
function Holiday() {
    const [value, onChange] = useState(new Date());
    const [meta, setMeta] = useState({});
    const [holidayData, setHolidayData] = useState({});
    const [section1, setSection1] = useState([]);
    const [section2, setSection2] = useState([]);
    const [section3, setSection3] = useState([]);
    const [section4, setSection4] = useState([]);
    const [section5, setSection5] = useState([]);
    const [section6, setSection6] = useState([]);
    const [section7, setSection7] = useState([]);


    const { holidayId } = useParams()
    const [multiple, setMultiple] = React.useState([
        '2022-01-11T00:00',
        '2022-01-16T00:00',
        '2022-01-17T00:00'
    ]);
    const min = '2022-01-12T00:00';
    const max = '2022-07-12T00:00';
    const [singleLabels, setSingleLabels] = React.useState([]);
    const [singleInvalid, setSingleInvalid] = React.useState([]);
    const [datetimeLabels, setDatetimeLabels] = React.useState([]);
    const [datetimeInvalid, setDatetimeInvalid] = React.useState([]);
    const [multipleLabels, setMultipleLabels] = React.useState([]);
    const [multipleInvalid, setMultipleInvalid] = React.useState([]);
    const [activeSection, setActiveSection] = React.useState('home');

    useEffect(() => {

        // Update the document title using the browser API\
        //onPageLoadingSingle()
        getHolidayPageMetaData()
        getHolidayPageData()
      },[]);


    const onPageLoadingSingle = React.useCallback((event, inst) => {
        getPrices(event.firstDay, (bookings) => {
            setSingleLabels(bookings.labels);
            setSingleInvalid(bookings.invalid);

        });
    }, []);

    const onPageLoadingDatetime = React.useCallback((event, inst) => {
        getDatetimes(event.firstDay, (bookings) => {
            setDatetimeLabels(bookings.labels);
            setDatetimeInvalid(bookings.invalid);
        });
    }, []);

    const onPageLoadingMultiple = React.useCallback((event, inst) => {
        getBookings(event.firstDay, (bookings) => {
            setMultipleLabels(bookings.labels);
            setMultipleInvalid(bookings.invalid);
        });
    }, []);


      async function getHolidayPageMetaData() {
        try {
           const res = fetch(`${baseURL}/homepage/holidays`)
           const data =  (await res).json().then(res1=>{
               console.log(res1)
             setMeta(res1)
           })
      
        } catch (err) {
        //  setGetResult(err.message);
        }
      }
     
      async function getHolidayPageData() {
        try {
           const res = fetch(`${baseURL}/holiday/${holidayId}`)
           const data =  (await res).json().then(res1=>{
               console.log(res1,"herer")
               formatSlides(res1.slides)
             setHolidayData(res1)
             getHolidayPageSections(res1.id)
             //console.log(destinationData.slides)
           })
      
        } catch (err) {
        //  setGetResult(err.message);
        }
      }
      async function formatSlides(slides){
        
      slides.map(slide=>{
        images1.push({
              'original':slide,
              'thumbnail':slide
          })
      })
     //images1=arrayImage
    }

    async function getHolidayPageSections(id) {
        try {
           const res = fetch(`${baseURL}/holiday/${holidayId}/sections`)
           const data =  (await res).json().then((res1)=>{
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
    
    const getPrices = (d, callback) => {
        let invalid = [];
        let labels = [];

        getJson('https://trial.mobiscroll.com/getprices/?year=' + d.getFullYear() + '&month=' + d.getMonth(), (bookings) => {
            for (let i = 0; i < bookings.length; ++i) {
                const booking = bookings[i];
                const d = new Date(booking.d);

                if (booking.price > 0) {
                    // labels.push({
                    //     start: d,
                    //     title: '$' + booking.price,
                    //     textColor: '#e1528f'
                    // });
                } else {
                    invalid.push(d);
                }
            }
            callback({ labels: labels, invalid: invalid });
        }, 'jsonp');
    }

    const getDatetimes = (d, callback) => {
        let invalid = [];
        let labels = [];

        getJson('https://mobiscroll.com/getbookingtime/?year=' + d.getFullYear() + '&month=' + d.getMonth(), (bookings) => {
            for (let i = 0; i < bookings.length; ++i) {
                const booking = bookings[i];
                const bDate = new Date(booking.d);

                if (booking.nr > 0) {
                    labels.push({
                        start: bDate,
                        title: booking.nr + ' SPOTS',
                        textColor: '#e1528f'
                    });
                    invalid = [...invalid, ...booking.invalid];
                } else {
                    invalid.push(d);
                }
            }
            callback({ labels: labels, invalid: invalid });
        }, 'jsonp');
    }

    const toggleSection = (section) => {
        if (activeSection == section) {
            setActiveSection('')
        }
        else {
            setActiveSection(section)
        }


    }

    const getBookings = (d, callback) => {
        let invalid = [];
        let labels = [];

        getJson('https://trial.mobiscroll.com/getbookings/?year=' + d.getFullYear() + '&month=' + d.getMonth(), (bookings) => {
            for (let i = 0; i < bookings.length; ++i) {
                const booking = bookings[i];
                const d = new Date(booking.d);

                if (booking.nr > 0) {
                    labels.push({
                        start: d,
                        title: booking.nr + ' SPOTS',
                        textColor: '#e1528f'
                    });
                } else {
                    invalid.push(d);
                }
            }
            callback({ labels: labels, invalid: invalid });
        }, 'jsonp');
    }
    const [counter, setCounter] = useState(1);
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
        var x = document.getElementById("filterss");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    function open() {
        var x = document.getElementById("dates");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    function toggleNumbers1() {
        var x = document.getElementById("filterss1");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    function toggleNumbers2() {
        var x = document.getElementById("filterss2");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    function toggleNumbers3() {
        var x = document.getElementById("Destination");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    function showParticularTab(tab) {
        let tabs = document.getElementsByClassName('collapse');
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("show");
        }


        console.log('here')
    }
    function toggleNumbers4() {
        var x = document.getElementById("flight");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    function toggleNumbers5() {
        var x = document.getElementById("Airport");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    function room() {
        var x = document.getElementById("show");
        var y = document.getElementById("hide");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.display = "block";
        }
    }
    function room1() {
        var x = document.getElementById("show1");
        var y = document.getElementById("hide1");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.display = "block";
        }
    }
    function room2() {
        var x = document.getElementById("show2");
        var y = document.getElementById("hide2");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.display = "block";
        }
    }
    function openfilter() {
        var x = document.getElementById("tabs");
        var y = document.getElementById("bars");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.display = "block";
        }
    }
    return (
        <>
            <Helmet>
            <title>{ holidayData.metaTitle }</title>
                <meta name="description" content={holidayData.metaDescription}></meta>
                <link rel="canonical" href={holidayData.canonical} />
            </Helmet>
        <Header data={false}/>
        <section>
            <div className="tabs" id="tabs" style={{ display: 'none', marginTop: '8%' }}>

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
                    <div className="tab-pane fade show active" id="Profile" role="tabpanel" >
                        <div className="container">
                            <div className="flighttabs">
                                <form>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label >Destination(s) or Hotel Name</label>
                                                <div className="input-group mb-3">

                                                    <input type="text" className="form-control" />
                                                    <button className="btn btn-secondary " onClick={toggleNumbers3} type="button"><FontAwesomeIcon icon={faLocationDot } /> <p>list</p></button>
                                                </div>

                                            </div>
                                            <div className="suggection " id="Destination" style={{ display: 'none' }}>
                                                <div className="flush"></div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Any Destination</li>
                                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Mediterranean</li>
                                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Canary Islands</li>
                                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Greek Islands</li>
                                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Balearic Islands</li>
                                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Africa</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <label >Departure Airport</label>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" />
                                                    <button className="btn btn-secondary " onClick={toggleNumbers5} type="button"><i className="fa fa-plane"></i></button>
                                                </div>
                                            </div>

                                            <div className="suggection1 " id="Airport" style={{ display: 'none' }}>
                                                <div className="flush"></div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Any London Airport</li>
                                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Any Midlands Airport</li>
                                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Any North East Airport</li>
                                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Any North West Airport</li>
                                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Any Scotland Airport</li>
                                                    <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Any South West Airport</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <label >Departure Date</label>
                                                <div className="input-group mb-3">

                                                    <input type="date" className="form-control" readOnly onClick={open} />
                                                    <button className="btn btn-secondary " onClick={open} type="button">  <FontAwesomeIcon icon={faCalendarDays} /></button>

                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <label >Duration</label>

                                                <select className="form-select" id="inputGroupSelect1">
                                                    <option >7 Nights</option>
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
                                                    <button className="btn btn-secondary " onClick={toggleNumbers} type="button"><FontAwesomeIcon icon={faUser } /> </button>

                                                </div>

                                            </div>
                                        </div>


                                        <div className="col text-center">
                                            <div className="form-group">
                                                <label ></label><br />
                                                <button className="btn btn-primary form-control" style={{ height: "60px" }} type="button">Search </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="filterss1" tabIndex="-1" id="filterss" style={{ display: 'none' }}>
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
                                                            <select className="form-select" id="inputGroupSelect">
                                                                <option >I don't mind</option>
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
                                                            <select className="form-select" id="inputGroupSelect102">
                                                                <option >Choose...</option>
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
                                                            <select className="form-select" id="inputGroupSelect0">
                                                                <option >Choose...</option>
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
                                                                    <select className="form-select" id="inputGroupSelect2">
                                                                        <option >Choose...</option>
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
                                                                    <select className="form-select" id="inputGroupSelect02">
                                                                        <option >Choose...</option>
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
                    <div className="tab-pane fade " id="Flight" role="tabpanel" >
                        <div className="container">
                            <div className="flighttabs">
                                <form>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label >Destination(s) or Hotel Name</label>
                                                <div className="input-group mb-3">

                                                    <input type="text" className="form-control" />
                                                    <button className="btn btn-secondary " onClick={toggleNumbers4} type="button"><FontAwesomeIcon icon={faLocationDot } /> <p>list</p></button>
                                                </div>
                                                <div className="suggection3 " id="flight" style={{ display: 'none' }}>
                                                    <div className="flush1"></div>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Any Destination</li>
                                                        <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Mediterranean</li>
                                                        <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Canary Islands</li>
                                                        <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Greek Islands</li>
                                                        <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Balearic Islands</li>
                                                        <li className="list-group-item">  <input type="checkbox" className="form-check-input" /> Africa</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label >Check-in / Check-out</label>
                                                <div className="input-group mb-3">
                                                    <input type="date" className="form-control" readOnly onClick={open} />
                                                    <button className="btn btn-secondary " onClick={open} type="button">  <FontAwesomeIcon icon={faCalendarDays} /></button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label >Rooms & Guests</label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                                <button className="btn btn-secondary" type="button" onClick={toggleNumbers2}><FontAwesomeIcon icon={faUser } /> </button>
                                            </div>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <div className="form-group">
                                                <label ></label><br />
                                                <button className="btn btn-primary" style={{ height: '60px' }} type="button">Search &nbsp;&nbsp; <FontAwesomeIcon icon={faAngleRight} /> </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="filterss1" tabIndex="-1" id="filterss2" style={{ display: 'none' }}>
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
                                                            <select className="form-select" id="inputGroupSelect3">
                                                                <option >I don't mind</option>
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
                                                            <select className="form-select" id="inputGroupSelect03">
                                                                <option >Choose...</option>
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
                                                            <select className="form-select" id="inputGroupSelect4">
                                                                <option >Choose...</option>
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
                                                                    <select className="form-select" id="inputGroupSelect04">
                                                                        <option >Choose...</option>
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
                                                                        <option >Choose...</option>
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

                    </div>

                    <div className="filterss" tabIndex="-1" id="dates" style={{ display: 'none' }} >
                        <div className="">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-dark">Date</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={open} ></button>
                                </div>
                                <div className="modal-body text-dark">
                                    <div className="row">
                                        <div className="col-md-8">
                                        <Datepicker
                                        display="inline"
                                        controls={['calendar']}
                                        min={min}
                                        max={max}
                                        labels={singleLabels}
                                        invalid={singleInvalid}
                                        calendarType="month"
                                        pages={1}

                                        onPageLoading={onPageLoadingSingle}
                                    />
                                        </div>
                                        <div className="col-md-4 dayss">
                                            <h4>How flexible</h4>
                                            <div className="mb-3 form-check">
                                                <input type="radio" className="form-check-input" name="day" />
                                                <label className="form-check-label" >Not Flexible</label>
                                            </div>
                                            <div className="mb-3 form-check">
                                                <input type="radio" className="form-check-input" name="day" />
                                                <label className="form-check-label" >+/- 3 Days</label>
                                            </div>
                                            <div className="mb-3 form-check">
                                                <input type="radio" className="form-check-input" name="day" />
                                                <label className="form-check-label">+/- 7 Days  </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bars" id="bars">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-4">
                            <a href="" rel="noreferrer">London Gatwick</a>
                        </div>
                        <div className="col-md-2 col-4">
                            <a href="" rel="noreferrer">Paphos Area</a>
                        </div>
                        <div className="col-md-2 col-4">
                            <a href='' rel="noreferrer"> 08 Jul +/- 3 days</a>
                        </div>
                        <div className="col-md-2 col-4">
                            <a href='' rel="noreferrer">14 Nights</a>
                        </div>
                        <div className="col-md-2 col-4">
                            <a href="" rel="noreferrer">2 Guests </a>
                        </div>
                        <div className="col-md-2 col-4">
                            <button className="btn btn-primary form-control" onClick={openfilter} type="button">EDIT SEARCH </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='holidays'>
                <div className='container'>
                    <div className='back py-2'>
                        <button className='btn btn-warning' type="button"> <i className="fa fa-angle-left"></i> back to search </button>
                    </div>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='coral'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='Resort'>
                                            <h5>Coral Beach Hotel and Resort <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/> </h5>
                                            <p>(Coral Bay, Paphos Cyprus)</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='Resort text-right'>
                                            <h5><FontAwesomeIcon icon={faPlaneDeparture} />  London Gatwick to Paphos</h5>
                                            <p> &nbsp;  &nbsp;  &nbsp;  &nbsp; 2 Adults - Saturday 2 July 2022 (<a href="#" rel="noreferrer"> 14 nights </a>)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='position-relative'>
                                <div className='looked'>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <img  alt='' src="../eye.png" className='img-fluid' />
                                        </div>
                                        <div className='col-9'>
                                            <p><b>62 </b> others have <b>LOOKED </b> at this hotel in the last hour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='booked'>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <img  alt='' src="../bookplan.png" className='img-fluid' />
                                        </div>
                                        <div className='col-9'>
                                            <p><b>40+</b> others have <b>BOOKED </b>  this hotel in the last 7 days</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='wishlist1'>
                                    <a href='#' rel="noreferrer" style={{ color: '#1b3a69' }}>Add to wishlist  <FontAwesomeIcon icon={faHeart} /></a>
                                </div>
                            </div>
                            <ImageGallery items={images1} showIndex />
                            <div className='float-right'>
                                <img  alt='' src="../holiday_listing.png" className='img-fluid' />
                            </div>
                            <div className="tabsss">
                            <p className="mt-3">
                                <a className='coll' data-bs-toggle="collapse" href="#collapseExample" role="button" onClick={() => showParticularTab('collapseExample')} aria-expanded="false" >
                                    ABOUT
                                </a>
                                <a className='coll' data-bs-toggle="collapse" href="#collapseExample1" role="button" onClick={() => showParticularTab('collapseExample1')} aria-expanded="false" >
                                    FACILITIES
                                </a>
                                <a  className='coll' data-bs-toggle="collapse" href="#collapseExample2" role="button" onClick={() => showParticularTab('collapseExample2')} aria-expanded="false" >
                                    LOCATION
                                </a>
                            </p>
                            </div>
                            {section1? 
                            <div className="collapse show collap" id="collapseExample">
                                <div className="card card-body">
                                    <div className='mt-3'>
                                        <p>Official1 hotel rating: <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/> </p>

                                        {section1.sections? 

                                            <div >
                                            { section1.sections.map((sect,i)=>{
                                            return <div key={shortid.generate()}>
                                                
                                                {i<3 ? 
                                                 <div key={shortid.generate()}><p key={shortid.generate()}><b>{sect.title}</b></p>
                                                 <p key={shortid.generate()}>{sect.description}</p>
                                                    {i==2 ? <p style={{ cursor: 'pointer',color:'blue' }} onClick={room} id="hide">Show More</p> : null}
                                                 </div>
                                                : 
                                                
                                                null
                                                }
                                               
                                            </div>
                                            }) }
                                            <div id="show" style={{ display: 'none' }}>
                                            { section1.sections.map((sect,i)=>{
                                            return <div key={shortid.generate()}>
                                                
                                                {i>=3 ? 
                                                 
                                                 <div key={shortid.generate()}><p key={shortid.generate()}><b>{sect.title}</b></p>
                                                 <p key={shortid.generate()}>{sect.description}</p>
                                                     {i== section1.sections.length-1 ?  <p key={shortid.generate()} style={{ cursor: 'pointer',color:'blue' }} onClick={room}>Show less </p> : null}
                                                 </div>
                                                : 
                                                
                                                null
                                                
                                                
                                                }
                                               
                                            </div>
                                            }) }
                                            </div>
                                            </div>
                                        : null}
                                        {/* <p style={{ cursor: 'pointer',color:'blue' }} onClick={room} id="hide">Show More</p>
                                        <div id="show" style={{ display: 'none' }}>
                                            <p> <b>Food & Drink </b></p>
                                            <p>Coral Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Reservations: Reservations not required.
                                            </p>
                                            <p>Armonia Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Reservations: Reservations not required. Calypso Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Limani Taverna* Cuisine: Greek and Cypriot Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open alternative evenings Pizza & Pasta Restaurant* Cuisine: Italian Dress code: Casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open occasionally (summer only) Molos* Cuisine: Greek and Cypriot Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open alternative evenings (summer only) Romazzino* Cuisine: Mediterranean Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Diners must be aged 13 or over *Open alternative evenings La Rotisserie* Cuisine: International Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Diners must be aged 13 or over *Open alternative evenings Dionyssos Bar Opening Hours: 11:00 – 23:00 Odyssey Bar & Nightclub Opening Hours: 21:30 – 01:00 Poseidon Pool Bar Opening Hours: 09:00 – 19:00
                                            </p>
                                            <p> <b> Sports & Entertainment</b></p>
                                            <p>Guests can enjoy use of the hotel swimming pool, spa and fitness centre, sauna, Turkish bath, communal library, bicycle rental, kids playground, complimentary Wi-Fi throughout the property, and regular entertainment.
                                            </p>
                                            <p style={{ cursor: 'pointer',color:'blue' }} onClick={room}>Show less</p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            : null }
                            <div className="collapse collap" id="collapseExample1">
                                <div className="card card-body">
                                    <div className='mt-3'>
                                        <p>Official2 hotel rating: <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/> </p>

                                        <b>Overview</b>
                                        <p>  The Coral Beach Hotel and Resort is a stunning resort located right on the beachfront. Offering spacious modern accommodation in a great location, this breath-taking resort is an ideal choice for those looking to enjoy a sophisticated break in the sun.
                                        </p>
                                        <p> <b> How far is the nearest beach? </b></p>
                                        <p>The Coral Beach is 50m from the beach.</p>

                                        <p> <b>Distance from Airport</b></p>
                                        <p>  The Coral Beach is 28km from Paphos International Airport.</p>

                                        <p> <b>Rooms </b></p>
                                        <p>Rooms at the Coral Beach all feature a private bathroom, air conditioning, TV, Wi-Fi, hairdryer, telephone, safety deposit box, and a balcony or terrace.
                                        </p>
                                        <p style={{ cursor: 'pointer',color:'blue' }} onClick={room1} id="hide1">Show More</p>
                                        <div id="show1" style={{ display: 'none' }}>
                                            <p> <b>Food & Drink </b></p>
                                            <p>Coral Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Reservations: Reservations not required.
                                            </p>
                                            <p>Armonia Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Reservations: Reservations not required. Calypso Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Limani Taverna* Cuisine: Greek and Cypriot Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open alternative evenings Pizza & Pasta Restaurant* Cuisine: Italian Dress code: Casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open occasionally (summer only) Molos* Cuisine: Greek and Cypriot Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open alternative evenings (summer only) Romazzino* Cuisine: Mediterranean Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Diners must be aged 13 or over *Open alternative evenings La Rotisserie* Cuisine: International Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Diners must be aged 13 or over *Open alternative evenings Dionyssos Bar Opening Hours: 11:00 – 23:00 Odyssey Bar & Nightclub Opening Hours: 21:30 – 01:00 Poseidon Pool Bar Opening Hours: 09:00 – 19:00
                                            </p>
                                            <p> <b> Sports & Entertainment</b></p>
                                            <p>Guests can enjoy use of the hotel swimming pool, spa and fitness centre, sauna, Turkish bath, communal library, bicycle rental, kids playground, complimentary Wi-Fi throughout the property, and regular entertainment.
                                            </p>
                                            <p style={{ cursor: 'pointer',color:'blue' }} onClick={room1}>Show less</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse collap" id="collapseExample2">
                                <div className="card card-body">
                                    <div className='mt-3'>
                                        <p>Official3 hotel rating: <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/> </p>

                                        <b>Overview</b>
                                        <p>  The Coral Beach Hotel and Resort is a stunning resort located right on the beachfront. Offering spacious modern accommodation in a great location, this breath-taking resort is an ideal choice for those looking to enjoy a sophisticated break in the sun.
                                        </p>
                                        <p> <b> How far is the nearest beach? </b></p>
                                        <p>The Coral Beach is 50m from the beach.</p>

                                        <p> <b>Distance from Airport</b></p>
                                        <p>  The Coral Beach is 28km from Paphos International Airport.</p>

                                        <p> <b>Rooms </b></p>
                                        <p>Rooms at the Coral Beach all feature a private bathroom, air conditioning, TV, Wi-Fi, hairdryer, telephone, safety deposit box, and a balcony or terrace.
                                        </p>
                                        <p style={{ cursor: 'pointer',color:'blue' }} onClick={room2} id="hide2">Show More</p>
                                        <div id="show2" style={{ display: 'none' }}>
                                            <p> <b>Food & Drink </b></p>
                                            <p>Coral Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Reservations: Reservations not required.
                                            </p>
                                            <p>Armonia Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Reservations: Reservations not required. Calypso Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Limani Taverna* Cuisine: Greek and Cypriot Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open alternative evenings Pizza & Pasta Restaurant* Cuisine: Italian Dress code: Casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open occasionally (summer only) Molos* Cuisine: Greek and Cypriot Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open alternative evenings (summer only) Romazzino* Cuisine: Mediterranean Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Diners must be aged 13 or over *Open alternative evenings La Rotisserie* Cuisine: International Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Diners must be aged 13 or over *Open alternative evenings Dionyssos Bar Opening Hours: 11:00 – 23:00 Odyssey Bar & Nightclub Opening Hours: 21:30 – 01:00 Poseidon Pool Bar Opening Hours: 09:00 – 19:00
                                            </p>
                                            <p> <b> Sports & Entertainment</b></p>
                                            <p>Guests can enjoy use of the hotel swimming pool, spa and fitness centre, sauna, Turkish bath, communal library, bicycle rental, kids playground, complimentary Wi-Fi throughout the property, and regular entertainment.
                                            </p>
                                            <p style={{ cursor: 'pointer',color:'blue' }} onClick={room2}>Show less</p>
                                        </div>
                                    </div> </div>
                            </div>
                        
                            <div className='my-3'>
                                <h3>Alternative Dates</h3>
                            </div>
                           
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='hea'>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <h5>Outbound: <small>8 Jul 2022</small></h5>
                                            </div>
                                            <div className='col-md-6'>
                                                <h5>Return:<small> 22 Jul 2022 </small></h5>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flight-option">
                                        <h5>Flight options: <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                            <label className="form-check-label" >Any</label>
                                        </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                                <label className="form-check-label" >Direct</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                                <label className="form-check-label" >Indirect </label>
                                            </div></h5>
                                    </div>
                                    <Datepicker
                                        display="inline"
                                        controls={['calendar']}
                                        min={min}
                                        max={max}
                                        labels={singleLabels}
                                        invalid={singleInvalid}
                                        calendarType="month"
                                        pages={1}

                                        onPageLoading={onPageLoadingSingle}
                                    />
                                    <div className='row'>
                                        <div className='col-md-8'>
                                            <button className="btn btn-primary btn-sm mx-1" type="button">Current Date</button>
                                            <button className="btn btn-success btn-sm mx-1" type="button">Cheapest Date</button>
                                            <button className="btn btn-warning btn-sm mx-1" type="button">New Selection</button>
                                            <button className="btn btn-secondary btn-sm mx-1" type="button">No Availability</button>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='d-flex person'>
                                                <p>
                                                    Price per person</p>
                                                <div className="form-check form-switch mx-3">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                </div>
                                                <p>Total price</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='my-4'>
                                <div className='included'>
                                    <h3>Your Flights are included!</h3>
                                    <p>This is our best deal out of 8 different options.</p>
                                </div>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='row'>
                                            <div className='col-md-3'>
                                                <div className='d-flex'>
                                                    <FontAwesomeIcon icon={faPlaneDeparture} />
                                                    <h5>London Gatwick to Paphos (EZY 8935)</h5>
                                                </div>
                                            </div>
                                            <div className='col-md-3 text-center'>
                                                <div className=' d-flex'>
                                                <FontAwesomeIcon icon={solidfaPlaneDeparture} />
                                                    <p><img  alt='' src="../easy.png" className='img-fluid m-0' /> <br />Economy</p>
                                                </div>
                                            </div>
                                            <div className='col mt-3'>
                                                <p>8 Jul <br/> Friday</p>
                                            </div>
                                            <div className='col mt-3'>
                                                <p><b>15:20 - 21:55 </b> <br />LGW   	&nbsp;	&nbsp;	&nbsp;    PFO</p>
                                            </div>
                                            <div className='col text-center mt-3'>
                                                <p><b>Direct</b> <br /> 4h 35min</p>
                                            </div>
                                            <div className='col text-center'>
                                              <FontAwesomeIcon icon={faSuitcaseRolling }/>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='row'>
                                            <div className='col-md-3'>
                                                <div className='d-flex'>
                                                <FontAwesomeIcon className="planeright" icon={faPlaneDeparture} />
                                                    <h5>London Gatwick to Paphos (EZY 8935)</h5>
                                                </div>
                                            </div>
                                            <div className='col-md-3 text-center'>
                                                <div className=' d-flex'>
                                                <FontAwesomeIcon className='planeright' icon={solidfaPlaneDeparture} />
                                                    <p><img  alt='' src="easy.png" className='img-fluid m-0' /> <br />Economy</p>
                                                </div>
                                            </div>
                                            <div className='col mt-3'>
                                                <p>8 Jul <br/> Friday</p>
                                            </div>
                                            <div className='col mt-3'>
                                                <p><b>15:20 - 21:55 </b> <br />LGW   	&nbsp;	&nbsp;	&nbsp;    PFO</p>
                                            </div>
                                            <div className='col text-center mt-3'>
                                                <p><b>Direct</b> <br /> 4h 35min</p>
                                            </div>
                                            <div className='col text-center'>
                                              <FontAwesomeIcon icon={faSuitcaseRolling }/>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='row'>
                                            <div className='col-md-6 text-center'>
                                                <a href="#" rel="noreferrer" style={{ color: '#1b3a69' }}><b>View flight details </b></a>
                                            </div>
                                            <div className='col-md-6 text-center'>
                                                <a href='#' rel="noreferrer" style={{ color: '#1b3a69' }}><b>Change flight</b></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='my-4'>
                                <div className='included'>
                                    <h5>Add Hold Baggage</h5>
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
                                                    <img  alt='' src="../sum.png" className='img-fluid sum' />
                                                    <input type='number' className="form-control" />
                                                    <img  alt='' src="../add.png" className='img-fluid sum' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='my-4'>
                                <div className='included'>
                                    <h3>Your Board is included!</h3>
                                    <p>More board options are available below</p>
                                </div>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='row Double active'>
                                            <div className='col-md-5 mt-2'>
                                                <h5>Bed & Breakfast</h5>
                                                <p>Double or twin mountain view</p>
                                            </div>
                                            <div className='col-md-5 text-center'>
                                                <h2>£952</h2>
                                                <p>holiday price per person</p>
                                            </div>
                                            <div className='col-md-2 text-right'>
                                                <input type='radio' name='pack' className="pack" checked={true} />
                                            </div>
                                        </div>
                                        <div className='row Double'>
                                            <div className='col-md-5 mt-2'>
                                                <h5>Bed & Breakfast</h5>
                                                <p>Double or twin mountain view</p>
                                            </div>
                                            <div className='col-md-5 text-center'>
                                                <h2>£952</h2>
                                                <p>holiday price per person</p>
                                            </div>
                                            <div className='col-md-2 text-right'>
                                                <input type='radio' name='pack' className="pack" />
                                            </div>
                                        </div>
                                        <div className='row Double'>
                                            <div className='col-md-5 mt-2'>
                                                <h5>Bed & Breakfast</h5>
                                                <p>Double or twin mountain view</p>
                                            </div>
                                            <div className='col-md-5 text-center'>
                                                <h2>£952</h2>
                                                <p>holiday price per person</p>
                                            </div>
                                            <div className='col-md-2 text-right'>
                                                <input type='radio' name='pack' className="pack" />
                                            </div>
                                        </div>
                                        <div className='row Double'>
                                            <div className='col-md-5 mt-2'>
                                                <h5>Bed & Breakfast</h5>
                                                <p>Double or twin mountain view</p>
                                            </div>
                                            <div className='col-md-5 text-center'>
                                                <h2>£952</h2>
                                                <p>holiday price per person</p>
                                            </div>
                                            <div className='col-md-2 text-right'>
                                                <input type='radio' name='pack' className="pack" />
                                            </div>
                                        </div>
                                        <div className='row mt-3'>
                                            <div className='col-md-6 mt-2'>
                                                <div className='d-flex person'>
                                                    <p>
                                                        Price per person</p>
                                                    <div className="form-check form-switch mx-3">
                                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                    </div>
                                                    <p>Total price</p>
                                                </div>
                                            </div>
                                            <div className='col-md-6 text-right'>
                                                <button className="btn btn-primary" type="button">All Options</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='my-4'>
                                <div className='included'>
                                    <h3>Your Travel Party</h3>
                                    <p>Age on date of return</p>
                                </div>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='row'>
                                            <div className='col'>
                                                <label>Adults</label>
                                                <div className="input-group">
                                                    <select className="form-select" id="inputGroupSelect05">
                                                        <option >2</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                    <div className="input-group-append">
                                                        <img  alt='' src='adults.png' className='img-fluid' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <label>Children <small>(2-15 yrs)</small></label>
                                                <div className="input-group">
                                                    <select className="form-select" id="inputGroupSelect5">
                                                        <option >0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                    <div className="input-group-append">
                                                        <img  alt='' src='child.png' className='img-fluid' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <label>Infants <small>(0-23mths)</small></label>
                                                <div className="input-group">
                                                    <select className="form-select" id="inputGroupSelect06">
                                                        <option >0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                    <div className="input-group-append">
                                                        <img  alt='' src='infants.png' className='img-fluid' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <label>Room(s)</label>
                                                <div className="input-group">
                                                    <select className="form-select" id="inputGroupSelect6">
                                                        <option  value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                    <div className="input-group-append">
                                                        <img  alt='' src='Room.png' className='img-fluid' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-3 mt-4'>
                                                <button className='btn btn-primary' type='button'>Update Passengers</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='my-4'>
                                <div className='included'>
                                    <h3>Before you book</h3>
                                </div>
                                <div className='protected'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <img  alt='' className='img-fluid' src="../pro.png" />
                                        </div>
                                        <div className='col-10'>
                                            <h5>Our packages are financially protected</h5>
                                            <p>All the flight inclusive holidays shown on suntours.co.uk are financially protected by the ATOL Scheme. suntours hold an Air Travel Organiser’s Licence (ATOL) granted by the Civil Aviation Authority, our ATOL number is 12345. When you book and pay for your holiday you wil be supplied with an ATOL Certificate. Please read your booking conditions to see what is protected. Which should be read in conjunction with our Terms & Conditions.</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-2'>
                                            <img  alt='' className='img-fluid' src="../i.png" />
                                        </div>
                                        <div className='col-10'>
                                            <h5>Please remember to check the latest travel advice</h5>
                                            <p>Travel restrictions may be in place for this destination, please check the latest Government advice before you travel. You may also need to provide additional documents or test results for some destinations due to the Coronavirus pandemic.  Please visit https://www.gov.uk/foreign-travel-advice for more information and subscibe to our Covid-19 updates here.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='buttonses mt-3'>
                                    <div className='row'>
                                        <div className='col-md-5'>
                                            <div className='saving'>
                                                <h4>Total Savings</h4>
                                                <p>This deal <b> saves you £486 </b> on the overall package</p>
                                            </div>
                                        </div>
                                        <div className='col-md-7'>
                                            <div className='books d-flex'>
                                                <div className='Adults'>
                                                    <p className='p-0 m-0'><b>Book Holiday </b></p>
                                                    <h1>£1,786</h1>
                                                    <p>2 Adults</p>
                                                </div>
                                                <div className='arrow'>
                                                    <img  alt='' src="../arrow.png" className='img-fluid' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-right mt-4'>
                                    <p>Prices last updated 05/01/22 at 20:01</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='books d-flex'>
                                <div className='Adults'>
                                    <p className='p-0 m-0'><b>Book Holiday </b></p>
                                    <h1>£1,786</h1>
                                    <p>2 Adults</p>
                                </div>
                                <div className='arrow'>
                                    <img  alt='' src="arrow.png" className='img-fluid' />
                                </div>
                            </div>
                            <div className="secure">
                                <div className='flush'></div>
                                <p>Secure your holiday for just £30 per person</p>
                            </div>
                            <div className='emailme'>
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
                                    <small>Read our <a href="#" rel="noreferrer"> Privacy Policy </a></small>
                                </div>
                            </div>
                            <div className='confidence'>
                                <h3>Book with confidence</h3>
                                <div className='row'>
                                    <div className='col-3 text-center my-3'>
                                        <img  alt='' src='../footer.png' className='img-fluid' />
                                    </div>
                                    <div className='col-9 my-3'>
                                        <p>ATOL Protected</p>
                                    </div>
                                    <div className='col-3 text-center my-3'>
                                        <img  alt='' src='../pay.png' className='img-fluid' />
                                    </div>
                                    <div className='col-9 my-3'>
                                        <p>Pay Monthly</p>
                                    </div>
                                    <div className='col-3 text-center my-3'>
                                        <img  alt='' src='../check.png' className='img-fluid' />
                                    </div>
                                    <div className='col-9 my-3'>
                                        <p>Price Match Guarantee</p>
                                    </div>
                                </div>
                            </div>
                            <div className='tripadvisor'>
                                <img  alt='' src="../tripad.png" className='img-fluid' />
                                <p>Based on 2748 reviews</p>
                                <hr />
                                <div className='float-right'>
                                    <img  alt='' src="../dots.png" className='img-fluid' />
                                </div>
                                <h5>ABSOLUTE PERFECTION</h5>
                                <p>17 December 2021</p>
                                <p>Thank You very much for Amazing Stay: Location Superb (right on the beach!) Ambience Great (All Details add to the experience )  Building + Room Spacious. Clean, Comfortable, especially Balcony Facing ...</p>
                                <div className='text-right'>
                                    <a href='#' rel="noreferrer">Read More </a>
                                </div>

                                <hr />
                                <div className='float-right'>
                                    <img  alt='' src="../1dot.png" className='img-fluid' />
                                </div>
                                <h5>ABSOLUTE PERFECTION</h5>
                                <p>17 December 2021</p>
                                <p>Thank You very much for Amazing Stay: Location Superb (right on the beach!) Ambience Great (All Details add to the experience )  Building + Room Spacious. Clean, Comfortable, especially Balcony Facing ...</p>
                                <div className='text-right'>
                                    <a href='#' rel="noreferrer">Read More </a>
                                </div>

                                <hr />
                                <div className='float-right'>
                                    <img  alt='' src="dots.png" className='img-fluid' />
                                </div>
                                <h5>ABSOLUTE PERFECTION</h5>
                                <p>17 December 2021</p>
                                <p>Thank You very much for Amazing Stay: Location Superb (right on the beach!) Ambience Great (All Details add to the experience )  Building + Room Spacious. Clean, Comfortable, especially Balcony Facing ...</p>
                                <div className='text-right'>
                                    <a href='#' rel="noreferrer">Read More </a>
                                </div>

                                <hr />
                                <div className='float-right'>
                                    <img  alt='' src="dots.png" className='img-fluid' />
                                </div>
                                <h5>ABSOLUTE PERFECTION</h5>
                                <p>17 December 2021</p>
                                <p>Thank You very much for Amazing Stay: Location Superb (right on the beach!) Ambience Great (All Details add to the experience )  Building + Room Spacious. Clean, Comfortable, especially Balcony Facing ...</p>
                                <div className='text-right'>
                                    <a href='#' rel="noreferrer">Read More </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Holiday
