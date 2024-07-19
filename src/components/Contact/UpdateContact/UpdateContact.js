import React from 'react'

function UpdateContact({contact}) {
  return (
    <div>
        <form action={`http://localhost:5000/updatecontact/${contact._id}?_method=PUT`} method='post'>
            <label for="nom">Nom</label>
            <input type="text" name="nom" defaultValue={contact.nom}/>
            <label for="prenom">Prénom</label>
            <input type="text" name="prenom" defaultValue={contact.prenom}/>
            <label for="email">Email :</label>
            <input type="email" name="email" id="email" defaultValue={contact.email}/>
            <label for="message">Message</label>
            <textarea name="message" id="message" defaultValue={contact.message}>
            </textarea>

            <input type="submit" value="Mettre a jour le contact"/>
        </form>

        <form action={`http://localhost:5000/deletecontact/${contact._id}?_method=DELETE`} method='post'>

            <input type='submit' value="Supprimer le contact" />
        </form>

    </div>
  )
}

export default UpdateContact