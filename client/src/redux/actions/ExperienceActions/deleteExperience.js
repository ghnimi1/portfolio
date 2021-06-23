import { DELETE_EXPERIENCE_SUCCESS, DELETE_EXPERIENCE_FAILURE } from "../types";
import axios from "axios";

export const deleteExperience = id => {
    const options = {
        headers: { Authorization: localStorage.getItem("token") },
    };
    return dispatch => {
        axios.delete(`/experience/${id}`, options)
            .then(res => {
                let successMessage = res.data;
                dispatch(deleteExperienceSuccess(id, successMessage));
            })
            .catch(err => {
                let error = err.response.data;
                dispatch(deleteExperienceFailure(error));
            });
    }
};

const deleteExperienceSuccess = (id, successMessage) => {
    return {
        type: DELETE_EXPERIENCE_SUCCESS,
        payload: {
            id,
            successMessage
        }
    };
};

const deleteExperienceFailure = error => {
    return {
        type: DELETE_EXPERIENCE_FAILURE,
        payload: {
            error
        }
    };
};
