import React from 'react'
import './RestOwner.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const Next = () => {
  return (
    <>
    <Navbar/>
    <div className="next">
    <div className='text-next'>
      <h3>Complete Signup</h3>
      <h6>Fill in restaruant details</h6>
      </div>
    <form action="">
      <input type="text" placeholder="Restuarant name" name="name" required /> <br />
      <input type="text" placeholder="Restuarant Phone Number" name="number" required /> <br />
      <input type="password" placeholder="Password" name="password" required /> <br />
      <input type="text" placeholder="Restuarant Address" name="Address" required /> <br />
      <h6>Upload restaruant logo</h6>
      <input
            type="file"
            accept="image/*"
            required
          /> 
      <button type="submit"><a href="/Dashboard">Submit</a></button>
    </form>
  </div>
  <Footer/>
  </>
  )
}

export default Next
