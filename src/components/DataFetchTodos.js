import axios from 'axios';
import React, { useEffect, useState } from 'react'

import "./DataFetchTodos.css"

function DataFetchTodos() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [todos, setTodos] = useState({});

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(response =>{
            setLoading(false);
            setTodos(response.data);
            setError('');
        })
        .catch(error =>{
            setLoading(false);
            setTodos('');
            setError(error);
        })
    }, [])

  return (
    <React.Fragment>
        {loading ? 'Loading..' : todos.map((todo, index)=>{
            let background = todo.completed ? "green" : "red";
            return(
                <div key={index} className={background}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.userId}</h2>
                    <h3>{todo.completed ? 'Completed' : 'Not completed'}</h3>
                    <hr/>
                </div>
            )
        })} 
    </React.Fragment>
  )
}

export default DataFetchTodos