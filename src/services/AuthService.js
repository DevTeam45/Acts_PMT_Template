import axios from 'axios';
import swal from "sweetalert";
import { login as ccmsLogin } from '../services/ccms/userManagement/login/login_endpoint';
import {
    loginConfirmedAction,
    Logout,
} from '../redux/actions/AuthActions';

export function signUp(email, password) {
    //axios call
    const postData = {
        email,
        password,
        returnSecureToken: true,
    };
    return axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
        postData,
    );
}

export async function login(email, password) {
    const postData = {
        email,
        password,
        returnSecureToken: true,
    };
    const response = await ccmsLogin(postData);
    return response;
    // return axios.post(
    //     `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
    //     postData,
    // );
}

export function formatError(errorResponse) {
    swal("Oops, " + errorResponse.title, errorResponse.message, "error");
    // switch (errorResponse.error.message) {
    //     case 'EMAIL_EXISTS':
    //         //return 'Email already exists';
    //         swal("Oops", "Email already exists", "error");
    //         break;
    //     case 'EMAIL_NOT_FOUND':
    //         //return 'Email not found';
    //        swal("Oops", "Email not found", "error",{ button: "Try Again!",});
    //        break;
    //     case 'INVALID_PASSWORD':
    //         //return 'Invalid Password';
    //         swal("Oops", "Invalid Password", "error",{ button: "Try Again!",});
    //         break;
    //     case 'USER_DISABLED':
    //         return 'User Disabled';

    //     default:
    //         return '';
    // }
}

export function saveTokenInLocalStorage(tokenDetails) {
    // Calculate the expiry date based on the current time and expiresIn value
    const expiryDate = new Date(new Date().getTime() + tokenDetails.expiresIn * 1000);

    // Create a new userDetails object with the required fields
    const userDetails = {
        userId: tokenDetails.userId,
        apiKey: tokenDetails.apiKey,
        startDate: tokenDetails.startDate,
        expiryDate: expiryDate.toISOString(),
        memberID: tokenDetails.memberID,
        isActive: tokenDetails.isActive,
        firstName: tokenDetails.firstName,
        surname: tokenDetails.surname,
        email: tokenDetails.email,
        avator: tokenDetails.avator
    };

    // Save the userDetails object to localStorage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    localStorage.setItem('apiKey', tokenDetails.apiKey);
    localStorage.setItem('userID', tokenDetails.userId);
}

export function runLogoutTimer(dispatch, timer, navigate) {
    setTimeout(() => {
        //dispatch(Logout(history));
        dispatch(Logout(navigate));
    }, timer);
}

export function checkAutoLogin(dispatch, navigate) {
    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(Logout(navigate));
        return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expiryDate);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(Logout(navigate));
        return;
    }

    dispatch(loginConfirmedAction(tokenDetails));
    
    const timer = expireDate.getTime() - todaysDate.getTime();
    runLogoutTimer(dispatch, timer, navigate);
}
