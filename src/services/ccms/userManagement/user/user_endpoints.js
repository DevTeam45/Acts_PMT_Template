import { getApiUsers } from '../../APIServiceSetup';
const api_users = getApiUsers();

const getUsersList = async () =>  {
    
const api_users = getApiUsers();
    try {
        const response = await api_users.get("/api/Users/List");
        return response.data;
    } catch (error) {
        return error;
    }
};

const getUserById = async (id) => {
    
const api_users = getApiUsers();
    try {
        const response = await api_users.get(`/api/Users/byID${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

const getUsers = async () => {
    
const api_users = getApiUsers();
    try {
        const response = await api_users.get("/api/Users");
        return response.data;
    } catch (error) {
        return error;
    }
};

const insertUser = async (user) => {
    
const api_users = getApiUsers();
    try {
        const response = await api_users.post("/api/Users/Insert", user);
        return response.data;
    } catch (error) {
        return error;
    }
};

const updateUser = async (user) => {
    
const api_users = getApiUsers();
    try {
        const response = await api_users.post("/api/Users/Update", user);
        return response.data;
    } catch (error) {
        return error;
    }
};

const checkUserHasRight = async (userId, rightName) => {
    
const api_users = getApiUsers();
    try {
        const response = await api_users.get(`/api/Users/UserHasRight/${userId}/${rightName}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

const checkUserHasRole = async (userId, roleName) => {
    
const api_users = getApiUsers();
    try {
        const response = await api_users.get(`/api/Users/UserHasRole/${userId}/${roleName}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

const countUsers = async () => {
    
const api_users = getApiUsers();
    try {
        const response = await api_users.get("/api/Users/CountUsers");
        return response.data;
    } catch (error) {
        return error;
    }
};

const countUsersByRole = async (roleName) => {
    
const api_users = getApiUsers();
    try {
        const response = await api_users.get(`/api/Users/CountUsersByRole/${roleName}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

const getUsersByRole = async (roleName) => {
    
const api_users = getApiUsers();
    try {
        const response = await api_users.get(`/api/Users/GetUsersByRole/${roleName}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

const getUsersByRight = async (rightName) => {
    
const api_users = getApiUsers();
    try {
        const response = await api_users.get(`/api/Users/GetUsersByRight/${rightName}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

const getUserRoles = async (userId) => {
    
const api_users = getApiUsers();
    try {
        const response = await api_users.get(`/api/Users/GetUserRoles/${userId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};


let cacheTimestamp = null;
const CACHE_TIMEOUT = 60 * 60 * 1000; // 5 minutes
let cache_UserRights = null;
export const getUserRights = async (userId, force = false) => {
    const now = Date.now();

    if (force === false) {
        if (cache_UserRights && (now - cacheTimestamp) < CACHE_TIMEOUT) {
            return cache_UserRights;
        }
    }

    try {
        const api_users = await getApiUsers(); // Ensure api_users is initialized
        const response = await api_users.get(`/api/Users/GetUserRights/${userId}`);
        cache_UserRights = response.data;
        cacheTimestamp = now;
        return response.data;
    } catch (error) {
        console.error("Error fetching user rights:", error);
        throw error;
    }
};