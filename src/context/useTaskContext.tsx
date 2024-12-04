import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { TaskModel, TaskProps } from '../model/TaskModel';
import { useApi } from '../services/useApi';


interface TaskContextType {
    tasks: TaskModel[];
    addTask: (task: TaskProps) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<TaskModel[]>([]);
    const api = useApi();


    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const result = await api.getAllTasks();
                if (result.status === 200) {
                    const tasksList = result.data
                    const tasks = tasksList.map((task: TaskProps) => {
                        return TaskModel.build(task)
                    })
                    setTasks(tasks)
                }
            } catch (error) {
                console.log(error);
            }

        }
        fetchTasks();
    }, []);

    return (
        <TaskContext.Provider value={{ tasks, addTask: () => { } }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};