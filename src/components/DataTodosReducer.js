import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

function DataTodosReducer() {
    const initialState = {
        loading: true,
        error: '',
        todos: {}
    }

    const reducer = (state, action) =>{
        switch(action.type){
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    todos: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR':
                return {
                    loading: false,
                    todos: {},
                    error: "Something went wrong"
                }

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(response =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error =>{
            dispatch({type: 'FETCH_ERROR'})
        });

    }, [])

  return (
    <React.Fragment>
        {state.loading ? 'Loading....' : state.todos.map((todo, index)=>{
            return(
                <div key={index}>
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

export default DataTodosReducer