import { getApiLocations } from '../../APIServiceSetup';

const api_locations = await getApiLocations();

// Component for "/api/Location/List"
export const LocationList = async () => {
    try {
        const response = await api_locations.get('/api/Location/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Location/{id}"
export const LocationById = async (id) => {
    try {
        const response = await api_locations.get(`/api/Location/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Location/Insert"
export const InsertLocation = async (location) => {
    try {
        const response = await api_locations.post('/api/Location/Insert', location);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Location/Update"
export const UpdateLocation = async (location) => {
    try {
        const response = await api_locations.post('/api/Location/Update', location);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Location"
export const AllLocations = async () => {
    try {
        const response = await api_locations.get('/api/Location');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Location/SetActive/{locationId}/{isActive}"
export const SetLocationActive = async (locationId, isActive) => {
    try {
        const response = await api_locations.post(`/api/Location/SetActive/${locationId}/${isActive}`);
        return response.data;
    } catch (error) {
        return error;
    }
};