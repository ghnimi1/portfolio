import { UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAILURE } from "../types";
import axios from "axios";

export const updateProjects = (id, project) => dispatch => {
    const options = { headers: { 'Content-Type': 'multipart/form-data' } }

    axios
        .put(`/projects/${id}`, project, options)
        .then(res => {
            let updatedProjects = res.data;
            let successMessage = res.data;

            dispatch(updateProjectSuccess(id, updatedProjects, successMessage));
        })
        .catch(error => {
            let errorMessage = error.response;

            dispatch(updateProjectFailure(errorMessage));
        });
};

const updateProjectSuccess = (id, newProjects, successMessage) => {
    return {
        type: UPDATE_PROJECT_SUCCESS,
        payload: {
            id,
            newProjects,
            successMessage
        }
    };
};

const updateProjectFailure = error => {
    return {
        type: UPDATE_PROJECT_FAILURE,
        payload: {
            error
        }
    };
};