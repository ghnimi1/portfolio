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
import { updateProjects } from '../../redux/actions/ProjectActions/updateProject';

const useStyles = makeStyles({
    dialog: {
        width: 500,
    },
});
function EditProject(props) {
    const { handleClose, open, handleEditing, project } = props
    const dispatch = useDispatch()
    const classes = useStyles()
    const [name, setName] = useState(project.name)
    const [skills, setSkills] = useState(project.skills)
    const [url, setUrl] = useState(project.url)
    const [photo, setPhoto] = useState("")

    return (
        <form encType='multipart/form-data'>
            <Dialog open={open} onClose={() => { handleClose(); handleEditing() }} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Skills</DialogTitle>
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
                    <Button onClick={() => { handleClose(); handleEditing() }} color="primary">
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
                            console.log(formData.getAll('name'));
                            dispatch(updateProjects(project._id, formData))
                            handleEditing()
                            handleClose();
                        }}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </form>
    );
}

export default EditProject;