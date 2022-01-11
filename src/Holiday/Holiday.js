import React, { useState } from 'react';
import Calendar from 'react-calendar';
import SimpleImageSlider from "react-simple-image-slider";
import 'react-calendar/dist/Calendar.css';
import './Holiday.css';
const images = [
    { url: "Layer1.png" },
    { url: "image.png" },
    { url: "Layer2.png" },
    { url: "Layer3.png" },
    { url: "Layer4.png" },
    { url: "Layer123.png" },
];
function Holiday() {
    const [value, onChange] = useState(new Date());

    return (
        <section>
            <div className="bars">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <a href="">London Gatwick</a>
                        </div>
                        <div className="col-2">
                            <a href="">Paphos Area</a>
                        </div>
                        <div className="col-2">
                            <a href=''> 08 Jul +/- 3 days</a>
                        </div>
                        <div className="col-2">
                            <a href=''>14 Nights</a>
                        </div>
                        <div className="col-2">
                            <a href="">2 Guests </a>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-primary form-control" type="button">EDIT SEARCH</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='holidays'>
                <div className='container'>
                    <div className='back py-2'>
                        <button className='btn btn-warning' type="button"> back to search </button>
                    </div>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='coral'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='Resort'>
                                            <h5>Coral Beach Hotel and Resort <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </h5>
                                            <p>(Coral Bay, Paphos Cyprus)</p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='Resort'>
                                            <h5><img src="plane.png" className='img-fluid' />London Gatwick to Paphos</h5>
                                            <p> &nbsp;  &nbsp;  &nbsp;  &nbsp; 2 Adults - Saturday 2 July 2022 (<a href="#"> 14 nights </a>)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='position-relative'>
                                <div className='looked'>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <img src="eye.png" className='img-fluid' />
                                        </div>
                                        <div className='col-9'>
                                            <p><b>62 </b> others have <b>LOOKED </b> at this hotel in the last hour</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='booked'>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <img src="bookplan.png" className='img-fluid' />
                                        </div>
                                        <div className='col-9'>
                                            <p><b>40+</b> others have <b>BOOKED </b>  this hotel in the last 7 days</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='wishlist1'>
                                    <p>Add to wishlist  <i class="fa fa-heart-o"></i></p>
                                </div>
                            </div>
                            <SimpleImageSlider
                                width={'100%'}
                                style={{ position: 'relative' }}
                                height={504}
                                images={images}
                                showBullets={true}
                                showNavs={true}
                            />
                            <div className='float-right'>
                                <img src="holiday_listing.png" className='img-fluid' />
                            </div>
                            <ul class="nav nav-tabs mt-4" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">ABOUT</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">FACILITIES</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">LOCATION</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className='mt-3'>
                                        <p>Official hotel rating: <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </p>

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
                                        <p> <b>Food & Drink </b></p>
                                        <p>Coral Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Reservations: Reservations not required.
                                        </p>
                                        <p>Armonia Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Reservations: Reservations not required. Calypso Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Limani Taverna* Cuisine: Greek and Cypriot Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open alternative evenings Pizza & Pasta Restaurant* Cuisine: Italian Dress code: Casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open occasionally (summer only) Molos* Cuisine: Greek and Cypriot Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open alternative evenings (summer only) Romazzino* Cuisine: Mediterranean Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Diners must be aged 13 or over *Open alternative evenings La Rotisserie* Cuisine: International Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Diners must be aged 13 or over *Open alternative evenings Dionyssos Bar Opening Hours: 11:00 – 23:00 Odyssey Bar & Nightclub Opening Hours: 21:30 – 01:00 Poseidon Pool Bar Opening Hours: 09:00 – 19:00
                                        </p>
                                        <p> <b> Sports & Entertainment</b></p>
                                        <p>Guests can enjoy use of the hotel swimming pool, spa and fitness centre, sauna, Turkish bath, communal library, bicycle rental, kids playground, complimentary Wi-Fi throughout the property, and regular entertainment.
                                        </p>
                                        Read less
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className='mt-3'>
                                        <p>Official hotel rating: <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </p>

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
                                        <p> <b>Food & Drink </b></p>
                                        <p>Coral Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Reservations: Reservations not required.
                                        </p>
                                        <p>Armonia Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Reservations: Reservations not required. Calypso Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Limani Taverna* Cuisine: Greek and Cypriot Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open alternative evenings Pizza & Pasta Restaurant* Cuisine: Italian Dress code: Casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open occasionally (summer only) Molos* Cuisine: Greek and Cypriot Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open alternative evenings (summer only) Romazzino* Cuisine: Mediterranean Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Diners must be aged 13 or over *Open alternative evenings La Rotisserie* Cuisine: International Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Diners must be aged 13 or over *Open alternative evenings Dionyssos Bar Opening Hours: 11:00 – 23:00 Odyssey Bar & Nightclub Opening Hours: 21:30 – 01:00 Poseidon Pool Bar Opening Hours: 09:00 – 19:00
                                        </p>
                                        <p> <b> Sports & Entertainment</b></p>
                                        <p>Guests can enjoy use of the hotel swimming pool, spa and fitness centre, sauna, Turkish bath, communal library, bicycle rental, kids playground, complimentary Wi-Fi throughout the property, and regular entertainment.
                                        </p>
                                        Read less
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div className='mt-3'>
                                        <p>Official hotel rating: <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </p>

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
                                        <p> <b>Food & Drink </b></p>
                                        <p>Coral Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Reservations: Reservations not required.
                                        </p>
                                        <p>Armonia Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Reservations: Reservations not required. Calypso Restaurant Cuisine: International Dress code: Casual Opening Hours Breakfast: 07:00 – 10:00 Lunch: 12:30 – 14:30 Dinner: 19:00 – 22:00 Limani Taverna* Cuisine: Greek and Cypriot Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open alternative evenings Pizza & Pasta Restaurant* Cuisine: Italian Dress code: Casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open occasionally (summer only) Molos* Cuisine: Greek and Cypriot Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Open alternative evenings (summer only) Romazzino* Cuisine: Mediterranean Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Diners must be aged 13 or over *Open alternative evenings La Rotisserie* Cuisine: International Dress code: Smart casual Opening Hours: 19:00 – 22:00 Reservations: Reservations required. *Diners must be aged 13 or over *Open alternative evenings Dionyssos Bar Opening Hours: 11:00 – 23:00 Odyssey Bar & Nightclub Opening Hours: 21:30 – 01:00 Poseidon Pool Bar Opening Hours: 09:00 – 19:00
                                        </p>
                                        <p> <b> Sports & Entertainment</b></p>
                                        <p>Guests can enjoy use of the hotel swimming pool, spa and fitness centre, sauna, Turkish bath, communal library, bicycle rental, kids playground, complimentary Wi-Fi throughout the property, and regular entertainment.
                                        </p>
                                        Read less
                                    </div>
                                </div>
                            </div>
                            <div className='my-3'>
                                <h3>Alternative Dates</h3>
                            </div>
                            <Calendar
                                onChange={onChange}
                                value={value}
                            />
                            <div className='my-4'>
                                <div className='included'>
                                    <h3>Your Flights are included!</h3>
                                    <p>This is our best deal out of 8 different options.</p>
                                </div>
                            </div>

                            <div className='my-4'>
                                <div className='included'>
                                    <h3>Your Flights are included!</h3>
                                    <p>This is our best deal out of 8 different options.</p>
                                </div>
                            </div>

                            <div className='my-4'>
                                <div className='included'>
                                    <p>Add Hold Baggage</p>
                                </div>
                            </div>


                            <div className='my-4'>
                                <div className='included'>
                                    <h3>Your Board is included!</h3>
                                    <p>More board options are available below</p>
                                </div>
                            </div>

                            <div className='my-4'>
                                <div className='included'>
                                    <h3>Your Travel Party</h3>
                                    <p>Age on date of return</p>
                                </div>
                            </div>

                            <div className='my-4'>
                                <div className='included'>
                                    <h3>Before you book</h3>
                                </div>
                                <div className='protected'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <img className='img-fluid' src="pro.png" />
                                        </div>
                                        <div className='col-10'>
                                            <h5>Our packages are financially protected</h5>
                                            <p>All the flight inclusive holidays shown on suntours.co.uk are financially protected by the ATOL Scheme. suntours hold an Air Travel Organiser’s Licence (ATOL) granted by the Civil Aviation Authority, our ATOL number is 12345. When you book and pay for your holiday you wil be supplied with an ATOL Certificate. Please read your booking conditions to see what is protected. Which should be read in conjunction with our Terms & Conditions.</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-2'>
                                            <img className='img-fluid' src="i.png" />
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
                                                    <img src="arrow.png" className='img-fluid' />
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
                                    <img src="arrow.png" className='img-fluid' />
                                </div>
                            </div>
                            <div className="secure">
                                <div className='flush'></div>
                                <p>Secure your holiday for just £30 per person</p>
                            </div>
                            <div className='emailme'>
                                <h3>Email me this holiday deal</h3>
                                <p>I want to subscribe to holiday deals by email</p>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                    <label class="form-check-label" for="inlineCheckbox1">Yes</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                    <label class="form-check-label" for="inlineCheckbox2">No</label>
                                </div>
                                <form class="d-flex">
                                    <input class="form-control me-2" type="email" placeholder="Enter email address" />
                                    <button class="btn btn-warning" type="submit">Send</button>
                                </form>
                                <div className='text-right'>
                                    <small>Read our <a href="#"> Privacy Policy </a></small>
                                </div>
                            </div>
                            <div className='confidence'>
                                <h3>Book with confidence</h3>
                                <div className='row'>
                                    <div className='col-3 text-center my-3'>
                                        <img src='footer.png' className='img-fluid' />
                                    </div>
                                    <div className='col-9 my-3'>
                                        <p>ATOL Protected</p>
                                    </div>
                                    <div className='col-3 text-center my-3'>
                                        <img src='pay.png' className='img-fluid' />
                                    </div>
                                    <div className='col-9 my-3'>
                                        <p>Pay Monthly</p>
                                    </div>
                                    <div className='col-3 text-center my-3'>
                                        <img src='check.png' className='img-fluid' />
                                    </div>
                                    <div className='col-9 my-3'>
                                        <p>Price Match Guarantee</p>
                                    </div>
                                </div>
                            </div>
                            <div className='tripadvisor'>
                                <img src="tripad.png" className='img-fluid' />
                                <p>Based on 2748 reviews</p>
                                <hr />
                                <div className='float-right'>
                                    <img src="dots.png" className='img-fluid' />
                                </div>
                                <h5>ABSOLUTE PERFECTION</h5>
                                <p>17 December 2021</p>
                                <p>Thank You very much for Amazing Stay: Location Superb (right on the beach!) Ambience Great (All Details add to the experience )  Building + Room Spacious. Clean, Comfortable, especially Balcony Facing ...</p>
                                <div className='text-right'>
                                    <a href='#'>Read More </a>
                                </div>

                                <hr />
                                <div className='float-right'>
                                    <img src="1dot.png" className='img-fluid' />
                                </div>
                                <h5>ABSOLUTE PERFECTION</h5>
                                <p>17 December 2021</p>
                                <p>Thank You very much for Amazing Stay: Location Superb (right on the beach!) Ambience Great (All Details add to the experience )  Building + Room Spacious. Clean, Comfortable, especially Balcony Facing ...</p>
                                <div className='text-right'>
                                    <a href='#'>Read More </a>
                                </div>

                                <hr />
                                <div className='float-right'>
                                    <img src="dots.png" className='img-fluid' />
                                </div>
                                <h5>ABSOLUTE PERFECTION</h5>
                                <p>17 December 2021</p>
                                <p>Thank You very much for Amazing Stay: Location Superb (right on the beach!) Ambience Great (All Details add to the experience )  Building + Room Spacious. Clean, Comfortable, especially Balcony Facing ...</p>
                                <div className='text-right'>
                                    <a href='#'>Read More </a>
                                </div>

                                <hr />
                                <div className='float-right'>
                                    <img src="dots.png" className='img-fluid' />
                                </div>
                                <h5>ABSOLUTE PERFECTION</h5>
                                <p>17 December 2021</p>
                                <p>Thank You very much for Amazing Stay: Location Superb (right on the beach!) Ambience Great (All Details add to the experience )  Building + Room Spacious. Clean, Comfortable, especially Balcony Facing ...</p>
                                <div className='text-right'>
                                    <a href='#'>Read More </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Holiday
