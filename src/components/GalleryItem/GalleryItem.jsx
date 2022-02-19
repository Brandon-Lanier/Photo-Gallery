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
import FavoriteIcon from '@mui/icons-material/Favorite';

import ConfirmPopup from '../ConfirmPopup/ConfirmPopup';

function GalleryItem({ item, updateLikes, deleteItem }) {

    const [description, setDescription] = useState(false)


    const handleLike = () => {
        console.log(item.id)
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
                <IconButton
                    aria-label="delete"
                    onClick={handleLike}>
                    <FavoriteBorderIcon /><p>{item.likes}</p>
                </IconButton>
                
                    <IconButton
                    aria-label="delete"
                    onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}


export default GalleryItem;