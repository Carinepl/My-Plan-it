export enum TypeProps {
    TASK = "TASK",
    BUG = "BUG",
    EPIC = "EPIC",
    SUB_TASK = "SUB_TASK",
}

export enum TaskStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    UNDER_REVIEW = "UNDER_REVIEW",
    DONE = "DONE",
}

export interface TaskProps {
    id: string;
    description: string;
    summary: string;
    reporter: string;
    type: TypeProps;
    status: TaskStatus;
    assignee?: string;
}

export class TaskModel {
    private id: string;
    private summary: string;
    private description: string;
    private reporter: string;
    private type: TypeProps;
    private status: TaskStatus;
    private assignee?: string;

    constructor(data:TaskProps) {
        this.id = data.id;
        this.summary = data.summary;
        this.description = data.description;
        this.reporter = data.reporter;
        this.type = data.type;
        this.status = data.status;
        this.assignee = data.assignee || "";
    }

    static build(data:TaskProps): TaskModel {
        return new TaskModel(data);
    }

    getId(): string {
        return this.id;
    }
    getSummary(): string {
        return this.summary;
    }
    getDescription(): string {
        return this.description;
    }
    getReporter(): string {
        return this.reporter;
    }
    getType(): TypeProps {
        return this.type;
    }
    getStatus(): TaskStatus {
        return this.status;
    }
    getAssignee(): string | undefined {
        return this.assignee;
    }
    setSummary(summary: string): void {
        this.summary = summary;
    }
    setDescription(description: string): void {
        this.description = description;
    }
    setReporter(reporter: string): void {
        this.reporter = reporter;
    }
    setType(type: TypeProps): void {
        this.type = type;
    }
    setStatus(status: TaskStatus): void {
        this.status = status;
    }
    setAssignee(assignee: string): void {
        this.assignee = assignee;
    }
    
}