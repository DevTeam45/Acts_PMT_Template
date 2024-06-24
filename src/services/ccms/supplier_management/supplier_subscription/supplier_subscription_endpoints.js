import { getApiSuppliers } from '../../APIServiceSetup';

// /api/SupplierSubscription/List
export const SupplierSubscriptionList = async () => {
    const api_suppliers = await getApiSuppliers();
    try {
        const response = await api_suppliers.get('/api/SupplierSubscription/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/SupplierSubscription/SubscriptionList
export const SubscriptionList = async () => {
    try {
        const api_suppliers = await getApiSuppliers();
        const response = await api_suppliers.get('/api/SupplierSubscription/SubscriptionList');
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/SupplierSubscription/{id}
export const SupplierSubscription = async (id) => {
    
    const api_suppliers = await getApiSuppliers();
    try {
        const response = await api_suppliers.get(`/api/SupplierSubscription/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/SupplierSubscription/Insert
export const InsertSupplierSubscription = async (data) => {
    
    const api_suppliers = await getApiSuppliers();
    try {
        const response = await api_suppliers.post('/api/SupplierSubscription/Insert', data);
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/SupplierSubscription/AddSubscription
export const AddSubscription = async (data) => {
    const api_suppliers = await getApiSuppliers();
    try {
        const response = await api_suppliers.post('/api/SupplierSubscription/AddSubscription', data);
        return response.data;
    } catch (error) {
        
        return error;
    }
};

// /api/SupplierSubscription/Update
export const UpdateSupplierSubscription = async (data) => {
    const api_suppliers = await getApiSuppliers();
    try {
        const response = await api_suppliers.post('/api/SupplierSubscription/Update', data);
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/SupplierSubscription
export const GetSupplierSubscription = async () => {
    const api_suppliers = await getApiSuppliers();
    try {
        const response = await api_suppliers.get('/api/SupplierSubscription');
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/SupplierSubscription/BySupplier/{supplierId}
export const GetSupplierSubscriptionBySupplier = async (supplierId) => {
    const api_suppliers = await getApiSuppliers();
    try {
        const response = await api_suppliers.get(`/api/SupplierSubscription/BySupplier/${supplierId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/SupplierSubscription/ActiveSubscriptions
export const GetActiveSubscriptions = async () => {
    const api_suppliers = await getApiSuppliers();
    try {
        const response = await api_suppliers.get('/api/SupplierSubscription/ActiveSubscriptions');
        return response.data;
    } catch (error) {
        return error;
    }
};

// /api/SupplierSubscription/UpdateSubscriptionStatus/{subscriptionId}/{newStatusId}
export const UpdateSubscriptionStatus = async (subscriptionId, newStatusId) => {
    const api_suppliers = await getApiSuppliers();
    try {
        const response = await api_suppliers.post(`/api/SupplierSubscription/UpdateSubscriptionStatus/${subscriptionId}/${newStatusId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const supplierSubscriptionList = await SupplierSubscriptionList();
// const supplierSubscription = await SupplierSubscription(id);
// const insertedSupplierSubscription = await InsertSupplierSubscription(data);
// const addedSubscription = await AddSubscription(data);
// const updatedSupplierSubscription = await UpdateSupplierSubscription(data);
// const supplierSubscription = await GetSupplierSubscription();
// const supplierSubscriptionBySupplier = await GetSupplierSubscriptionBySupplier(supplierId);
// const activeSubscriptions = await GetActiveSubscriptions();
// const updatedSubscriptionStatus = await UpdateSubscriptionStatus(subscriptionId, newStatusId);