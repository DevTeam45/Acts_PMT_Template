import { getApiSuppliers } from '../../APIServiceSetup';

const api_suppliers = await getApiSuppliers();

// Component for "/api/SubscriptionType/List"
export const SubscriptionTypeList = async () => {
    try {
        const response = await api_suppliers.get('/api/SubscriptionType/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SubscriptionType/{id}"
export const SubscriptionTypeById = async (id) => {
    try {
        const response = await api_suppliers.get(`/api/SubscriptionType/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SubscriptionType/Insert"
export const SubscriptionTypeInsert = async (subscriptionType) => {
    try {
        const response = await api_suppliers.post('/api/SubscriptionType/Insert', subscriptionType);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SubscriptionType/Update"
export const SubscriptionTypeUpdate = async (subscriptionType) => {
    try {
        const response = await api_suppliers.post('/api/SubscriptionType/Update', subscriptionType);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SubscriptionType"
export const SubscriptionType = async () => {
    try {
        const response = await api_suppliers.get('/api/SubscriptionType');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SubscriptionType/ByName/{name}"
export const SubscriptionTypeByName = async (name) => {
    try {
        const response = await api_suppliers.get(`/api/SubscriptionType/ByName/${name}`);
        return response.data;
    } catch (error) {
        return error;
    }
};