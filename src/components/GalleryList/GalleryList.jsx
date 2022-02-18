import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({ gallery, updateLikes }) {

    return (
        <div>
            {gallery.map(item =>
            (<GalleryItem
                key={item.id}
                item={item}
                updateLikes={updateLikes}
            />)
            )}
        </div>

    )
}

export default GalleryList;