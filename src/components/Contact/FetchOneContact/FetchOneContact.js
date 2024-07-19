import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import UpdateContact from '../UpdateContact/UpdateContact';

function FetchOneContact() {

    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    const [contact, setContact] = useState({});

    useEffect(() =>{
        // axios.get('http://localhost:5000/contact/'+params.id)
        axios.get(`http://localhost:5000/contact/${params.id}`)
        .then((response) =>{
            setLoading(false);
            setContact(response.data);
            setError('')
        })
        .catch((error) =>{
            setLoading(false);
            setContact({});
            setError(error.message);
        })
    }, [])

  return (
    <div>
        <h1>{loading ? "Loading...." : contact.nom}</h1>
        <h1>{loading ? "Loading...." : contact.prenom}</h1>
        <h1>{loading ? "Loading...." : contact.email}</h1>
        <p>{loading ? "Loading...." : contact.message}</p>

        <UpdateContact contact={contact} />
    </div>
  )
}

export default FetchOneContact