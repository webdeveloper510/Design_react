import React from 'react'


function header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="Logo.png" width="200px" height="70px"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  mb-2 m-lg-auto">
                    <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#"><i class="fa fa-exclamation-circle"></i> Travel Alerts</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#"><i class="fa fa-heart"></i> Shortlist (0)</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">My Bookings </a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Login
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div className="bottom-arrow"></div>
                        <li><a className="dropdown-item" href="#">Login to your account</a></li>
                        <li><a className="dropdown-item" href="#"> Create an account </a></li>
                        <li><a className="dropdown-item active" href="#"> View/edit a booking </a></li>
                        <li><a className="dropdown-item" href="#"> Advance passenger info (API) </a></li>
                       
                    </ul>
                    </li>
                   
                </ul>
              
                </div>
            </div>
            </nav>
            </div>
     
    )
}

export default header
