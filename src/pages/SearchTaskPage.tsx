import React, { useState } from "react";
import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";
import { MainTitle } from "../components/common/MainTitle";
import { Task } from "../components/task/Task";
import { TaskModel } from "../model/TaskModel";
import { useTaskContext } from "../context/useTaskContext";

export const SearchTaskPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResults, setSearchResults] = useState<TaskModel[]>([]);

    const taskContext = useTaskContext();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };


    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const filterTasks = taskContext.tasks.filter((task: TaskModel) =>
            task.getSummary().toLowerCase().includes(searchTerm.toLowerCase())
        );


        setSearchResults(filterTasks);
    };



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
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </div>
            </form>


            <div className="space-y-3">
                {searchResults.length > 0 ? (
                    searchResults.map((task) => (
                        <Task key={task.getId()} task={task} />
                    ))
                ) : (
                    <p>No tasks found</p>
                )}
            </div>
        </div>
    );
};
