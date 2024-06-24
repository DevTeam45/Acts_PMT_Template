import { getApiTasks } from "../../APIServiceSetup";

const api_tasks = await getApiTasks();
let cacheTimestamp = null;
const CACHE_TIMEOUT = 5 * 60 * 1000; // 5 minutes

export const TasksList = async () => {
    try {
        const response = await api_tasks.get('/api/Tasks/List');
        return response.data;
    } catch (error) {
        return error;
    }
}

export const TasksById = async (id) => {
    try {
        const response = await api_tasks.get(`/api/Tasks/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const InsertTasks = async (tasks) => {
    try {
        const response = await api_tasks.post('/api/Tasks/Insert', tasks);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const UpdateTasks = async (tasks) => {
    try {
        const response = await api_tasks.post('/api/Tasks/Update', tasks);
        return response.data;
    } catch (error) {
        return error;
    }
}

let cache_TaskViewList = null;
export const TaskViewList = async (TaskFilters, force = false) => {
    const now = Date.now();
  
    if (force === false) {
        if (cache_TaskViewList && (now - cacheTimestamp) < CACHE_TIMEOUT) {
        console.log('Returning cached data');
        return cache_TaskViewList;
        }
    }

    try {
        const response = await api_tasks.get('/api/TaskView/GetTaskListView', TaskFilters);
        cache_TaskViewList = response.data;
        cacheTimestamp = now;
        return response.data;
    } catch (error) {
        return error;
    }
}