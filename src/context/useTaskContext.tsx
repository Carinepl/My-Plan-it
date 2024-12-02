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
                const response = await api.getAllTasks();
                console.log(response);
                if(response.status === 200){
                    console.log(response.data);
                    setTasks(response.data.map((task: TaskProps) => TaskModel.build(task)));
                }
            } catch (error) {
                console.log(error);
            }

        }
        fetchTasks();
    }, []);

    return (
        <TaskContext.Provider value={{ tasks, addTask:()=>{}}}>
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