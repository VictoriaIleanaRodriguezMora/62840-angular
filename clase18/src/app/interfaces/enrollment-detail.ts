import { Course } from "./courses";
import { Student } from "./students";
export interface EnrollmentDetail {
    id: string;
    student: Student;
    course: Course;
  }
  