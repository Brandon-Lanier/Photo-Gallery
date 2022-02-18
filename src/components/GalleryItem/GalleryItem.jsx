import { useState } from 'react';
import './GalleryItem.css'

function GalleryItem({item, updateLikes}) {

    const [description, setDescription] = useState(false)

    const handleLike = () => {
        updateLikes(item.id);
    }

    const handleClick = () => {
        setDescription(true);
    }

    return (
        <div className="galleryBox">
            <div className="picBox" onClick={handleClick}>
            <img src={item.path} alt="Gallery Photo" className="galleryPicture" />
            <p>{item.description}</p>

            </div>
            <button onClick={handleLike}>Like</button>
            <p>Total Likes {item.likes}</p>

        </div>

    )
}

export default GalleryItem;