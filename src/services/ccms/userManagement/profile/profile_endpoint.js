import { getApiUsers } from '../../APIServiceSetup';

// Component for "/api/Users/UpdateUserDetails" endpoint
export const UpdateUserDetails = async (userData) => {
    const api_users = await getApiUsers();
    try {
        const response = await api_users.post('/api/Users/UpdateUserDetails', userData);
        return response;
    } catch (error) {
        return error;
    }
};