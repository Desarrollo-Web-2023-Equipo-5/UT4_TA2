import { Task } from "./task.interface";

export interface User {
    id?: string;
    name: string;
    email: string;
    password: string;
    tasks?: Task[];
}