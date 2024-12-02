import { TaskStatus, TypeProps } from "../model/TaskModel";

export const INITIAL_TASKS = [
    {
        id: "b6ad902b-7943-4235-bc64-b2b6681e505a",
        title: "Task 19",
        description: "This is a description for a bug task.",
        reporter: "Reporter 7",
        type: TypeProps.EPIC,
        status: TaskStatus.OPEN,
    },
    {
        id: "ebdea946-44d4-4234-8818-d21c361d4bd1",
        title: "Task 63",
        description: "This is a description for a feature task.",
        reporter: "Reporter 9",
        type: TypeProps.TASK,
        status: TaskStatus.IN_PROGRESS,
    },
    {
        id: "5882868a-e95a-4599-8c4c-21dd6fcce592",
        title: "Task 72",
        description: "This is a description for a improvement task.",
        reporter: "Reporter 3",
        type: TypeProps.SUB_TASK,
        status: TaskStatus.UNDER_REVIEW,
    },
    {
        id: "1f42299f-bcc1-42b4-bf17-08b1db3c77de",
        title: "Task 45",
        description: "This is a description for a bug task.",
        reporter: "Reporter 6",
        type: TypeProps.BUG,
        status: TaskStatus.DONE,
    },
    {
        id: "4db41649-405d-497f-b99d-3a40311bef37",
        title: "Task 6",
        description: "This is a description for a research task.",
        reporter: "Reporter 8",
        type: TypeProps.TASK,
        status: TaskStatus.OPEN,
    },
];
