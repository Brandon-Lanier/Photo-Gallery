import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Slide from '@mui/material/Slide';
import './GalleryItem.css'


function GalleryItem({ item, updateLikes, deleteItem }) {

    const [description, setDescription] = useState(false); //Variable to handle when to show the image description


    const handleLike = () => {
        updateLikes(item.id); // Will increase the likes of selected image 
    }

    const handleClick = () => {
        setDescription(!description); //When image is clicked, this will trigger the description to opposite to hide or display description.
    }

    const handleDelete = () => {
        deleteItem(item.id); //Delete specific image after confirmation has happened.
    }

    const deleteHistoryConfirm = () => {
        Swal.fire({ // Sweet Alert pop up to confirm deletion request
            title: 'Are you sure you want to delete this photo?',
            showCancelButton: true,
            confirmButtonColor: '#cb997e',
            cancelButtonColor: '#bfbfbf',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(); // Will run the deleteHistory function if user hits confirm
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Photo Deleted',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }

    return (
        <Card sx={{ width: 300 }}>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    height="270"
                    image={item.path}
                    alt={item.description}
                />
            </CardActionArea>
            <CardContent>
                <Slide in={description}>
                    <Typography variant="body2" color="text.primary">
                        {description && <div className="descriptionBox">{item.description}</div>} {/* When Description is true, show description */}
                    </Typography>
                </Slide>
            </CardContent>
            {/* This will display an empty heart if no likes and changed to filled when click */}
            <CardActions>
                {item.likes > 0 ? //Conditional that keeps icon not filled if 0 likes.
                    <div className="likeDiv">
                        <IconButton
                            aria-label="liked"
                            onClick={handleLike}
                            style={{ color: '#b86963' }}
                        >
                            <FavoriteIcon />
                        </IconButton>
                        <span>{item.likes}</span>
                    </div>
                    : // If the like button has been hit, the icon will fill in
                    <div className="likeDiv">
                        <IconButton
                            aria-label="like"
                            onClick={handleLike}
                            style={{ color: '#b86963' }}
                        >
                            <FavoriteBorderIcon />
                        </IconButton>
                        <span>{item.likes}</span>
                    </div>
                }
                <IconButton
                    aria-label="delete"
                    onClick={deleteHistoryConfirm}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}


export default GalleryItem;