import { getApiMembers } from '../../APIServiceSetup';
const api_members = await getApiMembers();

// /api/MemberInFamily/List
export const MemberInFamilyList = async () => {
    try {
        const response = await api_members.get('/api/MemberInFamily/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/MemberInFamily/{id}
export const MemberInFamilyById = async (id) => {
    try {
        const response = await api_members.get(`/api/MemberInFamily/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/MemberInFamily/{relationshipId}/{memberId}
export const MemberInFamilyByRelationshipAndMemberId = async (relationshipId, memberId) => {
    try {
        const response = await api_members.get(`/api/MemberInFamily/${relationshipId}/${memberId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/MemberInFamily/Insert
export const InsertMemberInFamily = async (memberData) => {
    try {
        const response = await api_members.post('/api/MemberInFamily/Insert', memberData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/MemberInFamily/Update
export const UpdateMemberInFamily = async (memberData) => {
    try {
        const response = await api_members.post('/api/MemberInFamily/Update', memberData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/MemberInFamily
export const MemberInFamily = async () => {
    try {
        const response = await api_members.get('/api/MemberInFamily');
        return response.data;
    } catch (error) {
        return error;
    }
};