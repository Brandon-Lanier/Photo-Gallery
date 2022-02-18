import { useState } from 'react';
import './GalleryItem.css'

function GalleryItem({ item, updateLikes, deleteItem}) {

    const [description, setDescription] = useState(false)

    const handleLike = () => {
        updateLikes(item.id);
    }

    const handleClick = () => {
        setDescription(!description);
    }

    const handleDelete = () => {
        deleteItem(item.id);
    }

    return (
        <div className="galleryBox">
            <div className="picBox" >
                    <img src={item.path} alt="Gallery Photo" className="galleryPicture" onClick={handleClick} />
                    {description && 
                        <div className="descriptionBox" onClick={handleClick}>
                            <h2>{item.description}</h2>
                        </div>}
            </div>
            <button onClick={handleLike}>Like</button>
            <p>Total Likes {item.likes}</p>
            <button onClick={handleDelete}>Delete</button>

        </div>

    )
}

export default GalleryItem;