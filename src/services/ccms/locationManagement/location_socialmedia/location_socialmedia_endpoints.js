import { getApiLocations } from '../../APIServiceSetup';

const api_locations = await getApiLocations();

// Component for "/api/LocationSocialMedia/List"
export const LocationSocialMediaList = async () => {
    try {
        const response = await api_locations.get('/api/LocationSocialMedia/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/LocationSocialMedia/{id}"
export const LocationSocialMediaById = async (id) => {
    try {
        const response = await api_locations.get(`/api/LocationSocialMedia/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/LocationSocialMedia/Insert"
export const InsertLocationSocialMedia = async (locationSocialMedia) => {
    try {
        const response = await api_locations.post('/api/LocationSocialMedia/Insert', locationSocialMedia);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/LocationSocialMedia/Update"
export const UpdateLocationSocialMedia = async (locationSocialMedia) => {
    try {
        const response = await api_locations.post('/api/LocationSocialMedia/Update', locationSocialMedia);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/LocationSocialMedia"
export const LocationSocialMedia = async () => {
    try {
        const response = await api_locations.get('/api/LocationSocialMedia');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/LocationSocialMedia/ByLocation/{locationId}"
export const LocationSocialMediaByLocationId = async (locationId) => {
    try {
        const response = await api_locations.get(`/api/LocationSocialMedia/ByLocation/${locationId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/LocationSocialMedia/UpdateHandle/{mediaId}"
export const UpdateLocationSocialMediaHandle = async (mediaId, handle) => {
    try {
        const response = await api_locations.post(`/api/LocationSocialMedia/UpdateHandle/${mediaId}`, handle);
        return response.data;
    } catch (error) {
        return error;
    }
};