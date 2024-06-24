import { getApiSuppliers } from '../../APIServiceSetup';

const api_suppliers = await getApiSuppliers();

// Component for /api/Industry/List endpoint
export const IndustryList = async () => {
    try {
        const response = await api_suppliers.get('/api/Industry/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for /api/Industry/{id} endpoint
export const IndustryById = async (id) => {
    try {
        const response = await api_suppliers.get(`/api/Industry/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for /api/Industry endpoint
export const Industry = async () => {
    try {
        const response = await api_suppliers.get('/api/Industry');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for /api/Industry/Insert endpoint
export const InsertIndustry = async (industryData) => {
    try {
        const response = await api_suppliers.post('/api/Industry/Insert', industryData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for /api/Industry/Update endpoint
export const UpdateIndustry = async (industryData) => {
    try {
        const response = await api_suppliers.post('/api/Industry/Update', industryData);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for /api/Industry/Active endpoint
export const ActiveIndustry = async () => {
    try {
        const response = await api_suppliers.get('/api/Industry/Active');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for /api/Industry/SetActive/{industryId}/{isActive} endpoint
export const SetIndustryActive = async (industryId, isActive) => {
    try {
        const response = await api_suppliers.post(`/api/Industry/SetActive/${industryId}/${isActive}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const industryList = await IndustryList();
// const industryById = await IndustryById(id);
// const industry = await Industry();
// const insertedIndustry = await InsertIndustry(industryData);
// const updatedIndustry = await UpdateIndustry(industryData);
// const activeIndustry = await ActiveIndustry();
// const setIndustryActive = await SetIndustryActive(industryId, isActive);