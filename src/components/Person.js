import React from 'react'
import "./person.css"

function Person({person}) {
  //Ternaire pour affecter la variable classh2 en fonction du name
  let classh2 = person.name == 'Diana' ? 'hero2' : 'hero1'
  return (
    <div>
        <h2 className={classh2}>Je suis {person.name}. J'ai {person.age} ans. Je connais {person.skill}</h2>
    
    </div>
  )
}

export default Person