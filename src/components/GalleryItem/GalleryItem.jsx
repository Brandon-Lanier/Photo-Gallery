import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import Fade from '@mui/material/Fade';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup';

function GalleryItem({ item, updateLikes, deleteItem }) {

    const [description, setDescription] = useState(false);


    const deleteHistoryConfirm = () => {
        Swal.fire({ // Sweet Alert pop up to confirm deletion request
            title: 'Are you sure you want to delete this photo?',
            showCancelButton: true,
            confirmButtonColor: '#bd3030',
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
        <Card sx={{ maxWidth: 350 }}>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    height="280"
                    image={item.path}
                    alt={item.description}
                />
            </CardActionArea>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description && <div className="descriptionBox">{item.description}</div>}
                </Typography>
            </CardContent>
            <CardActions>
                {item.likes > 0 ? 
                    <IconButton
                    aria-label="liked"
                    onClick={handleLike}
                    color="secondary"
                    >
                    <FavoriteIcon /><p>{item.likes}</p>
                    </IconButton>
                    :
                    <IconButton
                    aria-label="like"
                    onClick={handleLike}
                    color="secondary"
                    >
                    <FavoriteBorderIcon /><p>{item.likes}</p>
                    </IconButton>
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