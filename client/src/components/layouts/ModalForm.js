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
import { addSkills } from '../../redux/actions/addSkills';

const useStyles = makeStyles({
    dialog: {
        width: 500,
    },
});
function ModalForm({ handleClose, open }) {
    const classes = useStyles()
    const [content, setContent] = useState("")
    const [iconClass, setIconClass] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Skills</DialogTitle>
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
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button
                        color="primary"

                        onClick={() => {
                            dispatch(addSkills({ content, iconClass }));
                            handleClose()
                        }}
                    >
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ModalForm;