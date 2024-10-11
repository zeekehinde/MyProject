import './Signin.css'
import React from "react"
import { useState, useEffect } from 'react'


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
    <div className='sign-in-form1'>
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
  )
}

export default Sign
