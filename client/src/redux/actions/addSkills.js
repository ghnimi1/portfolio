import { ADD_SKILLS_SUCCESS, ADD_SKILLS_FAILURE } from "./types";
import axios from "axios";

export const addSkills = (skill) => {
    const options = {
        headers: { Authorization: localStorage.getItem("token") },
    };
    return dispatch => {
        axios.post(`https://portfoliohassenghnimi.herokuapp.com/skills`, skill, options)
            .then(res => {
                let successMessage = res.data;
                dispatch(addSkillsSuccess(skill, successMessage));
            })
            .catch(err => {
                let error = err.response.data;
                dispatch(addSkillsFailure(error));
            });
    }
};

const addSkillsSuccess = (skill, successMessage) => {
    return {
        type: ADD_SKILLS_SUCCESS,
        payload: {
            skill,
            successMessage
        }
    };
};

const addSkillsFailure = error => {
    return {
        type: ADD_SKILLS_FAILURE,
        payload: {
            error
        }
    };
};
