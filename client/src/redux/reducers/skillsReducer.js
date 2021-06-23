import {
    FETCH_SKILLS_FAILURE,
    FETCH_SKILLS_SUCCESS,
    FETCH_SKILLS_STARTED,
    ADD_SKILLS_SUCCESS,
    ADD_SKILLS_FAILURE,
    DELETE_SKILLS_SUCCESS,
    DELETE_SKILLS_FAILURE,
    UPDATE_SKILLS_SUCCESS,
    UPDATE_SKILLS_FAILURE
}
    from '../actions/types'

const initaialState = {
    skills: [],
    loading: false,
    error: null,
    success: null
}
const skillsReducer = (state = initaialState, action) => {
    switch (action.type) {
        case FETCH_SKILLS_STARTED:
            return {
                ...state,
                loading: true
            };
        case FETCH_SKILLS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                skills: action.payload.skills,
            };
        case FETCH_SKILLS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                success: null
            };
        case ADD_SKILLS_SUCCESS:
            return {
                ...state,
                skills: [action.payload.skill, ...state.skills],
                error: null,
                success: action.payload.successMessage
            };
        case ADD_SKILLS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                success: null
            };
        case DELETE_SKILLS_SUCCESS:
            return {
                ...state,
                skills: state.skills.filter(skill => skill._id !== action.payload.id),
                error: null,
                success: action.payload.successMessage
            };
        case DELETE_SKILLS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                success: null
            };
        case UPDATE_SKILLS_SUCCESS:
            return {
                ...state,
                skills: state.skills.map(item => {
                    if (item._id === action.payload.id) {
                        return action.payload.newSkills;
                    }
                    return item;
                }),
                error: null,
                success: action.payload.successMessage
            };
        case UPDATE_SKILLS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                success: null
            };
        default:
            return state;
    }
}
export default skillsReducer