import {
    FETCH_PROJECT_SUCCESS,
    FETCH_PROJECT_FAILURE,
    FETCH_PROJECT_STARTED
} from "../types";
import axios from "axios";

export const fetchProjects = () => {
    const options = {
        headers: { Authorization: localStorage.getItem("token") },
    };
    return dispatch => {
        dispatch(fetchProjectsStarted());
        axios
            .get("https://portfoliohassenghnimi.herokuapp.com/projects", options)
            .then(res => {
                let projects = res.data;
                dispatch(fetchProjectsSuccess(projects));
            })
            .catch(error => {
                dispatch(fetchProjectsFailure(error.message));
            });
    };
};

const fetchProjectsStarted = () => {
    return {
        type: FETCH_PROJECT_STARTED
    };
};

const fetchProjectsSuccess = (projects) => {
    return {
        type: FETCH_PROJECT_SUCCESS,
        payload: {
            projects
        }
    };
};

const fetchProjectsFailure = error => {
    return {
        type: FETCH_PROJECT_FAILURE,
        payload: {
            error
        }
    };
};