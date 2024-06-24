import {getApiUsers} from '../../APIServiceSetup';
const api_users = await getApiUsers();

// Component for "/api/AspNetRights/List"
export const AspNetRightsList = async () => {
    try {
        const response = await api_users.get('/api/AspNetRights/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/AspNetRights/{id}"
export const AspNetRights = async (id) => {
    try {
        const response = await api_users.get(`/api/AspNetRights/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/AspNetRights"
export const AspNetRightsAll = async () => {
    try {
        const response = await api_users.get('/api/AspNetRights');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/AspNetRights/Insert"
export const AspNetRightsInsert = async (data) => {
    try {
        const response = await api_users.post('/api/AspNetRights/Insert', data);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/AspNetRights/Update"
export const AspNetRightsUpdate = async (data) => {
    try {
        const response = await api_users.put('/api/AspNetRights/Update', data);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/AspNetRights/UserHasRight/{userId}/{rightName}"
export const AspNetRightsUserHasRight = async (userId, rightName) => {
    try {
        const response = await api_users.get(`/api/AspNetRights/UserHasRight/${userId}/${rightName}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const GetRightsByRoleID = async (roleId) => {
    try {
        const response = await api_users.get(`/api/AspNetRights/RoleRights/${roleId}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

// Component for "/api/AspNetRights/AssignRightToRole"
export const AssignRightToRole = async (data) => {
    try {
        const response = await api_users.post('/api/AspNetRights/AssignRightToRole', data);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/AspNetRights/RemoveRightFromRole"
export const RemoveRightFromRole = async (data) => {
    try {
        const response = await api_users.post('/api/AspNetRights/RemoveRightFromRole', data);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const rightsList = await AspNetRightsList();
// const rights = await AspNetRights(id);
// const allRights = await AspNetRightsAll();
// const insertedRights = await AspNetRightsInsert(data);
// const updatedRights = await AspNetRightsUpdate(data);
// const userHasRight = await AspNetRightsUserHasRight(userId, rightName);