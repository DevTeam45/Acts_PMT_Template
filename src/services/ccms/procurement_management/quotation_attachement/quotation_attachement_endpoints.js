import { getApiProcurement } from '../../APIServiceSetup';
const api_procurements = await getApiProcurement();

// Component for "/api/QuotationAttachment/list"
export const QuotationAttachmentList = async () => {
    try {
        const response = await api_procurements.get('/api/QuotationAttachment/list');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationAttachment/{id}"
export const QuotationAttachmentById = async (id) => {
    try {
        const response = await api_procurements.get(`/api/QuotationAttachment/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationAttachment/insert"
export const QuotationAttachmentInsert = async (quotationAttachment) => {
    try {
        const response = await api_procurements.post('/api/QuotationAttachment/insert', quotationAttachment);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationAttachment/update"
export const QuotationAttachmentUpdate = async (quotationAttachment) => {
    try {
        const response = await api_procurements.post('/api/QuotationAttachment/update', quotationAttachment);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationAttachment/delete"
export const QuotationAttachmentDelete = async (quotationAttachment) => {
    try {
        const response = await api_procurements.delete('/api/QuotationAttachment/delete', { data: quotationAttachment });
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationAttachment/search"
export const QuotationAttachmentSearch = async (quotationAttachmentBooleanFuncExpression) => {
    try {
        const response = await api_procurements.post('/api/QuotationAttachment/search', quotationAttachmentBooleanFuncExpression);
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationAttachment/count"
export const QuotationAttachmentCount = async () => {
    try {
        const response = await api_procurements.get('/api/QuotationAttachment/count');
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationAttachment/paginate"
export const QuotationAttachmentPaginate = async (page, pageSize) => {
    try {
        const response = await api_procurements.post('/api/QuotationAttachment/paginate', { page, pageSize });
        return response.data;
    } catch (error) {
        return error;
    }
};

// Component for "/api/QuotationAttachment"
export const QuotationAttachment = async () => {
    try {
        const response = await api_procurements.get('/api/QuotationAttachment');
        return response.data;
    } catch (error) {
        return error;
    }
};