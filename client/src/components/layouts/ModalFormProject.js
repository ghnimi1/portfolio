import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addProject } from '../../redux/actions/ProjectActions/addProject';

const useStyles = makeStyles({
    dialog: {
        width: 500,
    },
});
function MadalFormProject({ handleClose, open }) {
    const classes = useStyles()
    const [name, setName] = useState("")
    const [skills, setSkills] = useState("")
    const [url, setUrl] = useState("")
    const [photo, setPhoto] = useState("")
    const dispatch = useDispatch()
    return (
        <form encType='multipart/form-data'>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
                <DialogContent className={classes.dialog}>
                    <Box mb={1}>
                        <TextField
                            autoFocus
                            margin="dense"
                            fullWidth
                            name='name'
                            label="Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Box>
                    <Box mb={1}>
                        <TextField
                            autoFocus
                            margin="dense"
                            fullWidth
                            name='skills'
                            label="Skills"
                            type="text"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                        />
                    </Box>
                    <Box mb={1}>
                        <TextField
                            autoFocus
                            margin="dense"
                            fullWidth
                            name='url'
                            label="Url"
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </Box>
                    <Box mb={1}>
                        <TextField
                            autoFocus
                            margin="dense"
                            fullWidth
                            name='photo'
                            label="Photo"
                            type="file"
                            value={FormData.photo}
                            onChange={(e) => setPhoto(e.target.files[0])}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        color="primary"

                        onClick={() => {
                            const formData = new FormData();
                            formData.append("name", name);
                            formData.append("skills", skills);
                            formData.append("url", url);
                            formData.append("photo", photo);
                            console.log(formData.getAll('url'));
                            dispatch(addProject(formData));
                            handleClose()
                        }
                        }
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </form >
    );
}

export default MadalFormProject;