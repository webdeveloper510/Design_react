import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div className="container">
        
            <div className="row">
                <div className="col-md-9">
                    <h4 className="my-3">Legal</h4>
                   <p className="user"><a rel="noreferrer"href rel="noreferrer">User Agreement </a>| <a rel="noreferrer"href rel="noreferrer">Privacy </a>|<a rel="noreferrer"href rel="noreferrer"> Cookies </a> | <a rel="noreferrer"href rel="noreferrer">AdChoices </a></p>
                   <div className="row">
                       <div className="col-md-3 ">
                           <img  alt='' src="footerlogo.png" height="128px"className="img-fluid"/>
                       </div>
                       <div className="col-md-9 mt-3">
                           <h5> <b>Stay Safe whilst you travel </b> </h5>
                           <p> 
                          
                            For the latest foreign travel advice visit <a rel="noreferrer"href="www.gov.uk/foreign-travel-advice">www.gov.uk/foreign-travel-advice</a><br/>
                            <br/>
                            Follow our <a rel="noreferrer"href="" rel="noreferrer"> travel update</a><br/><br/>
                            
                            Visit the  <a rel="noreferrer"href="" rel="noreferrer"> Covid-19 Hub </a> to see how we provide guidance and protection<br/>
                            </p>
                       </div>
                   </div>
                </div>
              
                <div className="col-md-3">
                    <h4 className="my-3">Follow Us</h4>
                    <div className="d-flex">
                        <img  alt='' src="facebook.png" className="img-fluid"/>
                        <img  alt='' src="insta.png" className="img-fluid"/>
                        <img  alt='' src="twiter.png" className="img-fluid"/>
                        <img  alt='' src="youtube.png" className="img-fluid"/>
                    </div>
                    <div className="mt-3">
                        <h4>Subscribe to our newsletter</h4>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                            <button className="btn btn-primary" type="button" >SUBMIT</button>
                            </div>
                        <small>No spam, serious!</small>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-8">
                    <p className="mt-3" style={{fontSize: '20px'}}>© 2022  Suntours Limited | Company Number: 13534409 | ATOL: 123456 <img  alt=''  src="footer.png"width="30px" height="30px"/></p>
                </div>
                <div className="col-md-4 text-right">
                    <img  alt='' src="home-alternate.png" height="50px" className="img-fluid"/>
                </div>
            </div>
            <hr/>
            <div className="smalltext">
            <p>Suntours are a UK based travel agency, specialising in package holiday deals, flights and hotels. We act as an agent providing a web search interface between you and various third party suppliers of travel products (e.g. flight, hotel or transfer). For flights we act as your agent in processing your booking with the airline; we are not the airline’s agent. Each product you choose creates a separate contract between you and the supplier of that product.
                </p>
                <p>All the flight-inclusive holidays on this website are financially protected by the ATOL scheme. When you pay you will be supplied with an ATOL Certificate. Please ask for it and check to ensure that everything you booked (flights, hotels and other services) is listed on it. If you do receive an ATOL Certificate but all the parts of your trip are not listed on it, those parts will not be ATOL protected. Some of the flights on this website are also financially protected by the ATOL scheme, but ATOL protection does not apply to all flights. This website will provide you with information on the protection that applies in the case of each flight before you make your booking. If you do not receive an ATOL Certificate then the booking will not be ATOL protected. Please see our booking conditions for information, or for more information about financial protection and the ATOL Certificate go to: www.caa.co.uk. ATOL protection does not apply to the other holiday and travel services listed on this website.</p>
        </div>
        </div>
    )
}

export default Footer
