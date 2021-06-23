import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
}
    from '../actions/types'

const initaialState = {
    currentUser: null,
    token: null,
    loading: false,
    error: null,
}
const authReducer = (state = initaialState, action) => {
    switch (action.type) {

        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                error: null,
                token: action.payload.token
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.successMessage,
                error: null,
                token: action.payload.token
            };
        case GET_USER_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            };
        default:
            return state;
    }
}
export default authReducer