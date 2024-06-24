import { getApiProcurement } from '../../APIServiceSetup';
const api_procurements = await getApiProcurement();

// /api/RequestStatus/list
export const getRequestStatusList = async () => {
    try {
        const response = await api_procurements.get('/api/RequestStatus/list');
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/RequestStatus/{id}
export const getRequestStatusById = async (id) => {
    try {
        const response = await api_procurements.get(`/api/RequestStatus/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/RequestStatus/{id}
export const deleteRequestStatusById = async (id) => {
    try {
        const response = await api_procurements.delete(`/api/RequestStatus/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/RequestStatus
export const getRequestStatus = async () => {
    try {
        const response = await api_procurements.get('/api/RequestStatus');
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/RequestStatus/insert
export const insertRequestStatus = async (requestData) => {
    try {
        const response = await api_procurements.post('/api/RequestStatus/insert', requestData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/RequestStatus/update
export const updateRequestStatus = async (requestData) => {
    try {
        const response = await api_procurements.post('/api/RequestStatus/update', requestData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/RequestStatus/count
export const getRequestStatusCount = async () => {
    try {
        const response = await api_procurements.get('/api/RequestStatus/count');
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/RequestStatus/paginated
export const getPaginatedRequestStatus = async (page, pageSize) => {
    try {
        const response = await api_procurements.get('/api/RequestStatus/paginated', {
            params: {
                page,
                pageSize
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const requestStatusList = await getRequestStatusList();
// const requestStatus = await getRequestStatusById(1);
// const deleteResult = await deleteRequestStatusById(1);
// const requestStatusData = await getRequestStatus();
// const insertResult = await insertRequestStatus(requestData);
// const updateResult = await updateRequestStatus(requestData);
// const requestStatusCount = await getRequestStatusCount();
// const paginatedRequestStatus = await getPaginatedRequestStatus(1, 10);