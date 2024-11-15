import './Signin.css'
import React from "react"
import { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const Sign = () => {
  const [fullname, setfullname]= useState("")
  const [username, setusername]= useState("")
  const [email, setemail]= useState("")
  const [type, settype]= useState("")

  const handlereg = ()=>{
    if(fullname === "" || username === "" || email === "" || type === ""){
      alert("data cannot be empty" )
    } else{

    }
  }

  return (
    <>
    <Navbar />
    <div className='sign-in-form1'>
      <div className='text'>
      <h3>Want to get food from your favourite restaruant?</h3>
      <h6>Fill in the form to get started</h6>
      </div>
      <form action="http://localhost:3600/api/auth/register" method='post'>
        <div className="form-groups">
            <input type="text" placeholder='fullname' name='fullname' required/> <br />
            <input type="text" placeholder='Username' name='username' required/> <br />
            <input type="email" placeholder='email' name='email' required/> <br />
            <select name="selectType" id="">
                <option disabled>Select type</option>
                <option value="restaurant">Resturant</option>
                <option value="customer">Customer</option>
            </select> <br />
            <button type='submit' className='signinbtn'>submit</button>
        </div>
      </form>
    </div>
    <Footer />
    </>
  )
}

export default Sign
