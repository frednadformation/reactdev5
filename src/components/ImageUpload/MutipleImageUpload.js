import axios from 'axios';
import React, { useState } from 'react'

function MutipleImageUpload() {
    const [selectedFile, setSelectedFile] = useState([])

    const handleFileChange = (event) =>{
        console.log(event.target.files);
        setSelectedFile(Array.from(event.target.files));
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        //Au minima un fichier
        if(selectedFile.length > 0){
            const formData = new FormData;
            selectedFile.forEach(file =>{
                formData.append('images', file);
            });

            axios.post('http://localhost:5000/uploadmultipleimages', formData)
            .then((response) =>{
                console.log(response.data);
            })
            .catch((error) =>{
                console.error(error);
            })
        }
    };
  return (
    <form onSubmit={handleSubmit}>
        <input type='file' multiple onChange={handleFileChange} />
        <input type='submit' value='Upload' />
    </form>
  )
}

export default MutipleImageUpload