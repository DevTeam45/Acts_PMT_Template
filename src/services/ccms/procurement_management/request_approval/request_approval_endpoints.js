import { getApiProcurement } from '../../APIServiceSetup';
const api_procurements = await getApiProcurement();

// Component for "/api/RequestApproval/list" endpoint
export const getRequestApprovalList = async () => {
    try {
        const response = await api_procurements.get('/api/RequestApproval/list');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestApproval/{requestId}/{quotationId}/{approvalMemberId}" endpoint
export const getRequestApproval = async (requestId, quotationId, approvalMemberId) => {
    try {
        const response = await api_procurements.get(`/api/RequestApproval/${requestId}/${quotationId}/${approvalMemberId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestApproval/insert" endpoint
export const insertRequestApproval = async (requestData) => {
    try {
        const response = await api_procurements.post('/api/RequestApproval/insert', requestData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestApproval/update" endpoint
export const updateRequestApproval = async (requestData) => {
    try {
        const response = await api_procurements.post('/api/RequestApproval/update', requestData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestApproval/{id}" endpoint
export const getRequestApprovalById = async (id) => {
    try {
        const response = await api_procurements.get(`/api/RequestApproval/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestApproval" endpoint
export const getAllRequestApprovals = async () => {
    try {
        const response = await api_procurements.get('/api/RequestApproval');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestApproval/Requests" endpoint
export const getUserRequestApprovals = async () => {
    try {
        const response = await api_procurements.get('/api/RequestApproval/Requests');
        return response.data;
    } catch (error) {
        return error;
    }
};