import { getApiDepartments } from '../../APIServiceSetup';

const api_departments = await getApiDepartments();

// Component for "/api/MemberInDepartment/List"
export const MemberInDepartmentList = async () => {
    try {
        const response = await api_departments.get('/api/MemberInDepartment/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/MemberInDepartment/Get"
export const MemberInDepartmentGet = async (id) => {
    try {
        const response = await api_departments.get('/api/MemberInDepartment/Get', { params: { id } });
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/MemberInDepartment/Insert"
export const MemberInDepartmentInsert = async (data) => {
    try {
        const response = await api_departments.post('/api/MemberInDepartment/Insert', data);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/MemberInDepartment/Update"
export const MemberInDepartmentUpdate = async (data) => {
    try {
        const response = await api_departments.put('/api/MemberInDepartment/Update', data);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/MemberInDepartment/Delete"
export const MemberInDepartmentDelete = async (data) => {
    try {
        const response = await api_departments.delete('/api/MemberInDepartment/Delete', { data });
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/MemberInDepartment"
export const MemberInDepartment = async () => {
    try {
        const response = await api_departments.get('/api/MemberInDepartment');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const memberInDepartmentListData = await MemberInDepartmentList();
// const memberInDepartmentGetData = await MemberInDepartmentGet(id);
// const memberInDepartmentInsertData = await MemberInDepartmentInsert(data);
// const memberInDepartmentUpdateData = await MemberInDepartmentUpdate(data);
// const memberInDepartmentDeleteData = await MemberInDepartmentDelete(data);
// const memberInDepartmentData = await MemberInDepartme