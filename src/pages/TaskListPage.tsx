import { useState } from "react";
import { MainTitle } from "../components/common/MainTitle";
import { TaskList } from "../components/task/TaskList";
import { TabTask } from "../components/task/TabTask";
import { useTaskContext } from "../context/useTaskContext";
import { TypeProps } from "../model/TaskModel";

export const TaskListPage: React.FC = () => {
    const { tasks } = useTaskContext()
    const [filter, setFilter] = useState<TypeProps | "ALL">("ALL");

    const filteredTasks = filter === "ALL" ? tasks : tasks.filter((task) => task.getType() === filter);

    const handleToggleFilter = (type: TypeProps | "ALL") => setFilter(type);

    return (
        <div className="space-y-6">
            <MainTitle title="All Tasks" />
            <TabTask onClick={handleToggleFilter} value={filter} />
            <TaskList tasks={filteredTasks} />
        </div>
    )
}