import { useState } from 'react';
import './GalleryItem.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
            <FavoriteBorderIcon onClick={handleLike}/><p>Total Likes {item.likes}</p>
            <DeleteForeverIcon onClick={handleDelete}/>

        </div>

    )
}
{/* <button onClick={handleLike}>Like</button> */}
export default GalleryItem;