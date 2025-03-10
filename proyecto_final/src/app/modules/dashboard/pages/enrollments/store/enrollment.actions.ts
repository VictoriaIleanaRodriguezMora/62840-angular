import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Enrollment } from '../../../../../interfaces/enrollment';

export const EnrollmentActions = createActionGroup({
  source: 'Enrollment',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: Enrollment[] }>(),
    'Load Enrollments Failure': props<{ error: unknown }>(),

    'Create Enrollment': props<{ data: Omit<Enrollment, 'id'> }>(),
    'Create Enrollment Success': props<{ data: Enrollment }>(),
    'Create Enrollment Failure': props<{ error: unknown }>(),

    'Update Enrollment': props<{ id: string; data: Partial<Enrollment> }>(),
    'Update Enrollment Success': props<{ data: Enrollment }>(),
    'Update Enrollment Failure': props<{ error: unknown }>(),

    'Delete Enrollment': props<{ id: string }>(),
    'Delete Enrollment Success': props<{ id: string }>(),
    'Delete Enrollment Failure': props<{ error: unknown }>(),

    'Load Enrollment Detail': props<{ id: string }>(),
    'Load Enrollment Detail Success': props<{ data: Enrollment }>(),
    'Load Enrollment Detail Failure': props<{ error: unknown }>(),
    'Clear Enrollment Detail': emptyProps(), // ✅ Agregar esta acción

    'Reset State': emptyProps(),
  },
});
