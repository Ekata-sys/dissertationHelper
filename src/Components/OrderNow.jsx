import React from 'react'
import Form from './Form'
export default function OrderNow() {
  return (
    <>
    <div className='container'>
    <div className="row">
             <div className='col-lg-6 my-2'>
              

                <div className="usp1 py-4 px-2">
                        <h2 className="each-heading">Acquire These Benefits With Your ORDER:</h2>
                        <ul>
                  

                          <li><i className="fa fa-check-circle list-icons" aria-hidden="true"></i>Money-Back Policy</li>
                          <li><i className="fa fa-check-circle list-icons" aria-hidden="true"></i>On-time Delivery of Work</li>
                          <li><i className="fa fa-check-circle list-icons" aria-hidden="true"></i>Free Plagiarism Report Confirming Content Authenticity</li>
                          <li><i className="fa fa-check-circle list-icons" aria-hidden="true"></i>24/7 Customer Assistance to Answer any Queries</li>
                          <li><i className="fa fa-check-circle list-icons" aria-hidden="true"></i>100% Ownership Belonging to the Client</li>
                          <li><i className="fa fa-check-circle list-icons" aria-hidden="true"></i>Confidentiality of Personal Information</li>
                          <li><i className="fa fa-check-circle list-icons" aria-hidden="true"></i>Unlimited Revisions</li>
                          <li><i className="fa fa-check-circle list-icons" aria-hidden="true"></i>500+ Professional Subject Matter Experts</li>
                          <li><i className="fa fa-check-circle list-icons" aria-hidden="true"></i>2M+ Satisfied Students</li>
                          <li><i className="fa fa-check-circle list-icons" aria-hidden="true"></i>Completed 258000+ Orders</li>

                        </ul>
                      </div>
             </div>

             <div className='col-lg-6 mb-5 mb-lg-0'>
              <div className='form d-flex justify-content-center pb-5 w-74 ps-0 ps-lg-5 ms-0 ms-lg-5'>
                <Form/>
                <br/>
              </div>
             </div>
            </div>
              </div>
    </>
  )
}
