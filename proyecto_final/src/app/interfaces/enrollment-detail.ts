import { Course } from "./courses";
import { Enrollment } from "./enrollment";
import { Student } from "./students";
import { EntityState } from "@ngrx/entity"; // ✅ Agregar esta importación si usas NgRx Entity

export interface EnrollmentDetail {
  id: string;
  student: Student;
  course: Course;
  error: unknown;
  enrollmentDetail: Enrollment | null;
}

export interface EnrollmentState extends EntityState<Enrollment> {
  error: string | null;
  enrollmentDetail: Enrollment | null;
}