import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function FetchOneBlog() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [blog, setBlog] = useState({});

    const params = useParams();

    useEffect(()=>{
        axios.get('http://localhost:5000/blog/' + params.id)
        .then((response) =>{
            setLoading(false);
            setBlog(response.data);
            setError('');
        })
        .catch((error) =>{
            setLoading(false);
            setBlog({})
            setError(error.message);
        })
    }, []);

  return (
    <div>
        <h1>{loading ? 'Loading...' : blog.sujet}</h1>
        <h2>{loading ? 'Loading...' : blog.auteur}</h2>
        <h2>{loading ? 'Loading...' : blog.description}</h2>
        <p>{loading ? 'Loading...' : blog.message}</p>
    </div>
  )
}

export default FetchOneBlog