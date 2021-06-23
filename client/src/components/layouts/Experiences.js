import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Title from './Title';
import { useDispatch, useSelector } from "react-redux";
import { fetchExperience } from '../../redux/actions/ExperienceActions/fetchExperience'
import { deleteExperience } from '../../redux/actions/ExperienceActions/deleteExperience';
import ModalFormExperience from './ModalFormExperience';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import EditExperience from './EditExperience';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function Experiences() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [editexperience, setEditExperience] = useState(null)
    const dispatch = useDispatch()
    const { experiences, loading, error } = useSelector(state => state.experiences)
    const [editingExperience, setEditingExperience] = useState(false)

    const handleEditing = () => {
        setEditingExperience(!editingExperience)
    }
    useEffect(() => {
        dispatch(fetchExperience())
    }, [dispatch, open])
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const deleteExperiences = (id) => {
        dispatch(deleteExperience(id))
    }
    const saveExperience = (experience) => {
        setEditExperience(experience)
    }
    return (
        <TableContainer component={Paper}>
            <Title>Recent Experiences</Title>
            <Button variant="contained"
                color='primary'
                onClick={handleClickOpen}
                style={{
                    margin: "3px",
                    fontWeight: '700'
                }}>
                Create
            </Button>
            <ModalFormExperience
                handleClose={handleClose}
                open={open}
            />
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Employer</StyledTableCell>
                        <StyledTableCell>Position</StyledTableCell>
                        <StyledTableCell>Description</StyledTableCell>
                        <StyledTableCell>Skills</StyledTableCell>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell align='right'>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {experiences.map((experience) => (
                        <StyledTableRow key={experience?._id}>
                            <StyledTableCell >{experience.employer}</StyledTableCell>
                            <StyledTableCell>{experience.position}</StyledTableCell>
                            <StyledTableCell>{experience.description}</StyledTableCell>
                            <StyledTableCell>{experience.skills}</StyledTableCell>
                            <StyledTableCell>{experience.date}</StyledTableCell>
                            <StyledTableCell align='right'>
                                <UpdateIcon fontSize="large"
                                    onClick={() => {
                                        handleClickOpen();
                                        saveExperience(experience); handleEditing()
                                    }}
                                    style={{ cursor: 'pointer', marginRight: '5px' }} />
                                <DeleteIcon fontSize="large"
                                    onClick={() => deleteExperiences(experience._id)}
                                    style={{ color: 'red', cursor: 'pointer' }} />
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            {editingExperience ? <EditExperience experience={editexperience}
                handleEditing={handleEditing} handleClose={handleClose}
                open={open} /> : null}
        </TableContainer >
    );
}