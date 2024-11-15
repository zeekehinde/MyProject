import React from 'react'
import './RestOwner.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Next'

const RestOwner = () => {
  return (
    <>
    <Navbar/>
  <div className="rest-sign">
      <div className='text'>
      <h3>Sign us as a resturant</h3>
      <h6>Fill in the form to get started</h6>
      </div>
  <form>
    <input type="text" placeholder="Username" name="username" required /> <br />
    <input type="password" placeholder="password" name="password" required /> <br />
    <button type="submit"><a href="/Next">Next</a></button>
  </form>
  </div>
    <Footer/>
    </>
  )
}

export default RestOwner
