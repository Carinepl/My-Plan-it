
import { TypeProps } from "../model/TaskModel";

export const buttonOptions = [
    { type: "ALL", label: "All" },
    { type: TypeProps.EPIC, label: "Epic" },
    { type: TypeProps.TASK, label: "Task" },
    { type: TypeProps.SUB_TASK, label: "Subtask" },
    { type: TypeProps.BUG, label: "Bug" },
];