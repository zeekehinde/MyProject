import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
      <img src={process.env.PUBLIC_URL + '/Assets/Deliverrr.png'} height = "25px" width= "125px" alt="My logo" />
      </div>
      <div className="navbar">
        <ul className='navbar-nav'>
          <li className='navbar-items'>
          <a href="/" className="nav-link">Home</a>
          </li>
          <li className='navbar-items'>

          <a href="/Restaurant"  className="nav-link">
             Restaruants
          </a>

          </li>
          <li className='navbar-items'>
          <a href="/about" className="nav-link">About Us</a>
          </li>
          <li className='navbar-items'>
          <a href="/contact" className="nav-link">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className='sign-in'>
      <button type='button' className='btn' ><a href="/Sign">Sign In</a> </button>
      </div>
      <div className='Restsign-in'>
      <button type='button' className='bunny' ><a href="/RestOwner">Register as restaurant</a> </button>
      </div>
    </div>
  )
}

export default Navbar
