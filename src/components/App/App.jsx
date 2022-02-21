import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import AddPhotoForm from '../AddPhotoForm/AddPhotoForm';
import '@fontsource/roboto/300.css';
import Typography from '@mui/material/Typography';
import './App.css';


function App() {

  const [gallery, setGallery] = useState([]); //Where the gallery images are store locally.

  useEffect(() => {
    fetchGallery(); // Load gallery upon loading the page
  }, [])


  const fetchGallery = () => { // Gets all images, descriptions and likes from the server
    axios.get('/gallery')
      .then(response => {
        setGallery(response.data);
      }).catch(error => {
        console.log('Error fetching gallery');
      })
  }

  const updateLikes = (id) => {
    axios.put(`/gallery/like/${id}`) //ID is passed from the child component at GalleryItem and will update each like
      .then(response => {
        fetchGallery();
      }).catch(error => {
        console.log('Error updating likes', error);
      })
  }

  const deleteItem = (id) => { // Delete request with ID coming from child component - GalleryItem
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
        fetchGallery(); // After adding photo, fetch the database pictures to rerender on DOM
      }).catch(error => {
        console.log('Error adding photo', error)
      })
  }


  return (

    <div className="App">
      <header className="App-header">
        <Typography variant="h1">A Day In The Life</Typography>
      </header>
      <section>
        <AddPhotoForm
          addPhoto={addPhoto}
        />
      </section>
      <main className="App-main">
        <GalleryList
          gallery={gallery}
          updateLikes={updateLikes}
          deleteItem={deleteItem}
          // Props being passed down to child components
        />

      </main>
    </div>
  );
}

export default App;
