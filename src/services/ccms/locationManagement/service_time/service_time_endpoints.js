import { getApiLocations } from '../../APIServiceSetup';

const api_locations = await getApiLocations();

// Component for "/api/ServiceTime/List"
export const ServiceTimeList = async () => {
    try {
        const response = await api_locations.get('/api/ServiceTime/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/ServiceTime/{id}"
export const ServiceTime = async (id) => {
    try {
        const response = await api_locations.get(`/api/ServiceTime/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/ServiceTime/Insert"
export const InsertServiceTime = async (serviceTime) => {
    try {
        const response = await api_locations.post('/api/ServiceTime/Insert', serviceTime);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/ServiceTime/Update"
export const UpdateServiceTime = async (serviceTime) => {
    try {
        const response = await api_locations.post('/api/ServiceTime/Update', serviceTime);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/ServiceTime"
export const GetAllServiceTimes = async () => {
    try {
        const response = await api_locations.get('/api/ServiceTime');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/ServiceTime/ActiveByLocation/{locationId}"
export const ActiveServiceTimesByLocation = async (locationId) => {
    try {
        const response = await api_locations.get(`/api/ServiceTime/ActiveByLocation/${locationId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/ServiceTime/SetEndTime/{serviceTimeId}"
export const SetEndTime = async (serviceTimeId, endTime) => {
    try {
        const response = await api_locations.post(`/api/ServiceTime/SetEndTime/${serviceTimeId}`, endTime);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const serviceTimeList = await ServiceTimeList();
// const serviceTime = await ServiceTime(id);
// const insertedServiceTime = await InsertServiceTime(serviceTime);
// const updatedServiceTime = await UpdateServiceTime(serviceTime);
// const allServiceTimes = await GetAllServiceTimes();
// const activeServiceTimes = await ActiveServiceTimesByLocation(locationId);
// const endTimeSet = await SetEndTime(serviceTimeId, 