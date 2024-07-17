import './Signin.css'

const Sign = () => {
  return (
    <div className='sign-in-form1'>
      <form action="">
        <div className="form-groups">
            <input type="text" placeholder='fullname' required/> <br />
            <input type="text" placeholder='Username' required/> <br />
            <input type="email" placeholder='email' required/> <br />
            <select name="" id="">
                <option>Select type</option>
                <option>Resturant</option>
                <option>Customer</option>
            </select> <br />
            <button type='button' className='signinbtn'>sign-in</button>
        </div>
      </form>
    </div>
  )
}

export default Sign
