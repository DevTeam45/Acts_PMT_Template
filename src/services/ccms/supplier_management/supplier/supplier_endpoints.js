import { getApiSuppliers } from '../../APIServiceSetup';

const api_suppliers = await getApiSuppliers();

// Component for "/api/Supplier/List"
export const SupplierList = async () => {
    try {
        const response = await api_suppliers.get('/api/Supplier/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Supplier/{id}"
export const SupplierById = async (id) => {
    try {
        const response = await api_suppliers.get(`/api/Supplier/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Supplier/Insert"
export const InsertSupplier = async (supplier) => {
    try {
        const response = await api_suppliers.post('/api/Supplier/Insert', supplier);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Supplier/Update"
export const UpdateSupplier = async (supplier) => {
    try {
        const response = await api_suppliers.post('/api/Supplier/Update', supplier);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Supplier/ByIndustry/{industryId}"
export const SupplierByIndustry = async (industryId) => {
    try {
        const response = await api_suppliers.get(`/api/Supplier/ByIndustry/${industryId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Supplier/Search/{searchTerm}"
export const SupplierSearch = async (searchTerm) => {
    try {
        const response = await api_suppliers.get(`/api/Supplier/Search/${searchTerm}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Supplier/UpdateContactDetails/{supplierId}"
export const UpdateSupplierContactDetails = async (supplierId, contactDetails) => {
    try {
        const response = await api_suppliers.post(`/api/Supplier/UpdateContactDetails/${supplierId}`, contactDetails);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Supplier/UpdateTags/{supplierId}"
export const UpdateSupplierTags = async (supplierId, tags) => {
    try {
        const response = await api_suppliers.post(`/api/Supplier/UpdateTags/${supplierId}`, tags);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Supplier"
export const Supplier = async () => {
    try {
        const response = await api_suppliers.get('/api/Supplier');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Supplier/Details/List"
let supplierDetailsListCache = null;

export const SupplierDetailsList = async (forceRefresh = false) => {
    try {
        if (!forceRefresh && supplierDetailsListCache) {
            return supplierDetailsListCache;
        }

        const response = await api_suppliers.get('/api/Supplier/Details/List');
        supplierDetailsListCache = response.data;
        return supplierDetailsListCache;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Supplier/Details/{supplierId}"
export const SupplierDetailsById = async (supplierId) => {
    try {
        const response = await api_suppliers.get(`/api/Supplier/Details/${supplierId}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Supplier/Details/Search/{searchTerm}"
export const SupplierDetailsSearch = async (searchTerm) => {
    try {
        const response = await api_suppliers.get(`/api/Supplier/Details/Search/${searchTerm}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const supplierList = await SupplierList();
// const supplierById = await SupplierById(123);
// const insertedSupplier = await InsertSupplier({ name: 'New Supplier' });
// const updatedSupplier = await UpdateSupplier({ id: 123, name: 'Updated Supplier' });
// const supplierByIndustry = await SupplierByIndustry(456);
// const supplierSearch = await SupplierSearch('search term');
// const updatedContactDetails = await UpdateSupplierContactDetails(123, { email: 'newemail@example.com' });
// const updatedTags = await UpdateSupplierTags(123, 'tag1,tag2,tag3');
// const supplier = await Supplier();
// const supplierDetailsList = await SupplierDetailsList();
// const supplierDetailsById = await SupplierDetailsById(123);
// const supplierDetailsSearch = await SupplierDetailsSearch('search term');