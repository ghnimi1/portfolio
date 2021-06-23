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
import { fetchProjects } from '../../redux/actions/ProjectActions/fetchProjects'
import { deleteProject } from '../../redux/actions/ProjectActions/deleteProject';
import ModalFormProject from './ModalFormProject';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import EditProject from './EditProject'

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
    img: {
        width: 40
    }
});

export default function Projects() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState(false);
    const [editproject, setEditProject] = useState(null)
    const dispatch = useDispatch()
    const { projects, loading, error } = useSelector(state => state.projects)
    useEffect(() => {
        dispatch(fetchProjects())
    }, [dispatch, open])
    const handleEditing = () => {
        setEditing(!editing);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const deleteProjects = (id) => {
        dispatch(deleteProject(id))
    }
    const saveProject = (project) => {
        setEditProject(project)
    }
    return (

        <TableContainer component={Paper}>
            <Title>Recent Projects</Title>
            <Button variant="contained"
                color='primary'
                onClick={handleClickOpen}
                style={{
                    margin: "3px",
                    fontWeight: '700'
                }}>
                Create
            </Button>
            <ModalFormProject
                handleClose={handleClose}
                open={open}
            />

            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Skills</StyledTableCell>
                        <StyledTableCell>Url</StyledTableCell>
                        <StyledTableCell>Photo</StyledTableCell>
                        <StyledTableCell align='right'>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projects.map((project) => (
                        <StyledTableRow key={project._id}>
                            <StyledTableCell >{project.name}</StyledTableCell>
                            <StyledTableCell>{project.skills}</StyledTableCell>
                            <StyledTableCell>{project.url}</StyledTableCell>
                            <StyledTableCell>
                                <img className={classes.img} src={`/${project?.photo}`} alt={project.photo} />
                            </StyledTableCell>
                            <StyledTableCell align='right'>
                                <UpdateIcon fontSize="large"
                                    onClick={() => {
                                        handleClickOpen();
                                        saveProject(project);
                                        handleEditing()
                                    }}
                                    style={{ cursor: 'pointer', marginRight: '5px' }} />
                                <DeleteIcon fontSize="large"
                                    onClick={() => deleteProjects(project._id)}
                                    style={{ color: 'red', cursor: 'pointer' }} />
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            {editing ? <EditProject project={editproject}
                handleEditing={handleEditing} handleClose={handleClose}
                open={open} /> : null}
        </TableContainer >
    );
}