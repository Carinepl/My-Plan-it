import axios from "axios";
const host = "http://192.168.60.90";
const port = 5000;

const baseURL = `${host}:${port}`;

console.log('BASE URL DA CARINE ', baseURL)

const api = axios.create({
    baseURL,
});

interface CreateTaskProps {
    summary: string;
    description: string;
    type: string;
    status?: string;
    assignee?: string;
}

export const useApi = () => {
    return {
        getAllTasks: async () => {
            const result = await api.get("/v1/tasks");
            return result;
        },
        createTask: async (data: CreateTaskProps) => {
            return await api.post("/v1/tasks", data);
        },
        editTask: async (taskId: string, data: CreateTaskProps) => {
            return await api.put(`/v1/tasks/${taskId}`, data);
        }
    }
}