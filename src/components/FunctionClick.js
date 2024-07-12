import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Bouton clicked");
    }

  return (
    <div><button onClick={clickHandler}>Click Me !</button></div>
  )
}

export default FunctionClick