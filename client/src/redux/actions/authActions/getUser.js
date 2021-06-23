import { GET_USER_SUCCESS, GET_USER_FAILURE } from "../types";
import axios from "axios";

export const getUser = () => {
    const options = {
        headers: { Authorization: localStorage.getItem("token") },
    };
    return dispatch => {
        axios.get(`https://portfoliohassenghnimi.herokuapp.com/users/currentuser`, options)
            .then(res => {
                let successMessage = res.data;
                dispatch(getUserSuccess(successMessage));
            })
            .catch(err => {
                let error = err.response.data;
                dispatch(getUserFailure(error));
            });
    }
};

const getUserSuccess = (successMessage) => {
    return {
        type: GET_USER_SUCCESS,
        payload: {
            successMessage
        }
    };
};

const getUserFailure = error => {
    return {
        type: GET_USER_FAILURE,
        payload: {
            error
        }
    };
};
