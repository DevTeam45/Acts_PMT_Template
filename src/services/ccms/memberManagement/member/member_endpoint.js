import { getApiMembers } from '../../APIServiceSetup';
const api_members = await getApiMembers();

// Component for "/api/Member/List" endpoint
export const MemberList = async () => {
    try {
        const response = await api_members.get('/api/Member/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Member/{id}" endpoint
export const MemberById = async (id) => {
    try {
        const response = await api_members.get(`/api/Member/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Member/Insert" endpoint
export const InsertMember = async (memberData) => {
    try {
        console.log(memberData);
        const response = await api_members.post('/api/Member/Insert', memberData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Member/Update" endpoint
export const UpdateMember = async (memberData) => {
    try {
        const response = await api_members.post('/api/Member/Update', memberData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Member" endpoint
export const AllMembers = async () => {
    try {
        const response = await api_members.get('/api/Member');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const memberList = await MemberList();
// const memberById = await MemberById(123);
// const insertedMember = await InsertMember({ name: 'John Doe' });
// const updatedMember = await UpdateMember({ id: 123, name: 'John Doe' });
// const allMembers = await AllMembers();