import { getApiTasks } from "../../APIServiceSetup";

const api_tasks = await getApiTasks();

let cache_taskStatusList = null;
let cacheTimestamp = null;
const CACHE_TIMEOUT = 5 * 60 * 1000; // 5 minutes
export const TaskStatusList = async () => {
    const now = Date.now();
  
    if (cache_taskStatusList && (now - cacheTimestamp) < CACHE_TIMEOUT) {
      console.log('Returning cached data');
      return cache_taskStatusList;
    }
  
    try {
      const response = await api_tasks.get('/api/TaskStatus/List');
      cache_taskStatusList = response.data;
      cacheTimestamp = now;
      return response.data;
    } catch (error) {
      return error;
    }
  }

export const TaskStatusById = async (id) => {
    try {
        const response = await api_tasks.get(`/api/TaskStatus/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const InsertTaskStatus = async (taskStatus) => {
    try {
        const response = await api_tasks.post('/api/TaskStatus/Insert', taskStatus);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const UpdateTaskStatus = async (taskStatus) => {
    try {
        const response = await api_tasks.post('/api/TaskStatus/Update', taskStatus);
        return response.data;
    } catch (error) {
        return error;
    }
}