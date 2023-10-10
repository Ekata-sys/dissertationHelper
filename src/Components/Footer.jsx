import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   
    <>

<a href="https://wa.me/61493535569" className="btn-whatsapp-pulse">
	<i className="fab fa-whatsapp"></i>
</a>

    <footer>
        <div className="footer">
          <div className="container text-light py-4">
            <div className="row">
               <div className="col-lg-3 col-md-6 col-12 p-1">
                <h2 className='fs-4 fw-600'><img src="./assets/img/dissertation-helpercomau-logo.webp" className='position-relative' style={{zIndex:"2"}} width="200px" alt="" /></h2>
                <p className='fs-4 mb-5 text-black'>Make better future for<br/>
your Career</p>
                <ul className='list-unstyled d-flex'>
                  <li><Link to="https://www.instagram.com/dissertationhelperreal/"><span className='social-media fs-4 m-2'><i className="fa-brands fa-facebook"></i></span></Link></li>
                  <li><Link to="https://www.facebook.com/dissertationhelperreal/"><span className='social-media fs-4 m-2'><i className="fa-brands fa-square-instagram"></i></span></Link></li>
                  <li><Link to="https://twitter.com/Dissertation_H/"><span className='social-media fs-4 m-2'><i className="fa-brands fa-square-twitter"></i></span></Link></li>
                  <li><Link to="https://www.pinterest.com.au/dissertationhelperreal/"><span className='social-media fs-4 m-2'><i className="fa-brands fa-pinterest"></i></span></Link></li>
                  <li><Link to="https://www.linkedin.com/company/dissertationhelperreal/"><span className='social-media fs-4 m-2'><i className="fa-brands fa-linkedin"></i></span></Link></li>
                </ul>
              </div>
               <div className="col-lg-3 col-md-6 col-12 p-1">
                <h4 className='fs-4 fw-600'>SUBJECT</h4>
                <ul className='list-unstyled'>
                  <li><Link to="#" className='fs-6'>Accounting Dissertation</Link></li>
                  <li><Link to="#" className='fs-6'>Economics Dissertation</Link></li>
                  <li><Link to="#" className='fs-6'>dissertation Dissertation</Link></li>
                  <li><Link to="#" className='fs-6'>Engineering Dissertation</Link></li>
                  <li><Link to="#" className='fs-6'>Civil Engineering Dissertation</Link></li>
                  <li><Link to="#" className='fs-6'>Finance Dissertation Services</Link></li>
                </ul>
              </div>
               <div className="col-lg-3 col-md-6 col-12 p-1">
                <h4>SERVICES</h4>
                <ul className="list-unstyled">
                <li><Link to="#" className='fs-6'>Dissertation Experts</Link></li>
                <li><Link to="#" className='fs-6'>Dissertation Proofreading</Link></li>
                <li><Link to="#" className='fs-6'>Dissertation Research Proposal</Link></li>
                <li><Link to="#" className='fs-6'>Dissertation Writer</Link></li>
                <li><Link to="#" className='fs-6'>Dissertation Writing Services</Link></li>
                <li><Link to="#" className='fs-6'>Write My Dissertation</Link></li>
                </ul>
              </div>
               <div className="col-lg-3 col-md-6 col-12 p-1">
                <h4 className='fs-4 fw-600'>Contact info</h4>
                <ul className='list-unstyled'>
                  <li><p className='text-black fs-6'>For any questions, feedback, or
comments, we have an ethical
customer support team that is always
waiting on the line for your inquiries.</p></li>
                
                  <li><p className='mb-1 fs-6 text-black'>
                    {/* <strong>Email: </strong> */}
                    <a href="mailto:info@dissertationhelper.com.au">info@dissertationhelper.com.au</a></p></li>
                
                  <li><p className='mb-1 fs-6 text-black'><strong>Call us: </strong><a href="tel:61493535569"> +61 493 5355 69</a></p></li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      
    </footer>
</>
  )
}
