import React from 'react'
import Pic1 from '../assets/1.png';
import Pic2 from '../assets/2.png';
import Pic3 from '../assets/3.png';
import Pic4 from '../assets/4.png';
import Pic5 from '../assets/5.png';
import Pic6 from '../assets/6.png';
import services from '../assets/services.png';

function Services() {
  const cardsData = [
    {image: Pic1, title: 'Air Freight', content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored ...' },
    {image: Pic2, title: 'Sea Freight', content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain ...' },
    {image: Pic3, title: 'Land Freight', content: 'Cargo are transported at some stage of their journey along the world’s roads where we...' },
    {image: Pic4, title: 'Warehousing', content: 'Package and store your things effectively and securely to make sure them in storage, have certif...' },
    {image: Pic5, title: 'Door to Door Delivery', content: 'Our expertise in transport management and planning allows us to design a solution. hand...' },
    {image: Pic6, title:'Packaging & Storage' , content:'Package and store your things effectively and securely to make sure them in storage, We...'},
    // Add more card data objects as needed
  ]

  return (
    <>
      <div className="cover pt-2 mt-2">
        <div className="container text-light text-center pt-5">
        <h3>Services</h3>
        <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Our Services</p>
        </div> 
      </div>
      
         {/* <Cards/> */}
    <div className="container">
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
    </div>

    <div className="container pt-5 mb-3">
      <div className="row">
        <div className="col-md-7">
          <img src={services} className="Img-fluid rounded" alt=""/>
        </div>

        <div className="col-md-5">
          <h2>THE COMPLETE SOLUTION</h2>
          <div className="bg-red"></div>
          <p className='pt-3'>Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Pleasure and praising pain was born and I will give you a complete account of system, and expound actual teachings occasionally circumstances.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
