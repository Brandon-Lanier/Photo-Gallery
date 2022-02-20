import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import Swal from 'sweetalert2';
import './AddPhotoForm.css'


function AddPhotoForm({ addPhoto }) {

    const [newPath, setNewPath] = useState(''); // Where we store the state value of the URL
    const [newDescription, setNewDescription] = useState(''); // Description input state value.

    const handleSubmit = (e) => {
        e.preventDefault();
        { //Conditional Rendering to handle if the path url is entered or not.  If not user will be given a notice.
            newPath === '' ?
            Swal.fire('Please enter a URL')
            :
            addPhoto({ newPath, newDescription }) // Pushing url and description to the parent App function 'addPhoto'
            setNewPath(''); //Clears the path input
            setNewDescription(''); //Clears description input
        }
    }

    return (
        <div>
            <h2>Add A Photo</h2>
            <div className="inputContainer">
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
                </Box>
            </div>
            <Button 
            sx={{ width: 300, backgroundColor: 'black', color: 'white' }} 
            variant="contained" startIcon={<SaveIcon />} 
            onClick={handleSubmit}>Add Photo</Button>
        </div>
    )
}

export default AddPhotoForm;