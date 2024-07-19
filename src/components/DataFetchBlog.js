import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'

function DataFetchBlog() {
    const initialState = {
        loading: true,
        error: '',
        blogs: {}
    }

    const reducer = (state, action) =>{
        switch(action.type){
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    blogs: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR':
                return {
                    loading: false,
                    blogs: {},
                    error: "Something went wrong"
                }
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('http://localhost:5000/allposts')
        .then((response) =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data});
        })
        .catch((error) =>{
            dispatch({type: 'FETCH_ERROR'})
        })
    }, [])


  return (
    <div>
        {state.loading ? 'Loading...' : state.blogs.map((blog, index)=>{
            return(
                <div key={index}>
                <Link to={`/blog/${blog._id}`}>
                    <h1>{blog.sujet}</h1>
                </Link>
                    <h1>{blog.auteur}</h1>
                    <p>{blog.description}</p>
                    <p>{blog.message}</p>
                </div>
            )
        })}
    </div>
  )
}

export default DataFetchBlog