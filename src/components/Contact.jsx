import React from 'react'
import Form from './Form'

function Contact() {
  return (
    <>
      <div className="cover pt-2 mt-2">
        <div className="container text-light text-center pt-5">
        <h3>Contact</h3>
        <p>Home<i className="fa fa-arrow-right ms-3 me-3"></i>Contact</p>
        </div> 
      </div>

{/* Phone */}
    <div className="container">
      <div className="row">
        <div className="col-md-6 pt-5">
          <p>Kindly call us or join our support group on WhatsApp.</p>
          <div className="d-flex mt-3 pt-3">
            <div className="flex-grow">
            <i className="fa fa-phone me-3"></i>
            </div>
            <div className="flex-grow-1">
              <p>+234 9072211222</p>
            </div>
          </div>

{/* whatsapp */}
          <div className="d-flex">
            <div className="flex-grow">
            <i className="fa-brands fa-whatsapp me-3"></i>
            </div>
            <div className="flex-grow-1">
              <p>+234 8167000077</p>
            </div>
          </div>

{/* Email */}
          <div className="d-flex">
            <div className="flex-grow">
            <i className="fa fa-envelope fa-light me-3"></i>
            </div>
            <div className="flex-grow-1">
              <p>info_Crystal_Shipment@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
        <Form/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
