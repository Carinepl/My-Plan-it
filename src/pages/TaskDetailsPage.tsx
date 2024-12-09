import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../components/common/Button"
import { Input } from "../components/common/Input"
import { Label } from "../components/common/Label"
import { MainTitle } from "../components/common/MainTitle"
import { useTaskContext } from "../context/useTaskContext"
import { TaskStatus, TypeProps } from "../model/TaskModel"
import { useApi } from "../services/useApi"


type TaskFormProps = {
    summary: string
    description: string
    type: TypeProps
    reporter: string
    assignee: string
    status: TaskStatus
}
export const TaskDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const navigate = useNavigate()
    const { tasks } = useTaskContext()


    const task = tasks.find((task) => task?.getId() === id)

    const [taskForm, setTaskForm] = useState<TaskFormProps>({
        summary: task?.getSummary() ?? "",
        description: task?.getDescription() ?? "",
        type: task?.getType() ?? TypeProps.TASK,
        reporter: task?.getReporter() ?? "",
        assignee: task?.getAssignee() ?? "",
        status: task?.getStatus() ?? TaskStatus.OPEN
    })
    const api = useApi()

    if (!task) {
        return <p>Task Not Found</p>
    }

    const handleInputTaskChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        console.log('name', name, 'value', value)
        setTaskForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleCancel = () => {
        setIsEditing(false)
    }

    const handleDelete = async () => {


        const response = await api.deleteTask(task.getId())
        if (response.status === 200 || response.status === 204) {

            const remove = tasks.findIndex((task) => task.getId() === id)
            tasks.splice(remove, 1);
            navigate('/tasks');
        } ''

    }

    const handleSumit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('FormTask', taskForm)
        try {
            const response = await api.editTask(task.getId(), taskForm)
            if (response.status === 200) {
                task.setSummary(taskForm.summary)
                task.setDescription(taskForm.description)
                task.setType(taskForm.type)
                task.setReporter(taskForm.reporter)
                task.setAssignee(taskForm.assignee)
                task.setStatus(taskForm.status)
            }
        } catch (error) {
       
        }

        setIsEditing(false)

    }

    return (
        <div className="space-y-6">
            <MainTitle title="Task Details" />
            <div className="bg-white p-6 rounded shadow">
                {isEditing ? (
                    <form className="space-y-4" onSubmit={handleSumit}>
                        <div>

                            <Label text="Summary" htmlFor="summary" />
                            <Input
                                type="text"
                                id="summary"
                                name="summary"
                                value={taskForm?.summary}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                onChange={handleInputTaskChange}
                            />
                        </div>

                        <div>
                            <Label text="Description" htmlFor="description" />
                            <textarea
                                id="description"
                                name="description"
                                rows={3}
                                value={taskForm?.description}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                onChange={handleInputTaskChange}
                            />
                        </div>

                        <div>
                            <Label text="Type" htmlFor="type" />
                            <select
                                id="type"
                                name="type"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                onChange={handleInputTaskChange}
                                value={taskForm?.type}
                            >
                                <option value="TASK">Task</option>
                                <option value="BUG">Bug</option>
                                <option value="EPIC">Epic</option>
                                <option value="SUB_TASK">Subtask</option>
                            </select>
                        </div>


                        <div>

                            <Label text="Reporter" htmlFor="reporter" />
                            <select
                                id="reporter"
                                name="reporter"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                onChange={handleInputTaskChange}
                                value={taskForm?.reporter}
                            >
                                <option value="Alan Maxwell">Alan Maxwell</option>
                                <option value="Lucas Granjense">Lucas Granjense</option>
                                <option value="Wesley Ximenes">Wesley Ximenes</option>
                                <option value="Carine Lima">Carine Lima</option>
                                <option value="Flavio Montoril">Flavio Montoril</option>
                                <option value="Maria Rita">Maria Rita</option>
                                <option value="Mathues Monteiro">Mathues Monteiro</option>

                            </select>
                        </div>

                        <div>

                            <Label text="Assignee" htmlFor="assignee" />
                            <select
                                id="assignee"
                                name="assignee"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                onChange={handleInputTaskChange}
                                value={taskForm?.assignee}
                            >
                                <option value=""></option>
                                <option value="Alan Maxwell">Alan Maxwell</option>
                                <option value="Lucas Granjense">Lucas Granjense</option>
                                <option value="Wesley Ximenes">Wesley Ximenes</option>
                                <option value="Carine Lima">Carine Lima</option>
                                <option value="Flavio Montoril">Flavio Montoril</option>
                                <option value="Maria Rita">Maria Rita</option>
                                <option value="Mathues Monteiro">Mathues Monteiro</option>

                            </select>
                        </div>


                        <div>

                            <Label text="Status" htmlFor="status" />
                            <select
                                id="status"
                                name="status"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                onChange={handleInputTaskChange}
                                value={taskForm?.status}
                            >
                                <option value={TaskStatus.OPEN}>{TaskStatus.OPEN}</option>
                                <option value={TaskStatus.IN_PROGRESS}>{TaskStatus.IN_PROGRESS}</option>
                                <option value={TaskStatus.UNDER_REVIEW}>{TaskStatus.UNDER_REVIEW}</option>
                                <option value={TaskStatus.DONE}>{TaskStatus.DONE}</option>

                            </select>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <Button
                                type="button"
                                onClick={handleCancel}
                                variant="secondary"
                            >
                                Cancel
                            </Button>
                            <Button type="submit" variant="primary" >
                                Save
                            </Button>
                        </div>
                    </form>
                ) : <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">{task?.getSummary()}</h2>
                    <p className="text-gray-600">{task?.getDescription()}</p>
                    <p>
                        <span className="font-semibold">Type:</span> {task?.getType()}
                    </p>
                    <p>
                        <span className="font-semibold">Status:</span>{' '}
                        <span
                            className={
                                `px-2 py-1 rounded
                              ${task?.getStatus() === TaskStatus.OPEN ? "bg-blue-100 text-blue-800" : ""}
                                    ${task?.getStatus() === TaskStatus.IN_PROGRESS ? "bg-yellow-100 text-yellow-800" : ""}
                                    ${task?.getStatus() === TaskStatus.UNDER_REVIEW ? "bg-purple-100 text-purple-800" : ""}
                                    ${task?.getStatus() === TaskStatus.DONE ? "bg-green-100 text-green-800" : ""}
                            `}>
                            {task?.getStatus()}
                        </span>
                    </p>
                    <div className="flex justify-end space-x-2">
                        <button
                            onClick={handleEdit}
                            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Edit
                        </button>
                        {
                            task?.getStatus() === TaskStatus.DONE ?
                                null :
                                <Button
                                    onClick={handleDelete}
                                    variant="danger"
                                >
                                    Delete
                                </Button>
                        }
                    </div>
                </div>}
            </div>
        </div>
    )
}