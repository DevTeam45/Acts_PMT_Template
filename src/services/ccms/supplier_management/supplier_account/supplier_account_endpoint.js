import { getApiSuppliers } from '../../APIServiceSetup';

const api_suppliers = await getApiSuppliers();

// Component for /api/SupplierAccount/{id}
export const getSupplierAccountById = async (id) => {
    try {
        const response = await api_suppliers.get(`/api/SupplierAccount/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for /api/SupplierAccount/Insert
export const insertSupplierAccount = async (supplierAccount) => {
    try {
        const response = await api_suppliers.post('/api/SupplierAccount/Insert', supplierAccount);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for /api/SupplierAccount/Update
export const updateSupplierAccount = async (supplierAccount) => {
    try {
        const response = await api_suppliers.post('/api/SupplierAccount/Update', supplierAccount);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for /api/SupplierAccount/BySupplier/{supplierId}
export const getSupplierAccountBySupplierId = async (supplierId) => {
    try {
        const response = await api_suppliers.get(`/api/SupplierAccount/BySupplier/${supplierId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for /api/SupplierAccount/SetActive/{accountId}/{isActive}
export const setSupplierAccountActive = async (accountId, isActive) => {
    try {
        const response = await api_suppliers.post(`/api/SupplierAccount/SetActive/${accountId}/${isActive}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for /api/SupplierAccount/ByUsername/{username}
export const getSupplierAccountByUsername = async (username) => {
    try {
        const response = await api_suppliers.get(`/api/SupplierAccount/ByUsername/${username}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for /api/SupplierAccount
export const getAllSupplierAccounts = async () => {
    try {
        const response = await api_suppliers.get('/api/SupplierAccount');
        return response.data;
    } catch (error) {
        return error;
    }
};