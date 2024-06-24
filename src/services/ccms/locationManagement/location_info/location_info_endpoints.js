import { getApiLocations } from '../../APIServiceSetup';

const api_locations = await getApiLocations();

// Component for "/api/LocationInfo/List"
export const LocationInfoList = async () => {
    try {
        const response = await api_locations.get('/api/LocationInfo/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/LocationInfo/{id}"
export const LocationInfo = async (id) => {
    try {
        const response = await api_locations.get(`/api/LocationInfo/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/LocationInfo/Insert"
export const InsertLocationInfo = async (locationInfo) => {
    try {
        const response = await api_locations.post('/api/LocationInfo/Insert', locationInfo);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/LocationInfo/Update"
export const UpdateLocationInfo = async (locationInfo) => {
    try {
        const response = await api_locations.post('/api/LocationInfo/Update', locationInfo);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/LocationInfo/ByLocation/{locationId}"
export const LocationInfoByLocation = async (locationId) => {
    try {
        const response = await api_locations.get(`/api/LocationInfo/ByLocation/${locationId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/LocationInfo/SetValue/{infoId}/{newValue}"
export const SetValue = async (infoId, newValue) => {
    try {
        const response = await api_locations.post(`/api/LocationInfo/SetValue/${infoId}/${newValue}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/LocationInfo"
export const LocationInfoData = async () => {
    try {
        const response = await api_locations.get('/api/LocationInfo');
        return response.data;
    } catch (error) {
        return error;
    }
};