import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { TaskModel, TaskProps } from '../model/TaskModel';
import { useApi } from '../services/useApi';


interface TaskContextType {
    tasks: TaskModel[];
    addTask: (task: TaskModel) => void;

}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<TaskModel[]>([]);
    const api = useApi();

    function addTask(task: TaskModel) {
        setTasks((prevState) =>  [
            ...prevState,
            task
        ] )
    }


    const fetchTasks = useCallback(async () => {
        try {
            const response = await api.getAllTasks();
            if (response.status === 200) {
                setTasks(response.data.map((task: TaskProps) => TaskModel.build(task)));
            }
        } catch (error) {
           
        }
    }, [])

    useEffect(() => {
        fetchTasks();
    }, [tasks]);
    

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
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