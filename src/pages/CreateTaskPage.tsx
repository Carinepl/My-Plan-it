import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MainTitle } from "../components/common/MainTitle"
import { Label } from "../components/common/Label"
import { Input } from "../components/common/Input"
import { Button } from "../components/common/Button"
import { TypeProps } from "../model/TaskModel"
import { useApi } from "../services/useApi"

interface TaskFormDataProps {
    summary: string
    description: string
    type: TypeProps
    reporter: string
    assignee?: string
}
export const CreateTaskPage: React.FC = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<TaskFormDataProps>({
        summary: '',
        description: '',
        type: TypeProps.TASK,
        reporter: 'Alan Maxwell',
        assignee: ''
    })
    const api = useApi()

    const handleInputTaskChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await api.createTask(formData)
            if (response.status === 201) {
                navigate('/tasks')
            } else {
                window.alert('Error to create task')
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="space-y-6">
            <MainTitle title="Create New Task" />
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
                <div>
                    <Label text="Summary" htmlFor="summary" />
                    <Input
                        type="text"
                        id="summary"
                        name="summary"
                        value={formData.summary}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        onChange={handleInputTaskChange}
                        required
                    />
                </div>

                <div>
                    <Label text="Description" htmlFor="description" />
                    <textarea
                        id="description"
                        name="description"
                        rows={3}
                        value={formData.description}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        onChange={handleInputTaskChange}
                        required
                    />
                </div>

                <div>
                    <Label text="Type" htmlFor="type" />
                    <select
                        id="type"
                        name="type"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        onChange={handleInputTaskChange}
                        value={formData.type}
                        required
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
                        required
                        value={formData.reporter}
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
                        value={formData.assignee}
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
                <div className="flex justify-end">
                    <Button type="submit" variant="primary">
                        Create Task
                    </Button>
                </div>

            </form>
        </div>
    )
}
