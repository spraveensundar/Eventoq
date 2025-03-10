import { get } from "lodash";

let defaultState = {
    fetching: false,
    serverError: [],
    data: {},
    status: null
}

export default function crudReducer(state = {
    login: defaultState,
    register: defaultState,
    otp: defaultState,
    verification: defaultState,
    logout: defaultState
}, action) {
    switch (action.type) {
        case "SETUP_SUBMIT_PENDING": {
            const { attribute } = action.meta;
            return {
                ...state,
                [attribute]: {
                    ...defaultState,
                    fetching: true,
                    serverError: []
                }
            }
        }
        case "SETUP_SUBMIT_REJECTED": {
            const { attribute } = action.meta;
            return {
                ...state,
                [attribute]: {
                    ...defaultState,
                    fetching: false,
                    serverError: get(action.payload, "response.data", "")
                }
            }
        }
        case "SETUP_SUBMIT_FULFILLED": {
            const { attribute } = action.meta;
            const data = get(action, "payload.data", {});
            const status = get(action, "payload.status", null);
            return {
                ...state,
                [attribute]: {
                    ...defaultState,
                    fetching: false,
                    data: data,
                    status
                }
            }
        }
        case "LOGIN_RESET": {
            const { attribute } = action.meta;
            return {
                ...state,
                [attribute]: {
                    ...defaultState,
                    data: {},
                    serverError: []
                }
            }
        }
        default:
            return state;
    }
}