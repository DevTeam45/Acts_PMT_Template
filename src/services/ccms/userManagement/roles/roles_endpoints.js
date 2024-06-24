import {getApiUsers} from '../../APIServiceSetup';
const api_users = await getApiUsers();

// Component for "/api/SystemRoles/List"
export const List = async () => {
    try {
        const response = await api_users.get('/api/SystemRoles/List');
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/SystemRoles/Role/{id}"
export const Role = async (id) => {
    try {
        const response = await api_users.get(`/api/SystemRoles/Role/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/SystemRoles"
export const SystemRoles = async () => {
    try {
        const response = await api_users.get('/api/SystemRoles');
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/SystemRoles/Insert"
export const Insert = async (role) => {
    try {
        const response = await api_users.post('/api/SystemRoles/Insert', role);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/SystemRoles/Update"
export const Update = async (role) => {
    try {
        const response = await api_users.post('/api/SystemRoles/Update', role);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/SystemRoles/{roleId}"
export const RoleId = async (roleId) => {
    try {
        const response = await api_users.get(`/api/SystemRoles/${roleId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/SystemRoles/UserRoles/{userId}"
export const UserRoles = async (userId) => {
    try {
        const response = await api_users.get(`/api/SystemRoles/UserRoles/${userId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Usage:
// const listData = await List();
// const roleData = await Role(123);
// const systemRolesData = await SystemRoles();
// const insertData = await Insert({ name: 'New Role' });
// const updateData = await Update({ id: 456, name: 'Updated Role' });
// const roleIdData = await RoleId('abc');
// const userRolesData = await UserRoles('xyz');