import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ServiceContainer } from './Container.style'

function Services() {
  return (
    <ServiceContainer>
      <div>
      Services
      <nav>
        <Link to="/services/developpement">Services Developpement</Link>
        <Link to="/services/marketing">Services Marketing</Link>
      </nav>
      <Outlet />
      </div>
    </ServiceContainer>
  )
}

export default Services