import { getApiProcurement } from '../../APIServiceSetup';
const api_procurements = await getApiProcurement();

// Component for "/api/ApprovalStatus/list"
export const ApprovalStatusList = async () => {
    try {
        const response = await api_procurements.get('/api/ApprovalStatus/list');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/ApprovalStatus/{statusId}"
export const ApprovalStatus = async (statusId) => {
    try {
        const response = await api_procurements.get(`/api/ApprovalStatus/${statusId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for deleting "/api/ApprovalStatus/{statusId}"
export const DeleteApprovalStatus = async (statusId) => {
    try {
        const response = await api_procurements.delete(`/api/ApprovalStatus/${statusId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for inserting "/api/ApprovalStatus"
export const InsertApprovalStatus = async (approvalStatusData) => {
    try {
        const response = await api_procurements.post('/api/ApprovalStatus/insert', approvalStatusData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for updating "/api/ApprovalStatus"
export const UpdateApprovalStatus = async (approvalStatusData) => {
    try {
        const response = await api_procurements.post('/api/ApprovalStatus/update', approvalStatusData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/ApprovalStatus"
export const GetApprovalStatus = async () => {
    try {
        const response = await api_procurements.get('/api/ApprovalStatus');
        return response.data;
    } catch (error) {
        return error;
    }
};