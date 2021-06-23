import { DELETE_SKILLS_SUCCESS, DELETE_SKILLS_FAILURE } from "./types";
import axios from "axios";

export const deleteSkills = id => {
    const options = {
        headers: { Authorization: localStorage.getItem("token") },
    };
    return dispatch => {
        axios.delete(`/skills/${id}`, options)
            .then(res => {
                let successMessage = res.data;
                dispatch(deleteSkillsSuccess(id, successMessage));
            })
            .catch(err => {
                let error = err.response;
                dispatch(deleteSkillsFailure(error));
            });
    }
};

const deleteSkillsSuccess = (id, successMessage) => {
    return {
        type: DELETE_SKILLS_SUCCESS,
        payload: {
            id,
            successMessage
        }
    };
};

const deleteSkillsFailure = error => {
    return {
        type: DELETE_SKILLS_FAILURE,
        payload: {
            error
        }
    };
};
