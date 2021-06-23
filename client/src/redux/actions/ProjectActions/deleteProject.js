import { DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE } from "../types";
import axios from "axios";

export const deleteProject = id => {
    const options = {
        headers: { Authorization: localStorage.getItem("token") },
    };
    return dispatch => {
        axios.delete(`https://portfoliohassenghnimi.herokuapp.com/projects/${id}`, options)
            .then(res => {
                let successMessage = res.data;
                dispatch(deleteProjectSuccess(id, successMessage));
            })
            .catch(err => {
                let error = err.response.data;
                dispatch(deleteProjectFailure(error));
            });
    }
};

const deleteProjectSuccess = (id, successMessage) => {
    return {
        type: DELETE_PROJECT_SUCCESS,
        payload: {
            id,
            successMessage
        }
    };
};

const deleteProjectFailure = error => {
    return {
        type: DELETE_PROJECT_FAILURE,
        payload: {
            error
        }
    };
};
