import { getApiSuppliers } from '../../APIServiceSetup';

const api_suppliers = await getApiSuppliers();

// Component for "/api/SupplierAddress/List" endpoint
export const SupplierAddressList = async () => {
    try {
        const response = await api_suppliers.get('/api/SupplierAddress/List');
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/SupplierAddress/{id}" endpoint
export const SupplierAddressById = async (id) => {
    try {
        const response = await api_suppliers.get(`/api/SupplierAddress/${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/SupplierAddress/Insert" endpoint
export const InsertSupplierAddress = async (address) => {
    try {
        const response = await api_suppliers.post('/api/SupplierAddress/Insert', address);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/SupplierAddress/Update" endpoint
export const UpdateSupplierAddress = async (address) => {
    try {
        const response = await api_suppliers.post('/api/SupplierAddress/Update', address);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/SupplierAddress" endpoint
export const SupplierAddress = async () => {
    try {
        const response = await api_suppliers.get('/api/SupplierAddress');
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/SupplierAddress/BySupplier/{supplierId}" endpoint
export const SupplierAddressBySupplierId = async (supplierId) => {
    try {
        const response = await api_suppliers.get(`/api/SupplierAddress/BySupplier/${supplierId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Component for "/api/SupplierAddress/SetActive/{addressId}/{supplierId}" endpoint
export const SetActiveSupplierAddress = async (addressId, supplierId) => {
    try {
        const response = await api_suppliers.post(`/api/SupplierAddress/SetActive/${addressId}/${supplierId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

// Usage:
// const supplierAddressList = await SupplierAddressList();
// const supplierAddressById = await SupplierAddressById(id);
// const insertedSupplierAddress = await InsertSupplierAddress(address);
// const updatedSupplierAddress = await UpdateSupplierAddress(address);
// const supplierAddress = await SupplierAddress();
// const supplierAddressBySupplierId = await SupplierAddressBySupplierId(supplierId);
// const setActiveSupplierAddress = await SetActiveSupplierAddress(addressId, supplierId);