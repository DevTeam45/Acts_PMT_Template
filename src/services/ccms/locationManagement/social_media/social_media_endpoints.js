import { getApiLocations } from '../../APIServiceSetup';

const api_locations = await getApiLocations();

// Component for "/api/SocialMedia/List"
export const SocialMediaList = async () => {
    try {
        const response = await api_locations.get('/api/SocialMedia/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SocialMedia/{id}"
export const SocialMediaById = async (id) => {
    try {
        const response = await api_locations.get(`/api/SocialMedia/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SocialMedia/Insert"
export const SocialMediaInsert = async (data) => {
    try {
        const response = await api_locations.post('/api/SocialMedia/Insert', data);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SocialMedia/Update"
export const SocialMediaUpdate = async (data) => {
    try {
        const response = await api_locations.post('/api/SocialMedia/Update', data);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SocialMedia/ByName/{name}"
export const SocialMediaByName = async (name) => {
    try {
        const response = await api_locations.get(`/api/SocialMedia/ByName/${name}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SocialMedia/UpdateLink/{mediaId}"
export const SocialMediaUpdateLink = async (mediaId, link) => {
    try {
        const response = await api_locations.post(`/api/SocialMedia/UpdateLink/${mediaId}`, link);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SocialMedia"
export const SocialMedia = async () => {
    try {
        const response = await api_locations.get('/api/SocialMedia');
        return response.data;
    } catch (error) {
        return error;
    }
};