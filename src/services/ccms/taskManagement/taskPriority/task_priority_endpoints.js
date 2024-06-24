import { getApiTasks } from "../../APIServiceSetup";

const api_tasks = await getApiTasks();

export const TaskPriorityList = async () => {
    try {
        const response = await api_tasks.get('/api/TaskPriority/List');
        return response.data;
    } catch (error) {
        return error;
    }
}

export const TaskPriorityById = async (id) => {
    try {
        const response = await api_tasks.get(`/api/TaskPriority/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const InsertTaskPriority = async (taskPriority) => {
    try {
        const response = await api_tasks.post('/api/TaskPriority/Insert', taskPriority);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const UpdateTaskPriority = async (taskPriority) => {
    try {
        const response = await api_tasks.post('/api/TaskPriority/Update', taskPriority);
        return response.data;
    } catch (error) {
        return error;
    }
}