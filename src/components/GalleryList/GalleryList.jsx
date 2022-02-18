import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({ gallery, updateLikes, deleteItem }) {

    return (
        <>
            {gallery.map(item =>
            (<GalleryItem
                key={item.id}
                item={item}
                updateLikes={updateLikes}
                deleteItem={deleteItem}
            />)
            )}
        </>

    )
}

export default GalleryList;