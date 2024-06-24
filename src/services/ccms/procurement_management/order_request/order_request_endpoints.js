import { getApiProcurement } from "../../APIServiceSetup";
const api_procurements = await getApiProcurement();

// Component for "/api/OrderRequest/list"
export const getOrderRequestList = async () => {
  try {
    const response = await api_procurements.get("/api/OrderRequest/list");
    return response.data;
  } catch (error) {
    return error;
  }
};

// Component for "/api/OrderRequest/{id}"
export const getOrderRequestById = async (id) => {
  try {
    const response = await api_procurements.get(`/api/OrderRequest/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

// Component for "/api/OrderRequest"
export const getAllOrderRequests = async () => {
  try {
    const response = await api_procurements.get("/api/OrderRequest");
    return response.data;
  } catch (error) {
    return error;
  }
};

// Component for "/api/OrderRequest/insert"
export const insertOrderRequest = async (orderRequest) => {
  try {
    const response = await api_procurements.post(
      "/api/OrderRequest/insert",
      orderRequest
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

// Component for "/api/OrderRequest/update"
export const updateOrderRequest = async (orderRequest) => {
  try {
    const response = await api_procurements.post(
      "/api/OrderRequest/update",
      orderRequest
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

// Component for "/api/OrderRequest/delete"
export const deleteOrderRequest = async (orderRequest) => {
  try {
    const response = await api_procurements.delete("/api/OrderRequest/delete", {
      data: orderRequest,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

// Component for "/api/OrderRequest/count"
export const getOrderRequestCount = async () => {
  try {
    const response = await api_procurements.get("/api/OrderRequest/count");
    return response.data;
  } catch (error) {
    return error;
  }
};

// Component for "/api/OrderRequest/paginated"
export const getPaginatedOrderRequests = async (page, pageSize) => {
  try {
    const response = await api_procurements.get("/api/OrderRequest/paginated", {
      params: { page, pageSize },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

let memberRequestsCache = null;

export const MemberRequests = async (forceRefresh = false) => {
  try {
    if (memberRequestsCache && !forceRefresh) {
      return memberRequestsCache;
    }

    const response = await api_procurements.get(
      "/api/OrderRequest/MemberRequests"
    );
    memberRequestsCache = response.data;
    return memberRequestsCache;
  } catch (error) {
    return error;
  }
};

export const MemberRequest = async (id) => {
  try {
    const response = await api_procurements.get(
      `/api/OrderRequest/MemberRequests/${id}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const SubmitOrderRequest = async (id) => {
  try {
    const response = await api_procurements.post(
      `/api/OrderRequest/changestatus?requestId=${id}&statusId=1`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

// Usage:
// const orderRequestList = await getOrderRequestList();
// const orderRequest = await getOrderRequestById(id);
// const allOrderRequests = await getAllOrderRequests();
// const insertedOrderRequest = await insertOrderRequest(orderRequestData);
// const updatedOrderRequest = await updateOrderRequest(orderRequestData);
// const deletedOrderRequest = await deleteOrderRequest(orderRequestData);
// const orderRequestCount = await getOrderRequestCount();
// const paginatedOrderRequests = await getPaginatedOrderRequests(page, pageSize);
