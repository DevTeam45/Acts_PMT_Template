import axios from 'axios';
import { getConfig } from '../../configs/pubConfig';

//#region User Management Microservice Setup
let api_users = null;

export const initializeApiUsers = async (state) => {
  const config = await getConfig();
  api_users = axios.create({
    baseURL: config.API_CCMS_USER_MANAGEMENT_URL, // Base URL for the User Management Service
  });

  // Add a request interceptor
  api_users.interceptors.request.use(request => {
    const apiKey = localStorage.getItem('apiKey');
    if (apiKey) {
      request.headers['X-API-Key'] = apiKey; // Set the API key if it exists
    }
    return request;
  }, error => {
    // Handle request error
    return Promise.reject(error);
  });

  // Add a response interceptor
  api_users.interceptors.response.use(response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  }, error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Add your error handling here
    if (error.response && error.response.status === 401) {
      // Handle Unauthorized error
      return Promise.reject({
        status: 'Failed',
        title: 'Unauthorized',
        message: 'You are not authorized to perform this action. Contact the administrator.'
      });
    } else {
      // Handle other errors
      return Promise.reject({
        status: 'Failed',
        title: 'Error',
        message: 'An error occurred. Please try again later.'
      });
    }
  });
};

export const getApiUsers = async () => {
  if (!api_users) {
    await initializeApiUsers(); // Initialize api_users if it's not already initialized
  }
  return api_users; // Return the axios instance
};
// #endregion

//#region  Members Management Microservice Setup
let api_members = null;

export const initializeApiMembers = async () => {
  const config = await getConfig();
  api_members = axios.create({
    baseURL: config.API_CCMS_MEMBERS_MANAGEMENT_URL, // Base URL for the Members Management Service
  });

  // Add a request interceptor
  api_members.interceptors.request.use(request => {
    const apiKey = localStorage.getItem('apiKey');
    if (apiKey) {
      request.headers['X-API-Key'] = apiKey; // Set the API key if it exists
    }
    return request;
  }, error => {
    // Handle request error
    return Promise.reject(error);
  });

  // Add a response interceptor
  api_members.interceptors.response.use(response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  }, error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Add your error handling here
    if (error.response && error.response.status === 401) {
      // Handle Unauthorized error
      return Promise.reject({
        status: 'Failed',
        title: 'Unauthorized',
        message: 'You are not authorized to perform this action. Contact the administrator.'
      });
    } else {
      // Handle other errors
      return Promise.reject({
        status: 'Failed',
        title: 'Error',
        message: 'An error occurred. Please try again later.'
      });
    }
  });
};

export const getApiMembers = async () => {
  if (!api_members) {
    await initializeApiMembers(); // Initialize api_members if it's not already initialized
  }
  return api_members; // Return the axios instance
};


// #endregion

//#region Departments Management Microservice Setup
let api_departments = null;

export const initializeApiDepartments = async () => {
  const config = await getConfig();
  api_departments = axios.create({
    baseURL: config.API_CCMS_DEPARTMENTS_MANAGEMENT_URL, // Base URL for the Department Management Service
  });

  // Add a request interceptor
  api_departments.interceptors.request.use(request => {
    const apiKey = localStorage.getItem('apiKey'); // Retrieve the API key from local storage
    if (apiKey) {
      request.headers['X-API-Key'] = apiKey; // Set the API key in the request headers if it exists
    }
    return request;
  }, error => {
    // Handle request error
    return Promise.reject(error);
  });

  // Optionally, add a response interceptor
  api_departments.interceptors.response.use(response => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    // Do something with response data
    return response;
  }, error => {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    if (error.response && error.response.status === 401) {
      // Handle Unauthorized error
      return Promise.reject({
        status: 'Failed',
        title: 'Unauthorized',
        message: 'You are not authorized to perform this action. Contact the administrator.'
      });
    } else {
      // Handle other errors
      return Promise.reject({
        status: 'Failed',
        title: 'Error',
        message: 'An error occurred. Please try again later.'
      });
    }
  });
};

export const getApiDepartments = async () => {
  if (!api_departments) {
    await initializeApiDepartments(); // Initialize api_departments if it's not already initialized
  }
  return api_departments; // Return the Axios instance
};

// #endregion

//#region Locations Management Microservice Setup
let api_locations = null;

export const initializeApiLocations = async () => {
  const config = await getConfig();
  api_locations = axios.create({
    baseURL: config.API_CCMS_LOCATIONS_MANAGEMENT_URL, // Base URL for the Location Management Service
  });
  // Add a request interceptor
  api_locations.interceptors.request.use(request => {
    const apiKey = localStorage.getItem('apiKey'); // Retrieve the API key from local storage
    if (apiKey) {
      request.headers['X-API-Key'] = apiKey; // Set the API key in the request headers if it exists
    }
    return request;
  }, error => {
    // Handle request error
    return Promise.reject(error);
  });

  // Placeholder for adding a response interceptor if needed
  api_locations.interceptors.response.use(response => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    // Do something with response data
    return response;
  }, error => {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    if (error.response && error.response.status === 401) {
      // Handle Unauthorized error
      return Promise.reject({
        status: 'Failed',
        title: 'Unauthorized',
        message: 'You are not authorized to perform this action. Contact the administrator.'
      });
    } else {
      // Handle other errors
      return Promise.reject({
        status: 'Failed',
        title: 'Error',
        message: 'An error occurred. Please try again later.'
      });
    }
  });
};

