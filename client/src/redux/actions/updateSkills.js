import { UPDATE_SKILLS_SUCCESS, UPDATE_SKILLS_FAILURE } from "../actions/types";
import axios from "axios";

export const updateSkills = (id, skill) => dispatch => {
    const options = {
        headers: { Authorization: localStorage.getItem("token") },
    };
    axios
        .put(`/skills/${id}`, skill, options)
        .then(res => {
            let updatedSkills = res.data;
            let successMessage = res.data;

            dispatch(updateSkillsSuccess(id, updatedSkills, successMessage));
        })
        .catch(error => {
            let errorMessage = error.response;

            dispatch(updateSkillsFailure(errorMessage));
        });
};

const updateSkillsSuccess = (id, newSkills, successMessage) => {
    return {
        type: UPDATE_SKILLS_SUCCESS,
        payload: {
            id,
            newSkills,
            successMessage
        }
    };
};

const updateSkillsFailure = error => {
    return {
        type: UPDATE_SKILLS_FAILURE,
        payload: {
            error
        }
    };
};