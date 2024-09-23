import React, { useState } from 'react'
import axios from 'axios'

function ImageUpload() {
    const [selectedFile, setSelectedFile] = useState(null)
    const handleFileChange = (event) => {
        console.log(event.target.files[0]);
        //On récupere le fichier choisi par l'utilisateur et on charge la variable selectedFile
        setSelectedFile(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //empecher la soumission du formulaire vers un action

        //Si l'utilisateur charge un fichier, nous envoyons le fichier vers le backend
        if (selectedFile){
            const formData = new FormData();
            formData.append('image', selectedFile);
            axios.post('http://localhost:5000/upload', formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='file' onChange={handleFileChange} />
            <input type='submit' value='Upload' />
        </form>
    )
}

export default ImageUpload