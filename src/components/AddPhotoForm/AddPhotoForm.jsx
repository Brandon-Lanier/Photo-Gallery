import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function AddPhotoForm({ addPhoto }) {

    const [newPath, setNewPath] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPhoto({ newPath, newDescription })
        setNewPath(''); //Clears the path input
        setNewDescription(''); //Clears description input
    }

    return (
        <div>
            <h2>Add A Photo</h2>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="filled-basic"
                    label="URL Path"
                    variant="filled"
                    value={newPath}
                    onChange={(e) => setNewPath(e.target.value)}
                />
                <TextField
                    id="filled-basic"
                    label="Description"
                    variant="filled"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)} />
                <Button variant="outlined" color="secondary" onClick={handleSubmit}>Add Photo</Button>
            </Box>
        </div>
    )
}

export default AddPhotoForm;