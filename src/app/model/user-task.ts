import { TaskStatus } from "./enums/task-status";

export interface UserTask {
    id: number;
    title: string;
    description: string;
    createdByUserId: number;
    creationTime: Date;
    dueDate: Date;
    userId: number;
    status: TaskStatus;
    userName?: string;
    categories?: number[];
}

export interface Category {
    id: number;
    name: string;
}