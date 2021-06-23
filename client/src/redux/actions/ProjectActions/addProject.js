import { ADD_PROJECT_SUCCESS, ADD_PROJECT_FAILURE } from "../types";
import axios from "axios";

export const addProject = (project) => {
    const options = { headers: { 'Content-Type': 'multipart/form-data' } }
    return dispatch => {

        axios.post("https://portfoliohassenghnimi.herokuapp.com/projects", project, options)
            .then(res => {
                let successMessage = res.data;
                dispatch(addProjectSuccess(project, successMessage));
            })
            .catch(err => {
                let error = err.response.data;
                dispatch(addProjectFailure(error));
            });
    }
};

const addProjectSuccess = (project, successMessage) => {
    return {
        type: ADD_PROJECT_SUCCESS,
        payload: {
            project,
            successMessage
        }
    };
};

const addProjectFailure = error => {
    return {
        type: ADD_PROJECT_FAILURE,
        payload: {
            error
        }
    };
};
