import { TaskModel } from "../../model/TaskModel"
import { Task } from "./Task"

interface TaskListProps {
    tasks: TaskModel[]
}
export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <>
            {
                tasks.map((task) => (
                    <Task key={task.getId()} task={task} />
                ))
            }
        </>
    )
}