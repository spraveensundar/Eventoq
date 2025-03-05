import api from "./api";

export function submitRegister(attribute, data) {
    return dispatch => {
        dispatch({
            type: "SETUP_SUBMIT",
            payload: api.post("/auth/create", data),
            meta: { attribute }
        });
    };
}

export function submitLogin(attribute, data) {
    return dispatch => {
        dispatch({
            type: "SETUP_SUBMIT",
            payload: api.post("/auth/login", data),
            meta: { attribute }
        })
    }
}

export function resetData(attribute) {
    return dispatch => {
        dispatch({
            type: "LOGIN_RESET",
            meta: { attribute }
        })
    }
}
