import { getApiSuppliers } from '../../APIServiceSetup';

const api_suppliers = await getApiSuppliers();

// Component for "/api/SupplierContact/List"
export const SupplierContactList = async () => {
    try {
        const response = await api_suppliers.get('/api/SupplierContact/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SupplierContact/{id}"
export const SupplierContact = async (id) => {
    try {
        const response = await api_suppliers.get(`/api/SupplierContact/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SupplierContact/Insert"
export const InsertSupplierContact = async (supplierContact) => {
    try {
        const response = await api_suppliers.post('/api/SupplierContact/Insert', supplierContact);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SupplierContact/Update"
export const UpdateSupplierContact = async (supplierContact) => {
    try {
        const response = await api_suppliers.post('/api/SupplierContact/Update', supplierContact);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SupplierContact/ByAddress/{addressId}"
export const SupplierContactByAddress = async (addressId) => {
    try {
        const response = await api_suppliers.get(`/api/SupplierContact/ByAddress/${addressId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SupplierContact/SetPrimary/{contactId}/{addressId}"
export const SetPrimarySupplierContact = async (contactId, addressId) => {
    try {
        const response = await api_suppliers.post(`/api/SupplierContact/SetPrimary/${contactId}/${addressId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SupplierContact"
export const SupplierContactInfo = async () => {
    try {
        const response = await api_suppliers.get('/api/SupplierContact');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/SupplierContact/ByName/{name}"
export const SupplierContactByName = async (name) => {
    try {
        const response = await api_suppliers.get(`/api/SupplierContact/ByName/${name}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const supplierContactList = await SupplierContactList();
// const supplierContact = await SupplierContact(id);
// const insertedSupplierContact = await InsertSupplierContact(supplierContact);
// const updatedSupplierContact = await UpdateSupplierContact(supplierContact);
// const supplierContactByAddress = await SupplierContactByAddress(addressId);
// const primarySupplierContact = await SetPrimarySupplierContact(contactId, addressId);
// const supplierContactInfo = await SupplierContactInfo();
// const supplierContactByName = await SupplierContactByName(name);