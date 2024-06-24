import {getApiUsers} from '../../APIServiceSetup';
const api_users = await getApiUsers();

// Component for "/api/AccessVerification/ByRole/{roleName}"
export const getByRole = async (roleName) => {
    try {
        const response = await api_users.get(`/api/AccessVerification/ByRole/${roleName}`);
        return response.data;
    } catch (error) {
        // Handle error in a clean way
        console.error('Error in getByRole:', error);
        throw error;
    }
};

// Component for "/api/AccessVerification/ByRight/{rightName}"
export const getByRight = async (rightName) => {
    try {
        const response = await api_users.get(`/api/AccessVerification/ByRight/${rightName}`);
        return response.data;
    } catch (error) {
        // Handle error in a clean way
        console.error('Error in getByRight:', error);
        throw error;
    }
};

// Usage:
// const roleName = 'admin';
// getByRole(roleName)
//   .then(data => {
//     console.log('Response:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });