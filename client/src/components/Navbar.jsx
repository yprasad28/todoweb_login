import React from 'react'
import {Link} from 'react-router-dom'

function Navbar({active}) {
  return (
    <header>
      <nav>
        <div className='logo_wrapper'>
          {/* <img src={logo} alt="logo"/> */}
          <h4>ToDo!</h4>
         </div>
         <ul className='navigation-menu'>
          <li><Link to="/" className={active === "home" && "activeNav"}>Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
         </ul>
      </nav>
    </header>
  )
}

export default Navbar
