import { ADD_EXPERIENCE_SUCCESS, ADD_EXPERIENCE_FAILURE } from "../types";
import axios from "axios";

export const addExperiences = (experience) => {
    const options = {
        headers: { Authorization: localStorage.getItem("token") },
    };
    return dispatch => {
        axios.post(`/experience`, experience, options)
            .then(res => {
                let successMessage = res.data;
                dispatch(addExperienceSuccess(experience, successMessage));
            })
            .catch(err => {
                let error = err.response.data;
                dispatch(addExperienceFailure(error));
            });
    }
};

const addExperienceSuccess = (experience, successMessage) => {
    return {
        type: ADD_EXPERIENCE_SUCCESS,
        payload: {
            experience,
            successMessage
        }
    };
};

const addExperienceFailure = error => {
    return {
        type: ADD_EXPERIENCE_FAILURE,
        payload: {
            error
        }
    };
};