export const getApiLocations = async () => {
  if (!api_locations) {
    await initializeApiLocations(); // Initialize api_locations if it's not already initialized
  }
  return api_locations; // Return the Axios instance
};

// #endregion


//#region Suppliers Management Microservice Setup

let api_suppliers = null;
export const initializeApiSuppliers = async () => {
  const config = await getConfig();
  api_suppliers = axios.create({
    baseURL: config.API_CCMS_SUPPLIERS_MANAGEMENT_URL, // Base URL for the User Management Service
  });

  api_suppliers.interceptors.request.use(request => {
    const apiKey = localStorage.getItem('apiKey');
    if (apiKey) {
      request.headers['X-API-Key'] = apiKey;
    }
    return request;
  }, error => {
    return Promise.reject(error);
  });

  // Add a response interceptor
  api_suppliers.interceptors.response.use(response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  }, error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Add your error handling here
    if (error.response && error.response.status === 401) {
      return Promise.reject({
        status: 'Failed',
        title: 'Unauthorized',
        message: 'You are not authorized to perform this action. Contact the administrator.'
      });
    } else {
      return Promise.reject({
        status: 'Failed',
        title: 'Error',
        message: 'An error occurred. Please try again later.'
      });
    }
  });
};

export const getApiSuppliers = async () => {
  if (!api_suppliers) {
    await initializeApiSuppliers();
  }
  return api_suppliers;
};

// const api_suppliers = axios.create({
//   baseURL: config.API_CCMS_SUPPLIERS_MANAGEMENT_URL, // Base URL for the Supplier Management Service
// });

// api_suppliers.interceptors.request.use(request => {
//     const apiKey = localStorage.getItem('apiKey'); // Assuming the same key for simplicity
//     if (apiKey) {
//         request.headers['X-API-Key'] = apiKey;
//     }
//     return request;
// });

// #endregion


//#region Task Management Microservice Setup

let api_tasks = null;
export const initializeApiTasks = async () => {
    const config = await getConfig();
    api_tasks = axios.create({
        baseURL: config.API_CCMS_TASK_MANAGEMENT_URL, // Base URL for the Task Management Service
    });
    
    // Add a request interceptor
    api_tasks.interceptors.request.use(request => {
        const apiKey = localStorage.getItem('apiKey'); // Retrieve the API key from local storage
        if (apiKey) {
        request.headers['X-API-Key'] = apiKey; // Set the API key in the request headers if it exists
        }
        return request;
    }, error => {
        // Handle request error
        return Promise.reject(error);
    });
    
    // Add a response interceptor
    api_tasks.interceptors.response.use(response => {
        // Any status code that lies within the range of 2xx causes this function to trigger
        // Do something with response data
        return response;
    }, error => {
        // Any status codes that fall outside the range of 2xx cause this function to trigger
        if (error.response && error.response.status === 401) {
        // Handle Unauthorized error
        return Promise.reject({
            status: 'Failed',
            title: 'Unauthorized',
            message: 'You are not authorized to perform this action. Contact the administrator.'
        });
        } else {
        // Handle other errors
        return Promise.reject({
            status: 'Failed',
            title: 'Error',
            message: 'An error occurred. Please try again later.'
        });
        }
    });
};

export const getApiTasks = async () => {
    if (!api_tasks) {
        await initializeApiTasks(); // Initialize api_tasks if it's not already initialized
    }
    return api_tasks; // Return the Axios instance
};

// #endregion

//#region Procument Management Microservice Setup
let api_procurement = null;

export const initializeApiProcurement = async () => {
  const config = await getConfig();
  api_procurement = axios.create({
    baseURL: config.API_CCMS_PROCUREMENTS_MANAGEMENT_URL, // Base URL for the Task Management Service
  });

  // Add a request interceptor
  api_procurement.interceptors.request.use(request => {
    const apiKey = localStorage.getItem('apiKey');
    if (apiKey) {
      request.headers['X-API-Key'] = apiKey;
    }
    return request;
  }, error => {
    return Promise.reject(error);
  });

  // Add a response interceptor
  api_procurement.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response && error.response.status === 401) {
      return Promise.reject({
        status: 'Failed',
        title: 'Unauthorized',
        message: 'You are not authorized to perform this action. Contact the administrator.'
      });
    } else {
      return Promise.reject({
        status: 'Failed',
        title: 'Error',
        message: 'An error occurred. Please try again later.'
      });
    }
  });
}

export const getApiProcurement = async () => {
  if (!api_procurement) {
    await initializeApiProcurement();
  }
  return api_procurement;
};

// #endregion

export { api_users, api_members, api_departments, api_locations, api_tasks, api_procurement, api_suppliers};