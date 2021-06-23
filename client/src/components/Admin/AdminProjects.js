import { Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import DashboardNav from '../layouts/DashboardNav';
import Projects from '../layouts/Projects';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));
function AdminProjects(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <DashboardNav />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {/* Recent Projects */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Projects />
                        </Paper>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}

export default AdminProjects;