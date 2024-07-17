import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Restaurant.css'

const Restaurant = () => {
  return (
    <div className='restaruant'>
      <Navbar />
        <div className="restaruant-body">
        <div className='restaruant-header'>
          <h1 className="restaruant-text1">Restaruants near you</h1>
          <div className="rectangle4"></div>
          <div className="link-texts">
            <p className="restaruant-text2">search your fav</p>
            <p className="restaruant-text3">Near you</p>
          </div>
        </div>

      <div className="restaurant-card-container">
      <div className="restaruant-container">
      <img src={process.env.PUBLIC_URL + '/images/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know'>Order</button>
    </div>  

    <div className="restaruant-container">
      <img src={process.env.PUBLIC_URL + '/images/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know'>Order</button>
    </div> 

    <div className="restaruant-container">
      <img src={process.env.PUBLIC_URL + '/images/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know'>Order</button>
    </div> 

    <div className="restaruant-container">
      <img src={process.env.PUBLIC_URL + '/images/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know'>Order</button>
    </div> 
      </div>


      <div className="restaurant-card-container2">
      <div className="restaruant-container">
      <img src={process.env.PUBLIC_URL + '/images/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know'>Order</button>
    </div>  

    <div className="restaruant-container">
      <img src={process.env.PUBLIC_URL + '/images/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know'>Order</button>
    </div> 

    <div className="restaruant-container">
      <img src={process.env.PUBLIC_URL + '/images/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know'>Order</button>
    </div> 

    <div className="restaruant-container">
      <img src={process.env.PUBLIC_URL + '/images/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/images/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know'>Order</button>
    </div> 
      </div>

        </div>

      <Footer />
    </div>
  )
}

export default Restaurant
