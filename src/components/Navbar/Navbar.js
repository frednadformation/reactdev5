import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/services'>Services</Link>
        <Link to='/profile/max'>Profil</Link>
    
        <Link to="http://localhost:5000/logout">
          Logout !
        </Link>
    </nav>
  )
}

export default Navbar