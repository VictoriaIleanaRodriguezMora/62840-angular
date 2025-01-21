import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../../../shared/interfaces/students';
import { randomString } from '../../../../../shared/functions/randomString';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  standalone: false,
  styleUrl: './students-form.component.scss',
})
export class StudentsFormComponent {
  @Input() editingStudent: Student | null = null;
  @Output() saveStudent = new EventEmitter<Student>();
  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
    });
  }

  ngOnChanges() {
    if (this.editingStudent) {
      this.studentForm.patchValue(this.editingStudent);
    } else {
      this.studentForm.reset();
    }
  }

  onSubmit() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    const student = {
      ...this.editingStudent,
      ...this.studentForm.value,
      id: this.editingStudent?.id || randomString(8),
    };

    this.saveStudent.emit(student);
    this.studentForm.reset();
  }
}
