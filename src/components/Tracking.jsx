import React from 'react'


function Tracking() {
  return (
    <>
      <div className="cover pt-2 mt-2">
        <div className="container text-light text-center pt-5">
        <h3>Tracking</h3>
        <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Tracking</p>
        </div> 
      </div>

      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6">
          <h2>TRACK YOUR SHIPMENT</h2>
          <div className="bg-red mb-3"></div>
          <p>If you require maximum visibility to your Freight transactions, contact our logistic customer team or you can track your cargo by using below tracking system.</p>
          </div>

          <div className="col-md-6">
            <div>
              <input type="text" placeholder='Enter your tracking ID Here' className='form-control'/>
            </div>
            <div className="pt-3">
            <button className='btn btn-danger ps-4 pe-4'>Track</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tracking
