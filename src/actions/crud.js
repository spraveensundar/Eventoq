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

export function requestOTP(attribute, data) {
    return dispatch => {
        dispatch({
            type: "SETUP_SUBMIT",
            payload: api.post("/auth/request-otp", data),
            meta: { attribute }
        })
    }
}

export function submitOTP(attribute, data) {
    return dispatch => {
        dispatch({
            type: "SETUP_SUBMIT",
            payload: api.post("/auth/login-with-otp", data),
            meta: { attribute }
        })
    }
}

export function userLogout(attribute, data) {
    return dispatch => {
        dispatch({
            type: "USER_LOGOUT",
            payload: api.post("/auth/logout", data),
            meta: { attribute }
        })
    }
}