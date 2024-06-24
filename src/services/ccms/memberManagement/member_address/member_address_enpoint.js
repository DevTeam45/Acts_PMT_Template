import { getApiMembers } from '../../APIServiceSetup';
const api_members = await getApiMembers();

// Component for "/api/MemberAddress/List" endpoint
export const MemberAddressList = async () => {
    try {
        const response = await api_members.get('/api/MemberAddress/List');
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/MemberAddress/{id}" endpoint
export const MemberAddressById = async (id) => {
    try {
        const response = await api_members.get(`/api/MemberAddress/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/MemberAddress" endpoint
export const MemberAddress = async () => {
    try {
        const response = await api_members.get('/api/MemberAddress');
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/MemberAddress/Insert" endpoint
export const InsertMemberAddress = async (memberAddress) => {
    try {
        const response = await api_members.post('/api/MemberAddress/Insert', memberAddress);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/MemberAddress/Update" endpoint
export const UpdateMemberAddress = async (memberAddress) => {
    try {
        const response = await api_members.post('/api/MemberAddress/Update', memberAddress);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Usage:
// const memberAddressList = await MemberAddressList();
// const memberAddressById = await MemberAddressById(123);
// const memberAddress = await MemberAddress();
// const insertedMemberAddress = await InsertMemberAddress({ /* member address data */ });
// const updatedMemberAddress = await UpdateMemberAddress({ /* member address data */ });