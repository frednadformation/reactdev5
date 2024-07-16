import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Film() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [film, setFilm] = useState({});
    const [choixUser, setChoixUser] = useState('');

    useEffect(()=>{
        // axios.get('http://www.omdbapi.com/?t='+choixUser+'&apikey=82e70288')
        axios.get(`http://www.omdbapi.com/?t=${choixUser}&apikey=82e70288`)
        .then((response)=>{
            setLoading(false);
            setFilm(response.data);
            setError('');
        })
        .catch((error)=>{
            setLoading(false);
            setFilm({});
            setError(error)
        });
    })

    const handleInputChange = (event) => {
        setChoixUser(event.target.value);
        console.log(choixUser);
    };
  return (
    <React.Fragment>
        <label>Titre du film</label>
        <br />
        <input type='text' onChange={handleInputChange} />

        <h1>{loading ? 'Loading...'  :  film.Title}</h1>
        <img src={film.Poster} alt='posterFilm' />
        <h3>{loading ? 'Loading...'  :  film.Year}</h3>
        <h4>{loading ? 'Loading...'  :  film.BoxOffice}</h4>
        {error ? error : null}
    </React.Fragment>
  )
}

export default Film