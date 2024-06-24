import React from 'react';
//import { useNavigate } from "react-router-dom";


import {
    formatError,
    login,
    runLogoutTimer,
    saveTokenInLocalStorage,
    signUp,
} from '../../services/AuthService';


export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';



export function signupAction(email, password, navigate) {
	
    return (dispatch) => {
        signUp(email, password)
        .then((response) => {
            saveTokenInLocalStorage(response.data);
            runLogoutTimer(
                dispatch,
                response.data.expiresIn * 1000,
                //history,
            );
            dispatch(confirmedSignupAction(response.data));
            navigate('/app/dashboard');
			//history.push('/dashboard');
        })
        .catch((error) => {
            const errorMessage = formatError(error.response.data);
            dispatch(signupFailedAction(errorMessage));
        });
    };
}

export function Logout(navigate) {
	localStorage.removeItem('userDetails');
    navigate('/auth/login');
	//history.push('/login');
    
	return {
        type: LOGOUT_ACTION,
    };
}

export function loginAction(email, password, navigate) {
    return (dispatch) => {
        login(email, password)
            .then((response) => { 
                const result = response.data;
                if (result.status === 'Success') {
                    const tokenDetails = {
                        userId: result.results.userId,
                        apiKey: result.results.apiKey,
                        startDate: result.results.startDate,
                        expiresIn: (new Date(result.results.expiryDate).getTime() - new Date().getTime()) / 1000, // Calculate expiresIn based on expiryDate
                        memberID: result.results.memberID,
                        isActive: result.results.isActive,
                        firstName: result.results.firstName,
                        surname: result.results.surname,
                        email: result.results.email,
                        avator: result.results.avator
                    };
                    
                    saveTokenInLocalStorage(tokenDetails);
                    console.log('Response Data: ', response.data);
                    runLogoutTimer(dispatch,  (new Date(result.results.expiryDate).getTime() - new Date().getTime()), navigate);
                    dispatch({ type: LOGIN_CONFIRMED_ACTION, payload: tokenDetails });              
                    navigate('/app/dashboard');        
                } else {
                    const errorMessage = formatError(response.data);
                    dispatch({ type: LOGIN_FAILED_ACTION, payload: errorMessage });
                }  
            })
            .catch((error) => {
                console.log('error');
                const errorMessage = formatError(error);
                dispatch(loginFailedAction(errorMessage));
            })
            .finally(() => {
                dispatch({ type: LOADING_TOGGLE_ACTION, payload: false });
            });
    };
}

export function loginFailedAction(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data,
    };
}

export function loginConfirmedAction(data) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: data,
    };
}

export function confirmedSignupAction(payload) {
    return {
        type: SIGNUP_CONFIRMED_ACTION,
        payload,
    };
}

export function signupFailedAction(message) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload: message,
    };
}

export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}
