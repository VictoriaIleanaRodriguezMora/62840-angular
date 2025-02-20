import { Professors } from "./professors";

export interface Course {
    id: string,
    name: string,
    professors?: Professors[]
}