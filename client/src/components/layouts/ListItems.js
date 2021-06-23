import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <div>
        <ListItem button component={Link} to="/dashboard/skills">
            <ListItemIcon>
                <SettingsApplicationsIcon />
            </ListItemIcon>
            <ListItemText primary="Skills" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/experience">
            <ListItemIcon>
                <BusinessCenterIcon />
            </ListItemIcon>
            <ListItemText primary="Experiences" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/projects">
            <ListItemIcon>
                <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Logout</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" onClick={() => {
                localStorage.removeItem('token');
                window.location.href = "/signin"
            }} />
        </ListItem>
    </div>
);