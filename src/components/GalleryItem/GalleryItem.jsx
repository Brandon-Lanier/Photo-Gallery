import { useState } from 'react';
import './GalleryItem.css'

function GalleryItem({ item, updateLikes }) {

    const [description, setDescription] = useState(true)

    const handleLike = () => {
        updateLikes(item.id);
    }

    const handleClick = () => {
        setDescription(!description);
    }

    return (
        <div className="galleryBox">
            <div className="picBox" onClick={handleClick}>
                {description ?
                    <img src={item.path} alt="Gallery Photo" className="galleryPicture" />
                    :
                    <div className="descriptionBox">
                        <p>{item.description}</p>
                    </div>
                }

            </div>
            <button onClick={handleLike}>Like</button>
            <p>Total Likes {item.likes}</p>

        </div>

    )
}

export default GalleryItem;