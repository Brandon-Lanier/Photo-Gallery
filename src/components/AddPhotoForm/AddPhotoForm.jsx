import { useState } from "react";


function AddPhotoForm({addPhoto}) {

const [newPath, setNewPath] = useState('');
const [newDescription, setNewDescription] = useState('');

const handleSubmit = () => {
    addPhoto({newPath, newDescription})
    setNewPath(''); //Clears the path input
    setNewDescription(''); //Clears description input
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={newPath} placeholder="Photo URL" onChange={(e) => setNewPath(e.target.value)} />
                <input value={newDescription} placeholder="Photo Description" onChange={(e) => setNewDescription(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddPhotoForm;