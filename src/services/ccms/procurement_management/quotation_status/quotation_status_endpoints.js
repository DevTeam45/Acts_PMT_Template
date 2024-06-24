import { getApiProcurement } from '../../APIServiceSetup';
const api_procurements = await getApiProcurement();

// Component for "/api/QuotationStatus/list"
export const QuotationStatusList = async () => {
    try {
        const response = await api_procurements.get('/api/QuotationStatus/list');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationStatus/{id}"
export const QuotationStatusById = async (id) => {
    try {
        const response = await api_procurements.get(`/api/QuotationStatus/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationStatus/insert"
export const InsertQuotationStatus = async (quotationStatus) => {
    try {
        const response = await api_procurements.post('/api/QuotationStatus/insert', quotationStatus);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationStatus/update"
export const UpdateQuotationStatus = async (quotationStatus) => {
    try {
        const response = await api_procurements.post('/api/QuotationStatus/update', quotationStatus);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationStatus/delete"
export const DeleteQuotationStatus = async (quotationStatus) => {
    try {
        const response = await api_procurements.delete('/api/QuotationStatus/delete', { data: quotationStatus });
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationStatus/search"
export const SearchQuotationStatus = async (booleanFuncExpression) => {
    try {
        const response = await api_procurements.post('/api/QuotationStatus/search', booleanFuncExpression);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationStatus/count"
export const CountQuotationStatus = async () => {
    try {
        const response = await api_procurements.get('/api/QuotationStatus/count');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationStatus/paginate"
export const PaginateQuotationStatus = async (page, pageSize) => {
    try {
        const response = await api_procurements.post('/api/QuotationStatus/paginate', { page, pageSize });
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationStatus"
export const QuotationStatus = async () => {
    try {
        const response = await api_procurements.get('/api/QuotationStatus');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Usage:
// const quotationStatusList = await QuotationStatusList();
// const quotationStatusById = await QuotationStatusById(1);
// const insertedQuotationStatus = await InsertQuotationStatus({ name: 'New Status' });
// const updatedQuotationStatus = await UpdateQuotationStatus({ id: 1, name: 'Updated Status' });
// const deletedQuotationStatus = await DeleteQuotationStatus({ id: 1 });
// const searchedQuotationStatus = await SearchQuotationStatus({ isActive: true });
// const quotationStatusCount = await CountQuotationStatus();
// const paginatedQuotationStatus = await PaginateQuotationStatus(1, 10);
// const quotationStatus = await QuotationStatus();