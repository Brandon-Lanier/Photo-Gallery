import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({ gallery, updateLikes }) {

    return (
        <>
            {gallery.map(item =>
            (<GalleryItem
                key={item.id}
                item={item}
                updateLikes={updateLikes}
            />)
            )}
        </>

    )
}

export default GalleryList;