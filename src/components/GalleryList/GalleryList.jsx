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

{/* <GalleryList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {gallery.map((item) => (
    <GalleryItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </GalleryItem>
  ))}
</GalleryList> */}