import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
      <h1>
          {/* remember add the class to add logo  */}
        <a ><i></i> MyRoomies</a>
      </h1>
      <ul>
      <li>
        <Link to="/profiles">Roomates</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    </nav>
    )
}


export default Navbar;