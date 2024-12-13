import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MainTitle } from "../components/common/MainTitle"
import { Label } from "../components/common/Label"
import { Input } from "../components/common/Input"
import { TypeProps } from "../model/TaskModel"
import { useApi } from "../services/useApi"
import { toast } from "sonner"

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


    const useReporters = [
        "Alan Maxwell",
        "Lucas Granjense",
        "Wesley Ximenes",
        "Carine Lima",
        "Flavio Montoril",
        "Maria Rita",
        "Mathues Monteiro"
    ];

    const useAssignee = [
        {value:"Alan Maxwell"},
        {value:"Lucas Granjense"},
        {value:"Wesley Ximenes"},
        {value:"Carine Lima"},
        {value:"Flavio Montoril"},
        {value:"Maria Rita"},
        {value:"Mathues Monteiro"}
    ];

    const typesTasks = [
        { value: "TASK" },
        { value: "BUG" },
        { value: "EPIC" },
        { value: "SUB_TASK" }
    ]




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
            toast.success('Task created successfully!', {
                style: {
                    backgroundColor: '#3498db',
                    color: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                },
            });

            if (response.status === 201) {
                navigate('/tasks')
            } else {
                window.alert('Error to create task')
            }
        } catch (error) {
            toast.error('Failed to create tarsk!');
        }


    }

    return (
        <div className="space-y-6">
            <MainTitle title="Create New Task" />
            <form onSubmit={handleSubmit} className="space-y-4 bg-blue-50 p-7 rounded shadow">
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
                    <select id="type"
                        name="type"
                        className="...">
                            {/* MEU CÓDIGO */}
                        {typesTasks.map(type => (
                            <option key={type.value} value={type.value}>
                                {type.value}
                            </option>
                        ))}


                    </select>
                </div>


                <div>
                    <Label text="Reporter" htmlFor="reporter" />
                    {/* MEU CÓDIGO */}
                    <select id="reporter" name="reporter" className="...">
                        {useReporters.map(reporter => (
                            <option key={reporter} value={reporter}>{reporter}</option>
                        ))}
                    </select>

                </div>

                <div>
                    <Label text="Assignee" htmlFor="assignee" />
                    {/* MEU CÓDIGO */}
                    <select id="assignee" name="assignee" className="...">
                        {useAssignee.map(assignee => (
                            <option key={assignee.value} value={assignee.value}>{assignee.value}</option>
                        ))}
                    </select>

                </div>

                <div className="flex justify-end">
                    <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700
                     hover:to-blue-500 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300">
                        Create Task
                    </button>
                </div>

            </form>
        </div>
    )
}
