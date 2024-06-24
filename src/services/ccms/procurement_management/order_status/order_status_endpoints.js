import { getApiProcurement } from '../../APIServiceSetup';
const api_procurements = await getApiProcurement();

// Component for "/api/OrderStatus/list"
export const getOrderStatusList = async () => {
    try {
        const response = await api_procurements.get('/api/OrderStatus/list');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/OrderStatus/{id}"
export const getOrderStatusById = async (id) => {
    try {
        const response = await api_procurements.get(`/api/OrderStatus/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/OrderStatus/insert"
export const insertOrderStatus = async (orderStatus) => {
    try {
        const response = await api_procurements.post('/api/OrderStatus/insert', orderStatus);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/OrderStatus/update"
export const updateOrderStatus = async (orderStatus) => {
    try {
        const response = await api_procurements.post('/api/OrderStatus/update', orderStatus);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/OrderStatus/count"
export const getOrderStatusCount = async () => {
    try {
        const response = await api_procurements.get('/api/OrderStatus/count');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/OrderStatus/paginatedList"
export const getOrderStatusPaginatedList = async (page, pageSize) => {
    try {
        const response = await api_procurements.get('/api/OrderStatus/paginatedList', {
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

// Component for "/api/OrderStatus"
export const getOrderStatus = async () => {
    try {
        const response = await api_procurements.get('/api/OrderStatus');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const orderStatusList = await getOrderStatusList();
// const orderStatus = await getOrderStatusById(1);
// const insertedOrderStatus = await insertOrderStatus({ name: 'New Order Status' });
// const updatedOrderStatus = await updateOrderStatus({ id: 1, name: 'Updated Order Status' });
// const orderStatusCount = await getOrderStatusCount();
// const paginatedOrderStatusList = await getOrderStatusPaginatedList(1, 10);
// const orderStatus = await getOrderStatus();