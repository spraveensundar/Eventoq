import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestOTP, resetData, submitLogin, submitOTP, submitRegister } from "../actions/crud";

function useSetup() {
    const dispatch = useDispatch();
    const crud = useSelector(state => state.crud);

    const handleSubmitLogin = useCallback((payload) => {
        dispatch(submitLogin('login', payload));
    }, []);

    const handleResetData = useCallback((attribute) => {
        dispatch(resetData(attribute));
    }, []);

    const handleSubmitRegister = useCallback((payload) => {
        dispatch(submitRegister('register', payload));
    }, []);

    const handleRequestOTP = useCallback((payload) => {
        dispatch(requestOTP("otp", payload))
    }, [])

    const handleSubmitOTP = useCallback((payload) => {
        dispatch(submitOTP("verification", payload))
    }, [])

    return {
        crud,
        submitLogin: handleSubmitLogin,
        resetData: handleResetData,
        submitRegister: handleSubmitRegister,
        requestOTP: handleRequestOTP,
        submitOTP: handleSubmitOTP
    }
}

export default useSetup;