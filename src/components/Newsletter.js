import React from 'react'

import './newsletter.css'

const handleLetterChange = (event) =>{
    if(event.target.value.length > 3 ){
        event.target.className = "borderGreen";
    }
    else if (event.target.value.length >= 1){
        event.target.className = "borderRed";
    }
    else{
        event.target.className = "";
    }

    // if(event.target.value.length == 0 ){
    //     event.target.className = "";
    // }
    // else if (event.target.value.length <= 3){
    //     event.target.className = "borderRed";
    // }
    // else{
    //     event.target.className = "borderGreen";
    // }
}

function Newsletter() {
  return (
    <div>
        <form>
            <label>Pseudo</label>
            <input type='text' onChange={handleLetterChange} />
            <label>email</label>
            <input type='email' />

            <input type='submit' />
        </form>
    </div>
  )
}

export default Newsletter