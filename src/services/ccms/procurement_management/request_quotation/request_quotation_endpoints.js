import { getApiProcurement } from '../../APIServiceSetup';
const api_procurements = await getApiProcurement();

// Component for "/api/RequestQuotation/list"
export const getRequestQuotationList = async () => {
    try {
        const response = await api_procurements.get('/api/RequestQuotation/list');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestQuotation/{id}"
export const getRequestQuotationById = async (id) => {
    try {
        const response = await api_procurements.get(`/api/RequestQuotation/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestQuotation/{id}" (DELETE)
export const deleteRequestQuotationById = async (id) => {
    try {
        const response = await api_procurements.delete(`/api/RequestQuotation/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestQuotation/insert"
export const insertRequestQuotation = async (requestData) => {
    try {
        console.log(requestData)
        const response = await api_procurements.post('/api/RequestQuotation/insert', requestData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestQuotation/update"
export const updateRequestQuotation = async (requestData) => {
    try {
        const response = await api_procurements.post('/api/RequestQuotation/update', requestData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestQuotation/count"
export const getRequestQuotationCount = async () => {
    try {
        const response = await api_procurements.get('/api/RequestQuotation/count');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestQuotation/paginatedList"
export const getPaginatedRequestQuotationList = async (page, pageSize) => {
    try {
        const response = await api_procurements.get('/api/RequestQuotation/paginatedList', {
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

// Component for "/api/RequestQuotation"
export const getRequestQuotation = async () => {
    try {
        const response = await api_procurements.get('/api/RequestQuotation');
        return response.data;
    } catch (error) {
        return error;
    }
};