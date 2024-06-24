import { getApiMembers } from '../../APIServiceSetup';
const api_members = await getApiMembers();

// Component for "/api/Relationship/List"
export const RelationshipList = async () => {
    try {
        const response = await api_members.get('/api/Relationship/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Relationship/{id}"
export const RelationshipById = async (id) => {
    try {
        const response = await api_members.get(`/api/Relationship/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Relationship"
export const Relationship = async () => {
    try {
        const response = await api_members.get('/api/Relationship');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Relationship/Insert"
export const InsertRelationship = async (relationshipData) => {
    try {
        const response = await api_members.post('/api/Relationship/Insert', relationshipData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Relationship/Update"
export const UpdateRelationship = async (relationshipData) => {
    try {
        const response = await api_members.post('/api/Relationship/Update', relationshipData);
        return response.data;
    } catch (error) {
        return error;
    }
};