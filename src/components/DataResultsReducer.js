import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import './DataResultsReducer.css'
function DataResultsReducer() {
    const initialState = {
        loading: true,
        error: '',
        users : {}
    }

    const reducer = (state, action) =>{
        switch(action.type){
            case 'FETCH_SUCCESS' :
                return{
                    loading: false,
                    users: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR' :
                return{
                    loading: false,
                    users: {},
                    error: "Something went wrong"
                }
            default :
                return state;
        }   
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() =>{
        axios.get('https://randomuser.me/api/?results=60')
        .then(response =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data.results})
        })
        .catch(error =>{
            dispatch({type: 'FETCH_ERROR'})
        })
    }, [])

  return (
    <section className="grille">

        {state.loading ? 'Loading' : state.users.map((user, index)=>{
            return(
                <div key={index} className='border'>
                    <img src={user.picture.large} />
                    <h1>{user.name.title}. {user.name.first} {user.name.last}</h1>
                    <h2>{user.login.username}</h2>
                    <h2>{user.email}</h2>
                    <h2>{user.nat}</h2>
                    <h2>{user.location.city}, {user.location.country}</h2>
                </div>
            )
        })}

    </section>
  )
}

export default DataResultsReducer