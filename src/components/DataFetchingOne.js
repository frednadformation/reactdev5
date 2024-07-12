import React, { useEffect, useState } from 'react'

import axios from 'axios'

function DataFetchingOne() {
    //Le chargement de la donnée
    const [loading, setLoading] = useState(true);
    //Error
    const [error, setError] = useState('');
    //donnée
    const [donnees, setDonnees] = useState({});

    //Fonction pour récupérer la donnée
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            setLoading(false)
            console.log(response.data);//optionnel
            setDonnees(response.data)
            setError('')
        })
        .catch(error =>{
            setLoading(false)
            setDonnees('')
            setError('Something went wrong !')
        });
    }, [])
    //, [] => useEffect soit réalisé une seule fois

    //Affichage de la donnée
  return (
    <div>
        <h1>{loading ? 'Loading.....' : donnees.title}</h1>
        <p>{loading ? 'Loading.....' : donnees.body}</p>
        {error ? error : null}
    </div>
  )
}

export default DataFetchingOne