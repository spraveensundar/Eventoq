import { combineReducers } from "redux";
import { reducer as forms } from "redux-form";

import crudReducer from "./crudReducer";
import { clearStorageItem } from "../helpers/storage";

const appReducer = combineReducers({
    form: forms,
    crud: crudReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        clearStorageItem();
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}

export default rootReducer;