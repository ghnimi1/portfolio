import {
    FETCH_SKILLS_STARTED,
    FETCH_SKILLS_SUCCESS,
    FETCH_SKILLS_FAILURE
} from "../actions/types";
import axios from "axios";

export const fetchSkills = () => {
    const options = {
        headers: { Authorization: localStorage.getItem("token") },
    };
    return dispatch => {
        dispatch(fetchSkillsStarted());
        axios
            .get("/skills", options)
            .then(res => {
                let skills = res.data;
                dispatch(fetchSkillsSuccess(skills));
            })
            .catch(error => {
                dispatch(fetchSkillsFailure(error.message));
            });
    };
};

const fetchSkillsStarted = () => {
    return {
        type: FETCH_SKILLS_STARTED
    };
};

const fetchSkillsSuccess = (skills) => {
    return {
        type: FETCH_SKILLS_SUCCESS,
        payload: {
            skills
        }
    };
};

const fetchSkillsFailure = error => {
    return {
        type: FETCH_SKILLS_FAILURE,
        payload: {
            error
        }
    };
};