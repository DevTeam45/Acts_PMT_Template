import { getApiMembers } from '../../APIServiceSetup';
const api_members = await getApiMembers();

// Component for "/api/MaritalStatus/List" endpoint
export const MaritalStatusList = async () => {
    try {
        const response = await api_members.get('/api/MaritalStatus/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/MaritalStatus/{id}" endpoint
export const MaritalStatusById = async (id) => {
    try {
        const response = await api_members.get(`/api/MaritalStatus/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/MaritalStatus" endpoint
export const MaritalStatus = async () => {
    try {
        const response = await api_members.get('/api/MaritalStatus');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/MaritalStatus/Insert" endpoint
export const InsertMaritalStatus = async (maritalStatus) => {
    try {
        const response = await api_members.post('/api/MaritalStatus/Insert', maritalStatus);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/MaritalStatus/Update" endpoint
export const UpdateMaritalStatus = async (maritalStatus) => {
    try {
        const response = await api_members.post('/api/MaritalStatus/Update', maritalStatus);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const maritalStatusList = await MaritalStatusList();
// const maritalStatusById = await MaritalStatusById(123);
// const maritalStatus = await MaritalStatus();
// const insertedMaritalStatus = await InsertMaritalStatus({ name: 'Married' });
// const updatedMaritalStatus = await UpdateMaritalStatus({ id: 123, name: 'Single' });