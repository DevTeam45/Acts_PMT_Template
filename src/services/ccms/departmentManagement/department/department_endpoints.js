import { getApiDepartments } from '../../APIServiceSetup';

const api_departments = await getApiDepartments();

// Component for "/api/Department/List"
export const DepartmentList = async () => {
    try {
        const response = await api_departments.get('/api/Department/List');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Department/{id}"
export const DepartmentById = async (id) => {
    try {
        const response = await api_departments.get(`/api/Department/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Department/Insert"
export const InsertDepartment = async (department) => {
    try {
        const response = await api_departments.post('/api/Department/Insert', department);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Department/Update"
export const UpdateDepartment = async (department) => {
    try {
        const response = await api_departments.post('/api/Department/Update', department);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Department/Delete"
export const DeleteDepartment = async (department) => {
    try {
        const response = await api_departments.delete('/api/Department/Delete', { data: department });
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Department/Search"
export const SearchDepartment = async (expression) => {
    try {
        const response = await api_departments.post('/api/Department/Search', expression);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Department/Count"
export const DepartmentCount = async () => {
    try {
        const response = await api_departments.get('/api/Department/Count');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Department/GetPaginatedList"
export const PaginatedDepartmentList = async (page, pageSize) => {
    try {
        const response = await api_departments.get('/api/Department/GetPaginatedList', { params: { page, pageSize } });
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/Department"
export const Department = async () => {
    try {
        const response = await api_departments.get('/api/Department');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const departmentList = await DepartmentList();
// const departmentById = await DepartmentById(1);
// const insertedDepartment = await InsertDepartment({ name: 'New Department' });
// const updatedDepartment = await UpdateDepartment({ id: 1, name: 'Updated Department' });
// const deletedDepartment = await DeleteDepartment({ id: 1 });
// const searchedDepartments = await SearchDepartment({ name: 'Department' });
// const departmentCount = await DepartmentCount();
// const paginatedDepartmentList = await PaginatedDepartmentList(1, 10);
// const department = await Department();