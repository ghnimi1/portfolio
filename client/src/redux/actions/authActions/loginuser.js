import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "../types";
import axios from "axios";

export const loginUser = (user, history) => {
    return dispatch => {
        axios.post(`/users/signin`, user)
            .then(res => {
                let token = localStorage.setItem('token', res.data.token);
                dispatch(loginUserSuccess(user, token));
                history.push('/dashboard/skills')
            })
            .catch(err => {
                let error = err.response;
                dispatch(loginUserFailure(error));
            });
    }
};

const loginUserSuccess = (user, token) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: {
            user,
            token
        }
    };
};

const loginUserFailure = error => {
    return {
        type: LOGIN_USER_FAILURE,
        payload: {
            error
        }
    };
};
