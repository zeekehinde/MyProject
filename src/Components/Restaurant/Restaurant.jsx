import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Restaurant.css'
import Popup from '../Order/Popup'
import React, { useState } from 'react';

const Restaurant = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const [selectedServing, setSelectedServing] = useState('');

  const handleProceed = () => {
    if (selectedServing) {
      alert(`You selected serving example ${selectedServing}`);
      setPopupVisible(false); // Close the popup on proceed
    } else {
      alert('Please select a serving.');
    }
  };


  return (
    <div className='restaruant' id='section-four'>
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
      <img src={process.env.PUBLIC_URL + '/Assets/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know' onClick={() => setPopupVisible(true)}>Order</button>
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

    <div className="restaruant-container">
      <img src={process.env.PUBLIC_URL + '/Assets/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know' onClick={() => setPopupVisible(true)}>Order</button>
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

    <div className="restaruant-container">
      <img src={process.env.PUBLIC_URL + '/Assets/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know' onClick={() => setPopupVisible(true)}>Order</button>
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

    <div className="restaruant-container">
      <img src={process.env.PUBLIC_URL + '/Assets/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know' onClick={() => setPopupVisible(true)}>Order</button>
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


      <div className="restaurant-card-container2">
      <div className="restaruant-container">
      <img src={process.env.PUBLIC_URL + '/Assets/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know' onClick={() => setPopupVisible(true)}>Order</button>
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

    <div className="restaruant-container">
      <img src={process.env.PUBLIC_URL + '/Assets/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know' onClick={() => setPopupVisible(true)}>Order</button>
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

    <div className="restaruant-container">
      <img src={process.env.PUBLIC_URL + '/Assets/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know' onClick={() => setPopupVisible(true)}>Order</button>
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

    <div className="restaruant-container">
      <img src={process.env.PUBLIC_URL + '/Assets/Food.jfif'} className='Rest-images' height='90px' width='90' alt='' />
      <h3 className='rest-text'>Mama's Cooking Restaurant</h3>
      <p>We've got your breakfast, lunch <br /> and dinner covered</p>
      <div className="rest-stars">
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/11.png'} className='Rest-images' height='10px' width='10px' alt='' />
        <img src={process.env.PUBLIC_URL + '/Assets/22.png'} className='Rest-images' height='10px' width='10px' alt='' />
      </div>
      <button type='button' className='rest-know' onClick={() => setPopupVisible(true)}>Order</button>
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

        </div>

      <Footer />
    </div>
  )
}

export default Restaurant
