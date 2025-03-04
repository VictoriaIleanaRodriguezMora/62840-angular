import { Course } from "./courses";
import { Student } from "./students";

export interface Enrollment {
  id: string;
  studentId: string;
  courseId: string;
  course?: Course;
  student?: Student;
}