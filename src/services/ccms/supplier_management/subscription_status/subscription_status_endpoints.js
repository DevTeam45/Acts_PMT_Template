import { getApiSuppliers } from '../../APIServiceSetup';

const api_suppliers = await getApiSuppliers();

// Component for "/api/SubscriptionStatus/List"
export const SubscriptionStatusList = async () => {
    try {
        const response = await api_suppliers.get('/api/SubscriptionStatus/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SubscriptionStatus/{id}"
export const SubscriptionStatusById = async (id) => {
    try {
        const response = await api_suppliers.get(`/api/SubscriptionStatus/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SubscriptionStatus/Insert"
export const InsertSubscriptionStatus = async (subscriptionStatus) => {
    try {
        const response = await api_suppliers.post('/api/SubscriptionStatus/Insert', subscriptionStatus);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SubscriptionStatus/Update"
export const UpdateSubscriptionStatus = async (subscriptionStatus) => {
    try {
        const response = await api_suppliers.post('/api/SubscriptionStatus/Update', subscriptionStatus);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SubscriptionStatus"
export const CreateSubscriptionStatus = async () => {
    try {
        const response = await api_suppliers.post('/api/SubscriptionStatus');
        return response.data;
    } catch (error) {
        return error;
    }
};