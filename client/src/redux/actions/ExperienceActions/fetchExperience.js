import {
    FETCH_EXPERIENCE_STARTED,
    FETCH_EXPERIENCE_SUCCESS,
    FETCH_EXPERIENCE_FAILURE
} from "../types";
import axios from "axios";

export const fetchExperience = () => {
    const options = {
        headers: { Authorization: localStorage.getItem("token") },
    };
    return dispatch => {
        dispatch(fetchExperienceStarted());
        axios
            .get("/experience", options)
            .then(res => {
                let experiences = res.data;
                dispatch(fetchExperienceSuccess(experiences));
            })
            .catch(error => {
                dispatch(fetchExperienceFailure(error.message));
            });
    };
};

const fetchExperienceStarted = () => {
    return {
        type: FETCH_EXPERIENCE_STARTED
    };
};

const fetchExperienceSuccess = (experiences) => {
    return {
        type: FETCH_EXPERIENCE_SUCCESS,
        payload: {
            experiences
        }
    };
};

const fetchExperienceFailure = error => {
    return {
        type: FETCH_EXPERIENCE_FAILURE,
        payload: {
            error
        }
    };
};