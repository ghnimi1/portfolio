import {
    FETCH_PROJECT_FAILURE,
    FETCH_PROJECT_SUCCESS,
    FETCH_PROJECT_STARTED,
    ADD_PROJECT_SUCCESS,
    ADD_PROJECT_FAILURE,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAILURE,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_FAILURE
}
    from '../actions/types'

const initaialState = {
    projects: [],
    loading: false,
    error: null,
    success: null
}
const projectsReducer = (state = initaialState, action) => {
    switch (action.type) {
        case FETCH_PROJECT_STARTED:
            return {
                ...state,
                loading: true
            };
        case FETCH_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                projects: action.payload.projects,
            };
        case FETCH_PROJECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                success: null
            };
        case ADD_PROJECT_SUCCESS:
            return {
                ...state,
                projects: [action.payload.project, ...state.projects],
                error: null,
                success: action.payload.successMessage
            };
        case ADD_PROJECT_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                success: null
            };
        case DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                projects: state.projects.filter(project => project._id !== action.payload.id),
                error: null,
                success: action.payload.successMessage
            };
        case DELETE_PROJECT_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                success: null
            };
        case UPDATE_PROJECT_SUCCESS:
            return {
                ...state,
                projects: state.projects.map(item => {
                    if (item._id === action.payload.id) {
                        return action.payload.newProjects;
                    }
                    return item;
                }),
                error: null,
                success: action.payload.successMessage
            };
        case UPDATE_PROJECT_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                success: null
            };
        default:
            return state;
    }
}
export default projectsReducer