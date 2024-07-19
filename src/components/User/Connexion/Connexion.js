import React from 'react'

function Connexion() {
  return (
        <form action="http://localhost:5000/api/connexion" method="post">
        <label for="">Email : </label>
        <input type="email" name="email" />

        <label for="">password</label>
        <input type="password" name="password" />

        <input type="submit" value="Connexion" />

    </form>
  )
}

export default Connexion