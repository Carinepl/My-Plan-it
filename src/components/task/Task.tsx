import { Link } from "react-router-dom"
import { TaskModel, TaskStatus } from "../../model/TaskModel"

export const Task: React.FC<{ task: TaskModel }> = ({ task }) => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{task.getSummary()}</h2>
            <p className="text-gray-600">{task.getDescription()}</p>
            <div className="flex justify-between items-center mt-2">
                <span
                    className={
                        `px-2 py-1 rounded
                                    ${task.getStatus() === TaskStatus.OPEN ? "bg-blue-100 text-blue-800" : ""}
                                    ${task.getStatus() === TaskStatus.IN_PROGRESS ? "bg-yellow-100 text-yellow-800" : ""}
                                    ${task.getStatus() === TaskStatus.UNDER_REVIEW ? "bg-purple-100 text-purple-800" : ""}
                                    ${task.getStatus() === TaskStatus.DONE ? "bg-green-100 text-green-800" : ""}
                                    `
                    }>
                    {task.getStatus()}
                </span>
                <Link to={`/tasks/${task.getId()}`} className="text-blue-600">View Details</Link>
            </div>
        </div>
    )
}