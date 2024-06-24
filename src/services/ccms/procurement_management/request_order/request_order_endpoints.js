import { getApiProcurement } from '../../APIServiceSetup';
const api_procurements = await getApiProcurement();

// Component for "/api/RequestOrder/list" endpoint
export const getRequestOrderList = async () => {
    try {
        const response = await api_procurements.get('/api/RequestOrder/list');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestOrder/{orderId}" endpoint
export const getRequestOrderById = async (orderId) => {
    try {
        const response = await api_procurements.get(`/api/RequestOrder/${orderId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestOrder/{orderId}" DELETE endpoint
export const deleteRequestOrderById = async (orderId) => {
    try {
        const response = await api_procurements.delete(`/api/RequestOrder/${orderId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestOrder/insert" endpoint
export const insertRequestOrder = async (requestData) => {
    try {
        const response = await api_procurements.post('/api/RequestOrder/insert', requestData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestOrder/update" endpoint
export const updateRequestOrder = async (requestData) => {
    try {
        const response = await api_procurements.post('/api/RequestOrder/update', requestData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestOrder" endpoint
export const getAllRequestOrders = async () => {
    try {
        const response = await api_procurements.get('/api/RequestOrder');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestOrder/{page}/{pageSize}" endpoint
export const getRequestOrdersByPage = async (page, pageSize) => {
    try {
        const response = await api_procurements.get(`/api/RequestOrder/${page}/${pageSize}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/RequestOrder/count" endpoint
export const getRequestOrderCount = async () => {
    try {
        const response = await api_procurements.get('/api/RequestOrder/count');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const requestOrderList = await getRequestOrderList();
// const requestOrder = await getRequestOrderById(orderId);
// const deleteResult = await deleteRequestOrderById(orderId);
// const insertResult = await insertRequestOrder(requestData);
// const updateResult = await updateRequestOrder(requestData);
// const allRequestOrders = await getAllRequestOrders();
// const requestOrdersByPage = await getRequestOrdersByPage(page, pageSize);
// const requestOrderCount = await getRequestOrderCount();