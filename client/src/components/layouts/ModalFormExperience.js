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
import { addExperiences } from '../../redux/actions/ExperienceActions/addExperience';

const useStyles = makeStyles({
    dialog: {
        width: 500,
    },
});
function ModalFormExperience({ handleClose, open }) {
    const classes = useStyles()
    const [employer, setEmployer] = useState("")
    const [position, setPosition] = useState("")
    const [description, setDescription] = useState("")
    const [skills, setSkills] = useState("")
    const [date, setDate] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Experience</DialogTitle>
                <DialogContent className={classes.dialog}>
                    <Box mb={1}>
                        <TextField
                            autoFocus
                            margin="dense"
                            fullWidth
                            label="Employer"
                            type="text"
                            value={employer}
                            onChange={(e) => setEmployer(e.target.value)}
                        />
                    </Box>
                    <Box mb={1}>
                        <TextField
                            autoFocus
                            margin="dense"
                            fullWidth
                            label="Position"
                            type="text"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                        />
                    </Box>
                    <Box mb={1}>
                        <TextField
                            autoFocus
                            margin="dense"
                            fullWidth
                            label="Description"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Box>
                    <Box mb={1}>
                        <TextField
                            autoFocus
                            margin="dense"
                            fullWidth
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
                            label="Date"
                            type="text"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
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
                            dispatch(addExperiences({ employer, position, description, skills, date }));
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

export default ModalFormExperience;