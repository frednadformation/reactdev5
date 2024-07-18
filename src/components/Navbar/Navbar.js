import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/services'>Services</Link>
        <Link to='/profile/max'>Profil</Link>
    </nav>
  )
}

export default Navbar