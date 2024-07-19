import React from 'react'

import { useLocation } from 'react-router-dom'

function Developpement() {
  const location = useLocation();
  console.log(location);

  return (
    <div>Developpement</div>
  )
}

export default Developpement