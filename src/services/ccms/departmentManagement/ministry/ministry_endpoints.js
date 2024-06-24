import { getApiDepartments } from '../../APIServiceSetup';

const api_departments = await getApiDepartments();

// Component for "/api/Ministry/List"
export const MinistryList = async () => {
    try {
        const response = await api_departments.get('/api/Ministry/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Ministry/Get"
export const MinistryGet = async (id) => {
    try {
        const response = await api_departments.get('/api/Ministry/Get', { params: { id } });
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Ministry/Insert"
export const MinistryInsert = async (ministry) => {
    try {
        const response = await api_departments.post('/api/Ministry/Insert', ministry);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Ministry/Update"
export const MinistryUpdate = async (ministry) => {
    try {
        const response = await api_departments.post('/api/Ministry/Update', ministry);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Ministry/Activate"
export const MinistryActivate = async (ministryId) => {
    try {
        const response = await api_departments.post('/api/Ministry/Activate', null, { params: { ministryId } });
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Ministry/Deactivate"
export const MinistryDeactivate = async (ministryId) => {
    try {
        const response = await api_departments.post('/api/Ministry/Deactivate', null, { params: { ministryId } });
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Ministry"
export const Ministry = async () => {
    try {
        const response = await api_departments.get('/api/Ministry');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const ministryListData = await MinistryList();
// const ministryGetData = await MinistryGet(1);
// const ministryInsertData = await MinistryInsert({ name: 'Ministry Name' });
// const ministryUpdateData = await MinistryUpdate({ id: 1, name: 'Updated Ministry Name' });
// const ministryActivateData = await MinistryActivate(1);
// const ministryDeactivateData = await MinistryDeactivate(1);
// const ministryData = await Ministry();