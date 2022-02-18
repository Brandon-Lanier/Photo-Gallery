import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import AddPhotoForm from '../AddPhotoForm/AddPhotoForm'
import './App.css';

function App() {

  const [gallery, setGallery] = useState([])

  useEffect(() => {
    fetchGallery();
  }, [])

  const fetchGallery = () => {
    axios.get('/gallery')
      .then(response => {
        setGallery(response.data);
        console.log(gallery);
      }).catch(error => {
        console.log('Error fetching gallery');
      })
  }

  const updateLikes = (id) => {
    axios.put(`/gallery/like/${id}`)
      .then(response => {
        fetchGallery();
      }).catch(error => {
        console.log('Error updating likes', error);
      })
  }

  const deleteItem = (id) => {
    axios.delete(`/gallery/${id}`)
    .then(response => {
      fetchGallery();
    }).catch(error => {
      console.log('Error deleting item', error);
    })
  }

  const addPhoto = (newPhoto) => {
    console.log(newPhoto);
    axios.post('/gallery', newPhoto)
    .then(response => {
      fetchGallery();
    }).catch(error => {
      console.log('Error adding photo', error)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <main className="App-main">
        <AddPhotoForm 
          addPhoto={addPhoto}
          />
        <GalleryList
          gallery={gallery}
          updateLikes={updateLikes}
          deleteItem={deleteItem}
        />
      </main>
    </div>
  );
}

export default App;
