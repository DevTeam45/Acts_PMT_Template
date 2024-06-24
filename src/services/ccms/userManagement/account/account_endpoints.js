import {getApiUsers} from '../../APIServiceSetup';
const api_users = await getApiUsers();

// Function to handle the "/api/Account/Register" endpoint
export const Register = async (registerData) => {
    try {
        const response = await api_users.post("/api/Account/Register", registerData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Function to handle the "/api/Account/revokekey/{keyId}" endpoint
export const RevokeKey = async (keyId) => {
    try {
        const response = await api_users.put(`/api/Account/revokekey/${keyId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Function to handle the "/api/Account/ConfirmEmail" endpoint
export const ConfirmEmail = async (userId, code) => {
    try {
        const response = await api_users.post("/api/Account/ConfirmEmail", null, {
            params: { userId, code },
        });
        return response.data;
    } catch (error) {
        return error;
    }
};

// Function to handle the "/api/Account/ExternalLogin" endpoint
export const ExternalLogin = async (provider, returnUrl) => {
    try {
        const response = await api_users.post("/api/Account/ExternalLogin", null, {
            params: { provider, returnUrl },
        });
        return response.data;
    } catch (error) {
        return error;
    }
};

// Function to handle the "/api/Account/ForgotPassword" endpoint
export const ForgotPassword = async (forgotPasswordData) => {
    try {
        const response = await api_users.post("/api/Account/ForgotPassword", forgotPasswordData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Function to handle the "/api/Account/ResetPassword" endpoint
export const ResetPassword = async (resetPasswordData) => {
    try {
        const response = await api_users.post("/api/Account/ResetPassword", resetPasswordData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Function to handle the "/api/Account/LoginWith2fa" endpoint
export const LoginWith2fa = async (loginData, rememberMe, returnUrl) => {
    try {
        const response = await api_users.post("/api/Account/LoginWith2fa", loginData, {
            params: { rememberMe, returnUrl },
        });
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Account/Register"
export const register = async (registerData) => {
    try {
        const response = await api_users.post('/api/Account/Register', registerData);
        // Handle success response
        return response.data;
    } catch (error) {
        // Handle error
        console.error('Error occurred while registering:', error);
        throw new Error('Failed to register. Please try again later.');
    }
};

// Component for "/api/Account/revokekey/{keyId}"
export const revokeKey = async (keyId) => {
    try {
        const response = await api_users.put(`/api/Account/revokekey/${keyId}`);
        // Handle success response
        return response.data;
    } catch (error) {
        // Handle error
        console.error('Error occurred while revoking key:', error);
        throw new Error('Failed to revoke key. Please try again later.');
    }
};

// Component for "/api/Account/ConfirmEmail"
export const confirmEmail = async (userId, code) => {
    try {
        const response = await api_users.post('/api/Account/ConfirmEmail', null, {
            params: { userId, code },
        });
        // Handle success response
        return response.data;
    } catch (error) {
        // Handle error
        console.error('Error occurred while confirming email:', error);
        throw new Error('Failed to confirm email. Please try again later.');
    }
};

// Component for "/api/Account/ExternalLogin"
export const externalLogin = async (provider, returnUrl) => {
    try {
        const response = await api_users.post('/api/Account/ExternalLogin', null, {
            params: { provider, returnUrl },
        });
        // Handle success response
        return response.data;
    } catch (error) {
        // Handle error
        console.error('Error occurred while external login:', error);
        throw new Error('Failed to perform external login. Please try again later.');
    }
};

// Component for "/api/Account/ForgotPassword"
export const forgotPassword = async (forgotPasswordData) => {
    try {
        const response = await api_users.post('/api/Account/ForgotPassword', forgotPasswordData);
        // Handle success response
        return response.data;
    } catch (error) {
        // Handle error
        console.error('Error occurred while requesting password reset:', error);
        throw new Error('Failed to request password reset. Please try again later.');
    }
};

// Component for "/api/Account/ResetPassword"
export const resetPassword = async (resetPasswordData) => {
    try {
        const response = await api_users.post('/api/Account/ResetPassword', resetPasswordData);
        // Handle success response
        return response.data;
    } catch (error) {
        // Handle error
        console.error('Error occurred while resetting password:', error);
        throw new Error('Failed to reset password. Please try again later.');
    }
};

// Component for "/api/Account/LoginWith2fa"
export const loginWith2fa = async (rememberMe, returnUrl, twoFactorAuthData) => {
    try {
        const response = await api_users.post('/api/Account/LoginWith2fa', twoFactorAuthData, {
            params: { rememberMe, returnUrl },
        });
        // Handle success response
        return response.data;
    } catch (error) {
        // Handle error
        console.error('Error occurred while logging in with 2FA:', error);
        throw new Error('Failed to login with 2FA. Please try again later.');
    }
};

// Usage:
// register(registerData).then((response) => {
//   console.log('Registration successful:', response);
// }).catch((error) => {
//   console.error('Registration failed:', error.message);
// });

// revokeKey(keyId).then((response) => {
//   console.log('Key revoked successfully:', response);
// }).catch((error) => {
//   console.error('Failed to revoke key:', error.message);
// });

// confirmEmail(userId, code).then((response) => {
//   console.log('Email confirmed successfully:', response);
// }).catch((error) => {
//   console.error('Failed to confirm email:', error.message);
// });

// externalLogin(provider, returnUrl).then((response) => {
//   console.log('External login successful:', response);
// }).catch((error) => {
//   console.error('Failed to perform external login:', error.message);
// });

// forgotPassword(forgotPasswordData).then((response) => {
//   console.log('Password reset requested successfully:', response);
// }).catch((error) => {
//   console.error('Failed to request password reset:', error.message);
// });

// resetPassword(resetPasswordData).then((response) => {
//   console.log('Password reset successful:', response);
// }).catch((error) => {
//   console.error('Failed to reset password:', error.message);
// });

// loginWith2fa(rememberMe, returnUrl, twoFactorAuthData).then((response) => {
//   console.log('Login with 2FA successful:', response);
// }).catch((error) => {
//   console.error('Failed to login with 2FA:', error.message);
// });