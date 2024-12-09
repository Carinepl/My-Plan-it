import { Link } from "react-router-dom"
import { Button } from "../components/common/Button"
import { MainTitle } from "../components/common/MainTitle"
import { useTaskContext } from "../context/useTaskContext"
import { TaskModel, TaskStatus } from "../model/TaskModel"

export const HomePage: React.FC = () => {
    const { tasks } = useTaskContext()

    const completedTasks = tasks.filter((task:TaskModel) => task.getStatus() === TaskStatus.DONE)
    
    return (
        <div className="space-y-6">
            <MainTitle title="Welcome to PlanIt" />
            <p className="text-xl text-gray-700">Your personal task management system</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 shadow-md rounded">
                <StartCard title="Total Tasks" value={tasks.length} />
                <StartCard title="Completed Tasks" value={completedTasks.length} />
            </div>

            <div className="mt-6">
                <Link to="/create">
                    <Button variant="primary">
                        Create Task
                    </Button>
                </Link>
            </div>

        </div>
    )
}

interface StartCardProps {
    title: string
    value: number
}
const StartCard: React.FC<StartCardProps> = ({ title, value }) => {
    return (
        <div className="bg-gray-100 p-6 rounded shadow">
            <h2 className="text-lg font-semi-bold text-gray-500">{title}</h2>
            <p className="text-3xl font-bold text-black">{value}</p>
        </div>
    )
}