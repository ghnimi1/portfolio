import {
    FETCH_EXPERIENCE_FAILURE,
    FETCH_EXPERIENCE_SUCCESS,
    FETCH_EXPERIENCE_STARTED,
    ADD_EXPERIENCE_SUCCESS,
    ADD_EXPERIENCE_FAILURE,
    DELETE_EXPERIENCE_SUCCESS,
    DELETE_EXPERIENCE_FAILURE,
    UPDATE_EXPERIENCE_SUCCESS,
    UPDATE_EXPERIENCE_FAILURE
}
    from '../actions/types'

const initaialState = {
    experiences: [],
    loading: false,
    error: null,
    success: null
}
const experiencesReducer = (state = initaialState, action) => {
    switch (action.type) {
        case FETCH_EXPERIENCE_STARTED:
            return {
                ...state,
                loading: true
            };
        case FETCH_EXPERIENCE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                experiences: action.payload.experiences,
            };
        case FETCH_EXPERIENCE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                success: null
            };
        case ADD_EXPERIENCE_SUCCESS:
            return {
                ...state,
                experiences: [action.payload.experience, ...state.experiences],
                error: null,
                success: action.payload.successMessage
            };
        case ADD_EXPERIENCE_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                success: null
            };
        case DELETE_EXPERIENCE_SUCCESS:
            return {
                ...state,
                experiences: state.experiences.filter(experience => experience._id !== action.payload.id),
                error: null,
                success: action.payload.successMessage
            };
        case DELETE_EXPERIENCE_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                success: null
            };
        case UPDATE_EXPERIENCE_SUCCESS:
            return {
                ...state,
                experiences: state.experiences.map(item => {
                    if (item._id === action.payload.id) {
                        return action.payload.newExperience;
                    }
                    return item;
                }),
                error: null,
                success: action.payload.successMessage
            };
        case UPDATE_EXPERIENCE_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                success: null
            };

        default:
            return state;
    }
}
export default experiencesReducer