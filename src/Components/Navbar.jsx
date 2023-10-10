import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-xl">
       <Link className="navbar-brand" to="/"><img src="./assets/img/dissertation-helpercomau-logo.webp" className='position-relative' style={{zIndex:"2"}} width="100%" alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 text-center">
                <li className="nav-item">
                   <a className="nav-link fw-600" aria-current="page" href="#services">Services</a>
                </li> 
                <li className="nav-item">
                   <a className="nav-link fw-600" href="#subject">Subject</a>
                </li>
                {/* <li className="nav-item">
                   <a className="nav-link fw-600" href='#support'>Support</a>
                </li> */}
                <li className="nav-item">
                   <a className="nav-link fw-600 " href='#review'>Review</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link fw-600 " href='#contact'>ContactUs</a>
                </li>
                {/* <li className="nav-item">
                   <Link className="nav-link fw-600 " to='/blogpage'>Blog</Link>
                </li> */}
            </ul>
            <div className="d-flex justify-content-center">
       
        <button className="nav-order-now" type="submit"><Link to='/ordernow'>Order Now</Link></button>
      </div>
        </div>
    </div>
</nav>


  )
}
