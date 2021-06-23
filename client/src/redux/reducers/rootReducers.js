import { combineReducers } from "redux";
import experiencesReducer from "./experiencesReducer";
import skillsReducer from './skillsReducer'
import projectsReducer from './projectsReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    skills: skillsReducer,
    experiences: experiencesReducer,
    projects: projectsReducer,
    auth: authReducer,
});

export default rootReducer;