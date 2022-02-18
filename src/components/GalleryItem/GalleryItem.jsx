import './GalleryItem.css'

function GalleryItem({item, updateLikes}) {

    const handleLike = () => {
        updateLikes(item.id);
    }

    return (
        <div className="picBox">
            <img src={item.path} alt="Gallery Photo" className="galleryPicture" />
            {item.description}
            <button onClick={handleLike}>Like</button>
            <p>Total Likes {item.likes}</p>

        </div>

    )
}

export default GalleryItem;