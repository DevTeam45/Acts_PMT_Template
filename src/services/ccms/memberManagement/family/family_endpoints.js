import { getApiMembers } from '../../APIServiceSetup';
const api_members = await getApiMembers();

// Component for "/api/Family/List" endpoint
export const FamilyList = async () => {
    try {
        const response = await api_members.get('/api/Family/List');
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/Family/{id}" endpoint
export const FamilyById = async (id) => {
    try {
        const response = await api_members.get(`/api/Family/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/Family" endpoint
export const AllFamilies = async () => {
    try {
        const response = await api_members.get('/api/Family');
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/Family/Insert" endpoint
export const InsertFamily = async (familyData) => {
    try {
        const response = await api_members.post('/api/Family/Insert', familyData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/Family/Update" endpoint
export const UpdateFamily = async (familyData) => {
    try {
        const response = await api_members.post('/api/Family/Update', familyData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Usage:
// const familyList = await FamilyList();
// const familyById = await FamilyById(123);
// const allFamilies = await AllFamilies();
// const insertedFamily = await InsertFamily({ name: 'New Family' });
// const updatedFamily = await UpdateFamily({ id: 123, name: 'Updated Family' });