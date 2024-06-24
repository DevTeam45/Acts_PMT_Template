import { getApiUsers } from '../../APIServiceSetup';


// Component for "/api/Login/v1" endpoint
export const loginV1 = async (loginData) => {
    const api_users = getApiUsers();
    try {
        const response = await api_users.post('/api/Login/v1', loginData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/Login" endpoint
export const login = async (loginData) => {
    const api_users = await getApiUsers();
    try {
        const response = await api_users.post('/api/Login', loginData);
        return response;
    } catch (error) {
        return error;
    }
};