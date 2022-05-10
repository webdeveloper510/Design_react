import React, {useState,useEffect}from 'react'
import mainLogo from './suntours_logo.svg';
import headerImage from '../assets/Layer123.png'
import holidayImage from '../assets/holi.png'
import aboutImage from '../assets/about.png'
import destinationImage from '../assets/desti.png'
import holiday1Image from '../assets/holiday.png'
import hotelImage from '../assets/hotels.png'
import socialImage from '../assets/Social.png'

import {
  Link
} from "react-router-dom";
const baseURL = "http://sun-1.co.uk:3001/v1";
function Header(props) {
  const[data,setData]=useState([])
  const[activeClass,setActiveClass]=useState(null) 
  const [subMenu,setSubMenu]=useState()

  useEffect(() => {
    getMenu()
console.log('here working ')
  },[]);
  async function getMenu(){
    const res = fetch(`${baseURL}/menu/getMenuList`)
    const data =  (await res).json().then(res=>{
      console.log(res)
      setData(res)
      setSubMenu(res[0])
      
    })
  }
  const test =(id)=>{
    console.log(id)
    let activeIndex = activeClass === id ? null : id;
    setActiveClass({activeIndex});
    setSubMenu(data[id])
  }
  return (
    <div className="container narrow">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a rel="noreferrer"className="navbar-brand"><img  alt='' src={mainLogo}  style={{ marginTop: '-27px', marginLeft: '-55px' }} width="301px" height="45px" /></a>
          <button className="navbar-toggler d-none " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 m-lg-auto">
              <li className="nav-item">
                <a rel="noreferrer"className="nav-link " aria-current="page" href="#">Travel Alerts</a>
              </li>
              <li className="nav-item">
                <a rel="noreferrer"className="nav-link" href="#">Shortlist (0)</a>
              </li>
              <li className="nav-item">
                <a rel="noreferrer"className="nav-link" href="#">Manage Booking </a>
              </li>
              <li className="nav-item">
                <a rel="noreferrer"className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-bars"></i> </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mobile">
        <a rel="noreferrer" className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-bars"></i> </a>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1"  aria-hidden="true">
        <div className="modal-dialog" style={{ marginTop: '6.75rem' }}>
          <div className="modal-content">

            <div className="modal-body" style={{ paddingLeft: '0px', paddingTop: '0px' }}>
              <div className="float-right pt-2">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="mega-menu ">
                <div className="row">
                  <div className="col-md-3" style={{ paddingLeft: '0px', paddingTop: '0px' }}>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    { data.length!=0&& data.map((menu,key)=>(
                        <li  className="nav-item" role="presentation">
                          
                        <a rel="noreferrer" className={`nav-link ${activeClass === key && 'm-active'}`} onClick={()=>test(key)}id="pills-Holidays-tab" data-bs-toggle="pill" data-bs-target="#pills-Holidays"  role="tab"  aria-selected="true"> <img  alt='' src={menu.icon} className="img-fluid" />{menu.title}  &nbsp;&nbsp; </a>
                      </li>
                    ))
                                }
                    
                      {/* <li className="nav-item" role="presentation">
                        <a rel="noreferrer" className="nav-link" id="pills-Destinations-tab" data-bs-toggle="pill" data-bs-target="#pills-Destinations"  role="tab"  aria-selected="false"> <img  alt='' src={destinationImage} className="img-fluid" /> Destinations  &nbsp;&nbsp; ></a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a rel="noreferrer"href="#" className="nav-link" id="pills-Hotels-tab" data-bs-toggle="pill" data-bs-target="#pills-Hotels" role="tab"  aria-selected="false"> <img  alt='' src={hotelImage} className="img-fluid" /> Hotels  &nbsp;&nbsp; ></a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a rel="noreferrer"href="#" className="nav-link " id="pills-About-tab" data-bs-toggle="pill" data-bs-target="#pills-About"  role="tab" aria-selected="false"><img  alt='' src={aboutImage}className="img-fluid" /> About Us  &nbsp;&nbsp; ></a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a rel="noreferrer"href="#" className="nav-link" id="pills-Extras-tab" data-bs-toggle="pill" data-bs-target="#pills-Extras"  role="tab"  aria-selected="false"><img  alt='' src={holiday1Image} className="img-fluid" /> Holiday Extras  &nbsp;&nbsp; ></a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a rel="noreferrer"href="#" className="nav-link" id="pills-Social-tab" data-bs-toggle="pill" data-bs-target="#pills-Social" role="tab"  aria-selected="false"><img  alt='' src={socialImage} className="img-fluid" /> Social  &nbsp;&nbsp; ></a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="col-md-9">
           {
             subMenu&&(
              <div className="tab-content mt-2 p-3" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-Holidays" role="tabpanel" >
                <div className="row">
                  <div className="col-md-4">
                    <h4 className="mb-4">Featured Holidays</h4>
                    <img  alt='' src={subMenu.image} className="mt-2 mb-2" height="111px" width="95%" />
                    <ul className="list-group list-group-flush first-list">
                      <li className="list-group-item"> <a rel="noreferrer"href="#">Holidays to Greecs & Cyprus  </a></li>
                    </ul>
                  </div>
                  <div className="col-md-8">
                    <h4 className="mb-4 holi">{subMenu.title} </h4>
                    <ul className="list-group list-group-flush row">
                      {
                        subMenu.subMenus.length!=0 && subMenu.subMenus.map((data,index)=>(
                          <li className="list-group-item first col-md-6">
                          <Link to={'/holiday/624828d4424af43b3a728fe8'}>{data.title} </Link>
                        </li>
                        )
                    
                        )
                      }
                     
                      {/* <li className="list-group-item"><a rel="noreferrer"href="#">Beach Holidays  </a>
                      </li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Family Holidays </a></li>
                      <li className="list-group-item last"><a rel="noreferrer"href="#"> Adult Holidays </a></li> */}
                    </ul>
                  </div>
                  {/* <div className="col-md-4">
                    <h4 className="mb-4" style={{ opacity: 0 }}>Holidays </h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item first"><a rel="noreferrer"href="#">Balaerics Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Canaries Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Spain Holidays </a></li>
                      <li className="list-group-item last"><a rel="noreferrer"href="#"> USA Holidays  </a></li>
                    </ul>
                  </div> */}
                </div>

                <div className="text-right">
                  <ul className="list-group list-group-flush ">
                    <li className="list-group-item">
                    <Link to={'/holiday/624828d4424af43b3a728fe8'}>ALL HOLIDAYS </Link>
                    {/* <a href='/holiday/624828d4424af43b3a728fe8'  > </a> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-Destinations" role="tabpanel">
                <div className="row">
                  <div className="col-md-4">
                    <h4 className="mb-4">Featured Holidays</h4>
                    <img  alt='' src={headerImage} className="mt-2 mb-2" height="111px" width="80%" />
                    <ul className="list-group list-group-flush first-list">
                      <li className="list-group-item"> <a rel="noreferrer"href="#">Holidays to Greecs & Cyprus  </a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h4 className="mb-4 holi">Holidays </h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item first"><a rel="noreferrer"href="#">All-inclusive Holidays </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Beach Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Family Holidays </a></li>
                      <li className="list-group-item last"><a rel="noreferrer"href="#"> Adult Holidays </a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h4 className="mb-4" style={{ opacity: 0 }}>Holidays </h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item first"><a rel="noreferrer"href="#">Balaerics Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Canaries Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Spain Holidays </a></li>
                      <li className="list-group-item last"><a rel="noreferrer"href="#"> USA Holidays  </a></li>
                    </ul>
                  </div>
                </div>
                <div className="text-right">
                  <ul className="list-group list-group-flush ">
                    <li className="list-group-item"><a rel="noreferrer"href="#"> ALL HOLIDAYS   </a></li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-Hotels" role="tabpanel" >
                <div className="row">
                  <div className="col-md-4">
                    <h4 className="mb-4">Featured Holidays</h4>
                    <img  alt='' src={headerImage} className="mt-2 mb-2" height="111px" width="80%" />
                    <ul className="list-group list-group-flush first-list">
                      <li className="list-group-item"> <a rel="noreferrer"href="#">Holidays to Greecs & Cyprus  </a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h4 className="mb-4 holi">Holidays </h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item first"><a rel="noreferrer"href="#">All-inclusive Holidays </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Beach Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Family Holidays </a></li>
                      <li className="list-group-item last"><a rel="noreferrer"href="#"> Adult Holidays </a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h4 className="mb-4" style={{ opacity: 0 }}>Holidays </h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item first"><a rel="noreferrer"href="#">Balaerics Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Canaries Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Spain Holidays </a></li>
                      <li className="list-group-item last"><a rel="noreferrer"href="#"> USA Holidays  </a></li>
                    </ul>
                  </div>
                </div>
                <div className="text-right">
                  <ul className="list-group list-group-flush ">
                    <li className="list-group-item"><a rel="noreferrer"href="#"> ALL HOLIDAYS   </a></li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-About" role="tabpanel">
                <div className="row">
                  <div className="col-md-4">
                    <h4 className="mb-4">Featured Holidays</h4>
                    <img  alt='' src={headerImage} className="mt-2 mb-2" height="111px" width="80%" />
                    <ul className="list-group list-group-flush first-list">
                      <li className="list-group-item"> <a rel="noreferrer"href="#">Holidays to Greecs & Cyprus  </a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h4 className="mb-4 holi">Holidays </h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item first"><a rel="noreferrer"href="#">All-inclusive Holidays </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Beach Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Family Holidays </a></li>
                      <li className="list-group-item last"><a rel="noreferrer"href="#"> Adult Holidays </a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h4 className="mb-4" style={{ opacity: 0 }}>Holidays </h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item first"><a rel="noreferrer"href="#">Balaerics Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Canaries Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Spain Holidays </a></li>
                      <li className="list-group-item last"><a rel="noreferrer"href="#"> USA Holidays  </a></li>
                    </ul>
                  </div>
                </div>
                <div className="text-right">
                  <ul className="list-group list-group-flush ">
                    <li className="list-group-item"><a rel="noreferrer"href="#"> ALL HOLIDAYS   </a></li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-Extras" role="tabpanel">
                <div className="row">
                  <div className="col-md-4">
                    <h4 className="mb-4">Featured Holidays</h4>
                    <img  alt='' src={headerImage}className="mt-2 mb-2" height="111px" width="80%" />
                    <ul className="list-group list-group-flush first-list">
                      <li className="list-group-item"> <a rel="noreferrer"href="#">Holidays to Greecs & Cyprus  </a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h4 className="mb-4 holi">Holidays </h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item first"><a rel="noreferrer"href="#">All-inclusive Holidays </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Beach Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Family Holidays </a></li>
                      <li className="list-group-item last"><a rel="noreferrer"href="#"> Adult Holidays </a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h4 className="mb-4" style={{ opacity: 0 }}>Holidays </h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item first"><a rel="noreferrer"href="#">Balaerics Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Canaries Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Spain Holidays </a></li>
                     <li className="list-group-item last"><a rel="noreferrer"href="#"> USA Holidays  </a></li>
                    </ul>
                  </div>
                </div>
                <div className="text-right">
                  <ul className="list-group list-group-flush ">
                    <li className="list-group-item"><a rel="noreferrer"href="#"> ALL HOLIDAYS   </a></li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-Social" role="tabpanel">

                <div className="row">
                  <div className="col-md-4">
                    <h4 className="mb-4">Featured Holidays</h4>
                    <img  alt='' src={headerImage} className="mt-2 mb-2" height="111px" width="80%" />
                    <ul className="list-group list-group-flush first-list">
                      <li className="list-group-item"> <a rel="noreferrer"href="#">Holidays to Greecs & Cyprus  </a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h4 className="mb-4 holi">Holidays </h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item first"><a rel="noreferrer"href="#">All-inclusive Holidays </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Beach Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Family Holidays </a></li>
                      <li className="list-group-item last"><a rel="noreferrer"href="#"> Adult Holidays </a></li>

                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h4 className="mb-4" style={{ opacity: 0 }}>Holidays </h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item first"><a rel="noreferrer"href="#">Balaerics Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Canaries Holidays  </a></li>
                      <li className="list-group-item"><a rel="noreferrer"href="#">Spain Holidays </a></li>
                      <li className="list-group-item last"><a rel="noreferrer"href="#"> USA Holidays  </a></li>

                    </ul>
                  </div>
                </div>

                <div className="text-right">
                  <ul className="list-group list-group-flush ">
                    <li className="list-group-item"><a rel="noreferrer"href="#"> ALL HOLIDAYS   </a></li>
                  </ul>
                </div>


              </div>
            </div>
             )
           }
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Header
