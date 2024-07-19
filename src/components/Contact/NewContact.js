import React from 'react'

function NewContact() {
  return (
    <form action="http://localhost:5000/nouveaucontact" method="post">
        <label for="nom">Nom</label>
        <input type="text" name="nom"/>
        <label for="prenom">Prénom</label>
        <input type="text" name="prenom"/>
        <label for="email">Email :</label>
        <input type="email" name="email" id="email"/>
        <label for="message">Message</label>
        <textarea name="message" id="message"></textarea>

        <input type="submit"/>
    </form>
  )
}

export default NewContact