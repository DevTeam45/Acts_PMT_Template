import {getApiUsers} from '../../APIServiceSetup';
const api_users = await getApiUsers();



export default async function verifyAccess(accessRequest) {
    try {
        const response = await api_users.post('/api/Access/VerifyAccess', accessRequest);
        return response.data;
    } catch (error) {
        let errorMessage = 'An error occurred while verifying access.';
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
        }
        throw new Error(errorMessage);
    }
}