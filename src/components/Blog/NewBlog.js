import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function NewBlog() {
    const [sujet, setSujet] = useState("");
    const [auteur, setAuteur] = useState("");
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSujetChange = (event) => {
        setSujet(event.target.value);
    };

    const handleAuteurChange = (event) => {
        setAuteur(event.target.value);
    };
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(file && sujet && auteur){
            const formData = new FormData;
            formData.append('image', file);
            formData.append('sujet', sujet);
            formData.append('auteur', auteur);
            axios.post('http://localhost:5000/nouveaublog', formData)
            .then((response) => {
                console.log(response.data);
                return navigate('/allblogs');
            })
            .catch((error) => {
                console.error(error);
            });
        }


    };

  return (
    <form onSubmit={handleSubmit}>
        <label>Sujet</label>
        <input type='text' onChange={handleSujetChange}/>
        <label>Auteur</label>
        <input type='text' onChange={handleAuteurChange}/>
        <label> Image du blog</label>        
        <input type='file' onChange={handleFileChange}/>

        <input type='submit' value="Upload blog" />

    </form>
  )
}

export default NewBlog