import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'

function DataFetchContact() {
    const initialState = {
        loading: true,
        error: '',
        contacts : {}
    }

    const reducer = (state, action) =>{
        switch(action.type){
            case 'FETCH_SUCCESS' :
                return{
                    loading: false,
                    contacts: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR' :
                return{
                    loading: false,
                    contacts: {},
                    error: "Something went wrong"
                }
            default :
                return state;
        }   
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() =>{
        axios.get('http://localhost:5000/')
        .then(response =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error =>{
            dispatch({type: 'FETCH_ERROR'})
        })
    }, [])


  return (
    <div>DataFetchContact
    {state.loading ? 'Loading..' : state.contacts.map((contact, index)=>{
        return(
            <div key={index}>
            <Link to={"/contact/"+contact._id} >
                <h1>{contact.nom}</h1>
            </Link>
            <Link to={`/contact/${contact._id}`}>
                <h1>{contact.prenom}</h1>
            </Link>
                <p>{contact.email}</p>
                <p>{contact.message}</p>
                <p>id contact : {contact._id}</p>
            </div>
        )

    })}
    </div>
  )
}

export default DataFetchContact