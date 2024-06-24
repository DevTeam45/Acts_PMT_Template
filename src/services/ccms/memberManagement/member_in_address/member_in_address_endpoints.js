import { getApiMembers } from '../../APIServiceSetup';
const api_members = await getApiMembers();

// Component for "/api/MemberInAddress/List" endpoint
export const MemberInAddressList = async () => {
    try {
        const response = await api_members.get('/api/MemberInAddress/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/MemberInAddress/Insert" endpoint
export const MemberInAddressInsert = async (memberInAddressData) => {
    try {
        const response = await api_members.post('/api/MemberInAddress/Insert', memberInAddressData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/MemberInAddress/Update" endpoint
export const MemberInAddressUpdate = async (memberInAddressData) => {
    try {
        const response = await api_members.post('/api/MemberInAddress/Update', memberInAddressData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/MemberInAddress/{id}" endpoint
export const MemberInAddressById = async (id) => {
    try {
        const response = await api_members.get(`/api/MemberInAddress/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/MemberInAddress" endpoint
export const MemberInAddress = async () => {
    try {
        const response = await api_members.get('/api/MemberInAddress');
        return response.data;
    } catch (error) {
        return error;
    }
};