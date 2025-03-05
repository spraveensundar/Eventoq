import { combineReducers } from "redux";
import { reducer as forms } from "redux-form";

import curdReducer from "./curdReducer";

const appReducer = combineReducers({
    form: forms,
    curd: curdReducer,
})

const rootReducer = (state, action) => {
    if (action.type === 'CLEAR_SESSION') {
        state = undefined;
    }
    return appReducer(state, action)
}

export default rootReducer;