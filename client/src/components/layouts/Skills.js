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
import Alert from '@material-ui/lab/Alert';
import Title from './Title';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import ModalForm from './ModalForm';
import { useDispatch, useSelector } from "react-redux";
import { fetchSkills } from '../../redux/actions/fetchSkills'
import { deleteSkills } from '../../redux/actions/deleteSkills'
import EditSkills from './EditSkills'

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
export default function Skills() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const { skills, loading, error } = useSelector(state => state.skills)
    const [editingSkills, setEditingSkills] = useState(false)
    const [editskill, setEditSkill] = useState(null)
    const handleEditing = () => {
        setEditingSkills(!editingSkills)
    }
    useEffect(() => {
        dispatch(fetchSkills())
    }, [dispatch, open])

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const deleteSkill = (id) => {
        dispatch(deleteSkills(id))
    }
    const saveSkill = (skill) => {
        setEditSkill(skill)
    }

    return (

        <TableContainer component={Paper}>
            <Title>Recent Skills</Title>
            <Button variant="contained"
                color='primary'
                onClick={handleClickOpen}
                style={{
                    margin: "3px",
                    fontWeight: '700'
                }}>
                Create
            </Button>
            <ModalForm
                handleClose={handleClose}
                open={open}
            />
            {error ? <Alert severity="error">{error?.msg}</Alert> : null}
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Content</StyledTableCell>
                        <StyledTableCell>IconClass</StyledTableCell>
                        <StyledTableCell align='right'>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {skills.map((skill) => (
                        <StyledTableRow key={skill._id}>
                            <StyledTableCell >{skill.content}</StyledTableCell>
                            <StyledTableCell>{skill.iconClass}</StyledTableCell>
                            <StyledTableCell align='right'>
                                <UpdateIcon fontSize="large"
                                    onClick={() => {
                                        handleClickOpen();
                                        saveSkill(skill); handleEditing()
                                    }}
                                    style={{ cursor: 'pointer', marginRight: '5px' }} />
                                <DeleteIcon fontSize="large"
                                    onClick={() => deleteSkill(skill._id)}
                                    style={{ color: 'red', cursor: 'pointer' }} />
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            {editingSkills ? <EditSkills skill={editskill}
                handleEditing={handleEditing} handleClose={handleClose}
                open={open} /> : null}
        </TableContainer >
    );
}