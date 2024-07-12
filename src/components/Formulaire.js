import React from 'react'
import './formulaire.css'

function Formulaire() {

    function handleUsernameChange(event) {
        console.log(event.target.value);
    };

    const handleTopicChange = (event) =>{
        if(event.target.value == 'Diana'){
            event.target.className = "diana";
        }
    }
  return (
    <form>
        <label>Username</label>
        <input type='text' onChange={handleUsernameChange} />
        <label>Comment</label>
        <input type='text' />
        <label>Topic</label>
        <input type='text' onChange={handleTopicChange} />


        <input type='submit' />

    </form>
  )
}

export default Formulaire