import axios from "axios";
const host = "http://192.168.60.44";
const port = "4002";

const baseURL = `${host}:${port}`;

const api = axios.create({
    baseURL,
});
interface CreateTaskProps {
    summary: string;
    description: string;
    reporter: string;
    type: string;
    status?: string;
    assignee?: string;
}
export const useApi = () => {
    return {
        getAllTasks: async () => {
            return await api.get("/v1/tasks");
        },
        createTask: async (data: CreateTaskProps) => {
            return await api.post("/v1/tasks", data);
        },
        editTask: async (taskId: string, data: CreateTaskProps) => {
            return await api.put(`/v1/tasks/${taskId}`, data);
        }
    }
}
