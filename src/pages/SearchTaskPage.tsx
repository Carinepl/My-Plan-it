import React, { useState } from "react"
import { Button } from "../components/common/Button"
import { Input } from "../components/common/Input"
import { MainTitle } from "../components/common/MainTitle"
import { Task } from "../components/task/Task"
import { INITIAL_TASKS } from "../mock/initialTasks"
import { TaskModel, TaskProps } from "../model/TaskModel"


export const SearchTaskPage: React.FC = () => {

    const [initialTasks, setInitialTasks] = useState(INITIAL_TASKS)

    const [searchTerm, setSearchTerm] = useState<string>('')
    const [searchResults, setSearchResults] = useState<TaskProps[]>([]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    
    
    // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     const mockResults: Array<TaskProps> = [
    //         INITIAL_TASKS[0],
    //         INITIAL_TASKS[1],
    //         INITIAL_TASKS[2],
    //         INITIAL_TASKS[3],
    //         INITIAL_TASKS[4],

    //     ];

    //     setSearchResults(mockResults)
    // }
    
    return (
        <div className="space-y-6">
            <MainTitle title="Search Task" />
            <form className="space-y-4" onSubmit={handleSearch}>
                <div className="flex gap-3 items-center">
                    <Input
                        placeholder="Search task"
                        type="text"
                        onChange={handleSearchChange}
                        value={searchTerm}
                    />
                    <Button variant="primary" type="submit">Search</Button>
                </div>
            </form>
            <div className="space-y-4">
                {searchResults.map((task:TaskProps) => (
                    <Task key={task.id} task={task} />
                ))}
                {
                    searchResults.length === 0 && (
                        <p>No results found</p>
                    )
                }
              
            </div>
        </div>
    )
}