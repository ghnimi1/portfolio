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
import { updateSkills } from '../../redux/actions/updateSkills';

const useStyles = makeStyles({
    dialog: {
        width: 500,
    },
});
function EditSkills(props) {
    const { handleClose, open, handleEditing, skill } = props
    const dispatch = useDispatch()
    const classes = useStyles()
    const [content, setContent] = useState(skill.content)
    const [iconClass, setIconClass] = useState(skill.iconClass)

    return (
        <div>
            <Dialog open={open} onClose={() => { handleClose(); handleEditing() }} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Skills</DialogTitle>
                <DialogContent className={classes.dialog}>
                    <Box mb={1}>
                        <TextField
                            autoFocus
                            margin="dense"
                            fullWidth
                            label="Content"
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </Box>
                    <Box mb={1}>
                        <TextField
                            autoFocus
                            margin="dense"
                            fullWidth
                            label="IconClass"
                            type="text"
                            value={iconClass}
                            onChange={(e) => setIconClass(e.target.value)}
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
                            dispatch(updateSkills(skill._id, { content, iconClass }))
                            handleEditing()
                            handleClose();
                        }}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditSkills;