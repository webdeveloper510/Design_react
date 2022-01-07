import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "Layer1.png" },
  { url: "image.png" },
  { url: "Layer2.png" },
  { url: "Layer3.png" },
  { url: "Layer4.png" },
  { url: "Layer123.png" },
];
function Holiday() {
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
                    <div className='back my-2'>
                      <button className='btn btn-warning' type="button"> back to search </button>
                    </div>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='coral'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h4>Coral Beach Hotel and Resort</h4>
                                        <p>(Coral Bay, Paphos Cyprus)</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <h4>London Gatwick to Paphos</h4>
                                        <p>2 Adults - Saturday 2 July 2022 (<a href="#"> 14 nights </a>)</p>
                                    </div>
                                </div>
                            </div>
                            <SimpleImageSlider
                                width={'100%'}
                                style={{position:'relative'}}
                                height={504}
                                images={images}
                                showBullets={true}
                                showNavs={true}
                            />

<ul class="nav nav-tabs mt-4" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">ABOUT</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <div className='mt-3'>
     <p>Official hotel rating:  </p> 

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
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
<div className='my-3'>
    <h3>Alternative Dates</h3>
</div>
                        </div>
                        <div className='col-md-4'>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Holiday
