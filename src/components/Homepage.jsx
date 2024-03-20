import React from 'react'
import About from '../assets/about.png'
import Pic1 from '../assets/1.png'
import Pic2 from '../assets/2.png'
import Pic3 from '../assets/3.png'
import Form from './Form'
import Icon1 from '../assets/icon1.png'
import Icon2 from '../assets/icon2.png'
import Icon3 from '../assets/icon3.png'

function Homepage() {
    const cardsData = [
        { image: Pic1, title: 'Air Freight', content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored ...' },
        { image: Pic2, title: 'Sea Freight', content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain ...' },
        { image: Pic3, title: 'Land Freight', content: 'Cargo are transported at some stage of their journey along the world’s roads where we...' },
        // Add more card data objects as needed
      ]

  return (
    <>
    <div className="hero pt-5">
        <div className="container text-center text-light pt-5">
            <h1 className="pt-5">Easy & Quick Cargo Shipping Services </h1>
            <p style={{fontSize:'24px'}}>Book low cost sea freight shipping services. Get an instant quote.</p>
            <a href="/tracking" className='btn btn-danger'>Track Goods Here</a>
        </div>
    </div>

    {/* about */}
    <div className="container ">
        <div className='text-center pt-5'>
            <h2>Welcome to Crystal Shipment</h2>
            <div className="bg-red mx-auto mb-3"></div>
            <p>Crystal Shipment is more than logistics. We can also optimize your packaging, manage your materials sourcing, and so much more.</p>
        </div>
        <div className="row pt-4">
            <div className="col-md-6">
            <img src={About} className='img-fluid rounded' alt="" />
            </div>

            <div className="col-md-6">
            <p className='text-danger'>TRANSPORTATION COMPANY</p>
            <h3>We Provide Full Range Logistics Solution</h3>
            <p>We strongly believe that pursuing all of these goals is in our interest and in the interest of all of our stakeholders are us customers, employees, investors and the planet as a whole. We add value to cargo people’s interaction with us, with excellent services or products. Engaging our employees and nurture investment on the stock holds market we show concern , by engaging our employees and nurture investment on the stock holds market we show concern.</p>
            <a href="" className='btn btn-danger text-light'>Learn More</a>
            </div>
        </div>

    {/* category */}
    <div className="container pt-5 text-center">
        <p className="text-danger">TYPES OF LOGISTIC</p>
        <h2>Covering All Logistics Fields</h2>
    </div>

{/* card */}
    <div className="row">
        {cardsData.map((card, index) => (
        <div key={index} className="col-md-4 pt-4">
        <div className="card">
        <img src={card.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-title">{card.title}</h4>
          <p className="card-text">{card.content}
          <a href="#" className="text-danger text-decoration-none">Read More</a></p>
        </div>
      </div>
      </div>
        ))}
    </div>
    <div className="text-center pt-4">
    <a href="" className='btn btn-danger'>Load More</a>
    </div>
    </div>

    {/* banner */}
    <div className="bg-warning mt-5 mt-5" style={{ minHeight: '180px', padding: '20px 0' }}>
        <div className="container">
          <div className="row pt-5 d-flex justify-content-center">
            <div className='col-md-8'>
            <h2>Delivering your world one package at a time</h2>
            <p>Crystal Shipment is more than logistics.</p>
            </div>
            <div className="col-md-4 text-md-end text-sm-start">
               <a href='/contact' className="btn btn-danger">Request a Quote</a> 
            </div>
          </div>
        </div>
      </div>

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                <h2>WHY CHOOSE US?</h2>
                    <div className="d-flex pt-4">
                        <div className="flex-grow-1">
                            <img src={Icon1} alt="" className='pe-3'/>
                        </div>
                        <div className="flex-grow-1">
                            <h5>Global Supply Chain Solution</h5>
                            <p>Efficiently unleash cross-media information without cross-media value.</p>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="flex-grow-1">
                            <img src={Icon2} alt="" className='pe-3'/>
                        </div>
                        <div className="flex-grow-1">
                            <h5>Mobile Shipment Tracking</h5>
                            <p>We Offers intelligent concepts for road and tail and well as complex special transport services</p>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="flex-grow-1">
                            <img src={Icon3} alt="" className='pe-3'/>
                        </div>
                        <div className="flex-grow-1">
                            <h5>Careful Handling of Valuable Goods</h5>
                            <p>Cargo HUB are transported at some stage of their journey along the world’s roads</p>
                        </div>
                    </div>
                </div>

        {/* form */}
                <div className="col-md-6">
                <h2>REQUEST A QUOTE</h2>
                <Form/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Homepage
