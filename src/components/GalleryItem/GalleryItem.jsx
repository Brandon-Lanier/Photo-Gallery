import { useState } from 'react';
import './GalleryItem.css'

function GalleryItem({ item, updateLikes }) {

    const [description, setDescription] = useState(false)

    const handleLike = () => {
        updateLikes(item.id);
    }

    const handleClick = () => {
        setDescription(!description);
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

        </div>

    )
}

export default GalleryItem;