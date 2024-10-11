import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Homepage.css'
import Popup from '../Order/Popup'
import React, { useState } from 'react';

const Homepage = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const [selectedServing, setSelectedServing] = useState('');

  const handleProceed = () => {
    if (selectedServing) {
      alert('You selected serving example', {selectedServing});
      setPopupVisible(false); // Close the popup on proceed
    } else {
      alert('Please select a serving.');
    }
  };

  return (
    <>
    <Navbar/>
    <div className='homepage-container'>
      <div className='section-one'>
        <div className='hero-image'>
          <img src={process.env.PUBLIC_URL + '/images/Group.png'} height='550px' width= '550' alt="" />
        </div>
      </div>
        <div className='hero-buttons'>
            <button type='button' className='herosign-in'> <a href="/Sign"> Sign In </a> </button>
            <button type='button' className='resturant'>Resturants</button>
        </div>
      <div className='Section-two'>
        <div className='left'>
          <h1 className='section-header'>About Us</h1>
          <div className="rectangle"></div>
          <div className='left2'>
            <div className='write-up'>
            <div className='text'>Deliverrr food service</div>
            <div className='text2'>Get food delivered right to your doorstep <br /> at an afordable price.</div>
          </div>
          <button type='button' className='know-more' >More about us</button>
          </div>
        </div>
        <div className='right'>
        <img src={process.env.PUBLIC_URL + '/images/African.png'} className='img1' height='400px' width= '400' alt='' />
        </div>
      </div>
      <div className='section-three'>
          <h1 className="section-header3">How it works</h1>
          <div className="rectangle3"></div>
          <div className="imgs">
            <div className="order">
            <img src={process.env.PUBLIC_URL + '/images/Shoppingbasket.png'} className='img1' height='90px' width= '90' alt='' />
            <h3 className='sec3-text'>Order</h3>
            </div>
            <div className="payment">
            <img src={process.env.PUBLIC_URL + '/images/payment.png'} className='img1' height='90px' width= '90' alt='' />
            <h3 className='sec3-text'>Payment</h3>
            </div>
            <div className="delivery">
            <img src={process.env.PUBLIC_URL + '/images/delivery-truck.png'} className='img1' height='90px' width= '90' alt='' />
            <h3 className='sec3-text'>Delivery</h3>
            </div>
          </div>
      </div>

      
      <div className="section-four">
        <div className='section-header-sub'>
          <h1 className="section-header4">Restaruants</h1>
          <h3 className="side-text">search your fav</h3>
          <h3 className="side-text">Near you</h3>
        </div>
        <div className="rectangle4"></div>
        <div className="cards-container">
  <div className="container">
    <img src={process.env.PUBLIC_URL + '/images/Food.jfif'} className='Images' height='90px' width='90' alt='' />
    <h3 className='sec3-text'>Mama's Cooking Restaurant</h3>
    <p>We've got your breakfast, lunch <br /> and dinner covered</p>
    <div className="stars">
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/22.png'} className='Images' height='10px' width='10px' alt='' />
    </div>
    <button type='button' className='know' onClick={() => setPopupVisible(true)} >Order</button>
    <Popup trigger={isPopupVisible} setTrigger={setPopupVisible}>
    <h6>Select Serving</h6> 
    <select
          value={selectedServing}
          onChange={(e) => setSelectedServing(e.target.value)}
          style={{height: '30px', width: '120px',}}
> 
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        {/* Proceed button */}
        <button onClick={handleProceed} style={{ marginTop: '20px', color: 'white', background: '#106470', borderRadius: '5px', height:'30px', width: '80px' }} disabled={!selectedServing}>
          Proceed
        </button>

    </Popup> 
  </div>

  <div className="container">
    <img src={process.env.PUBLIC_URL + '/images/Food.jfif'} className='Images' height='90px' width='90' alt='' />
    <h3 className='sec3-text'>Mama's Cooking Restaurant</h3>
    <p>We've got your breakfast, lunch <br /> and dinner covered</p>
    <div className="stars">
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/22.png'} className='Images' height='10px' width='10px' alt='' />
    </div>
    <button type='button' className='know' onClick={() => setPopupVisible(true)}>Order</button>
    <Popup trigger={isPopupVisible} setTrigger={setPopupVisible}>
    <h6>Select Serving</h6> 
    <select
          value={selectedServing}
          onChange={(e) => setSelectedServing(e.target.value)}
          style={{height: '30px', width: '120px',}}
        > 
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        {/* Proceed button */}
        <button onClick={handleProceed} style={{ marginTop: '20px', color: 'white', background: '#106470', borderRadius: '5px', height:'30px', width: '80px' }} disabled={!selectedServing}>
          Proceed
        </button>

    </Popup> 
  </div>

  <div className="container">
    <img src={process.env.PUBLIC_URL + '/images/Food.jfif'} className='Images' height='90px' width='90' alt='' />
    <h3 className='sec3-text'>Mama's Cooking Restaurant</h3>
    <p>We've got your breakfast, lunch <br /> and dinner covered</p>
    <div className="stars">
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/22.png'} className='Images' height='10px' width='10px' alt='' />
    </div>
    <button type='button' className='know' onClick={() => setPopupVisible(true)}>Order</button>
    <Popup trigger={isPopupVisible} setTrigger={setPopupVisible}>
    <h6>Select Serving</h6> 
    <select
          value={selectedServing}
          onChange={(e) => setSelectedServing(e.target.value)}
          style={{height: '30px', width: '120px',}}
        > 
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        {/* Proceed button */}
        <button onClick={handleProceed} style={{ marginTop: '20px', color: 'white', background: '#106470', borderRadius: '5px', height:'30px', width: '80px' }} disabled={!selectedServing}>
          Proceed
        </button>

    </Popup> 
  </div>

  <div className="container">
    <img src={process.env.PUBLIC_URL + '/images/Food.jfif'} className='Images' height='90px' width='90' alt='' />
    <h3 className='sec3-text'>Mama's Cooking Restaurant</h3>
    <p>We've got your breakfast, lunch <br /> and dinner covered</p>
    <div className="stars">
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/11.png'} className='Images' height='10px' width='10px' alt='' />
      <img src={process.env.PUBLIC_URL + '/images/22.png'} className='Images' height='10px' width='10px' alt='' />
    </div>
    <button type='button' className='know' onClick={() => setPopupVisible(true)}>Order</button>
    <Popup trigger={isPopupVisible} setTrigger={setPopupVisible}>
    <h6>Select Serving</h6> 
    <select
          value={selectedServing}
          onChange={(e) => setSelectedServing(e.target.value)}
          style={{height: '30px', width: '120px',}}
        > 
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        {/* Proceed button */}
        <button onClick={handleProceed} style={{ marginTop: '20px', color: 'white', background: '#106470', borderRadius: '5px', height:'30px', width: '80px' }} disabled={!selectedServing}>
          Proceed
        </button>

    </Popup> 
  </div>
</div>

    <div className="section-5">
      </div>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Homepage