import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetData, submitLogin, submitRegister } from "../actions/curd";

function useSetup() {
    const dispatch = useDispatch();
    const curd = useSelector(state => state.curd);

    const handleSubmitLogin = useCallback((payload) => {
        dispatch(submitLogin('login', payload));
    }, []);

    const handleResetData = useCallback((attribute) => {
        dispatch(resetData(attribute));
    }, []);

    const handleSubmitRegister = useCallback((payload) => {
        dispatch(submitRegister('register', payload));
    }, []);

    return {
        curd,
        submitLogin: handleSubmitLogin,
        resetData: handleResetData,
        submitRegister: handleSubmitRegister,
    }
}

export default useSetup;