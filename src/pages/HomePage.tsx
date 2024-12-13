import { Link } from "react-router-dom"
import { MainTitle } from "../components/common/MainTitle"
import { useTaskContext } from "../context/useTaskContext"
import { TaskModel, TaskStatus } from "../model/TaskModel"
import { useNavigate } from "react-router-dom"

export const HomePage: React.FC = () => {
    const { tasks } = useTaskContext()
    const navigate = useNavigate();

    const completedTasks = tasks.filter((task: TaskModel) => task.getStatus() === TaskStatus.DONE)

    return (
        <div className="space-y-6">
            <MainTitle title="Welcome to PlanIt" />
            <p className="text-xl text-gray-700">Your personal task management system</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 shadow-md rounded">
                <StartCard
                    title="Total Tasks"
                    value={tasks.length}
                    onClick={() => navigate("/tasks")}
                />
                <StartCard
                    title="Completed Tasks"
                    value={completedTasks.length}
                    onClick={() => navigate("/completed-tasks")}
                />
            </div>

            <div className="mt-6">
                <Link to="/create">
                    <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300">
                        Create Task
                    </button>

                </Link>
            </div>

        </div>
    )
}

interface StartCardProps {
    title: string
    value: number
}
const StartCard: React.FC<StartCardProps & { onClick?: () => void }> = ({ title, value, onClick }) => {
    return (
        <div onClick={onClick} className="bg-gray-100 p-6 rounded shadow cursor-pointer">
            <h2 className="text-lg font-semi-bold text-gray-600">{title}</h2>
            <p className="text-3xl font-bold text-black">{value}</p>
        </div>
    )
}