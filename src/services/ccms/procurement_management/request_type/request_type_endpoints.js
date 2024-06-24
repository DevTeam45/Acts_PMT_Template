import { getApiProcurement } from '../../APIServiceSetup';
const api_procurements = await getApiProcurement();

// Component for "/api/RequestType/list" endpoint
export const RequestTypeList = async () => {
    try {
        const response = await api_procurements.get('/api/RequestType/list');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestType/{id}" endpoint
export const RequestTypeById = async (id) => {
    try {
        const response = await api_procurements.get(`/api/RequestType/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestType/{id}" DELETE endpoint
export const DeleteRequestType = async (id) => {
    try {
        const response = await api_procurements.delete(`/api/RequestType/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestType/insert" endpoint
export const InsertRequestType = async (requestData) => {
    try {
        const response = await api_procurements.post('/api/RequestType/insert', requestData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestType/update" endpoint
export const UpdateRequestType = async (requestData) => {
    try {
        const response = await api_procurements.post('/api/RequestType/update', requestData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestType/count" endpoint
export const RequestTypeCount = async () => {
    try {
        const response = await api_procurements.get('/api/RequestType/count');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestType/paginated" endpoint
export const RequestTypePaginated = async (page, pageSize) => {
    try {
        const response = await api_procurements.get('/api/RequestType/paginated', {
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

// Component for "/api/RequestType" endpoint
export const RequestType = async () => {
    try {
        const response = await api_procurements.get('/api/RequestType');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const requestTypeList = await RequestTypeList();
// const requestTypeById = await RequestTypeById(1);
// const deleteRequestType = await DeleteRequestType(1);
// const insertRequestType = await InsertRequestType(requestData);
// const updateRequestType = await UpdateRequestType(requestData);
// const requestTypeCount = await RequestTypeCount();
// const requestTypePaginated = await RequestTypePaginated(1, 10);
// const requestType = await RequestType();