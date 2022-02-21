import GalleryItem from '../GalleryItem/GalleryItem'

// Passing down props from App.jsx
function GalleryList({ gallery, updateLikes, deleteItem }) {

  return (
    <>
      {/* Loop through the gallery array and display each gallery item in a container*/}
      {gallery.map(item =>
      (<GalleryItem
        key={item.id} // Unique identifier for each object in the array.
        item={item}
        updateLikes={updateLikes}
        deleteItem={deleteItem}
      // Props being passed down into Gallery Item from App
      />)
      )}
    </>

  )
}


export default GalleryList;
