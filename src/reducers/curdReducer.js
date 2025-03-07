import { get } from "lodash";

let defaultState = {
    fetching: false,
    serverError: [],
    data: {}
}

export default function crudReducer(state = {
    login: defaultState
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
            return {
                ...state,
                [attribute]: {
                    ...defaultState,
                    fetching: false,
                    data: get(data, "data", {})
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