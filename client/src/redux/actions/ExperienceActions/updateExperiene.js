import { UPDATE_EXPERIENCE_SUCCESS, UPDATE_EXPERIENCE_FAILURE } from "../types";
import axios from "axios";

export const updateExperience = (id, experience) => dispatch => {
    const options = {
        headers: { Authorization: localStorage.getItem("token") },
    };
    axios
        .put(`/experience/${id}`, experience, options)
        .then(res => {
            let updatedExperience = res.data;
            let successMessage = res.data;

            dispatch(updateExperienceSuccess(id, updatedExperience, successMessage));
        })
        .catch(error => {
            let errorMessage = error.response;

            dispatch(updateExperienceFailure(errorMessage));
        });
};

const updateExperienceSuccess = (id, newExperience, successMessage) => {
    return {
        type: UPDATE_EXPERIENCE_SUCCESS,
        payload: {
            id,
            newExperience,
            successMessage
        }
    };
};

const updateExperienceFailure = error => {
    return {
        type: UPDATE_EXPERIENCE_FAILURE,
        payload: {
            error
        }
    };
};