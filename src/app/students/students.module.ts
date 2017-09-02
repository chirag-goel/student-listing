import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import {StudentModule} from "./student/student.module";
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
    StudentModule
  ],
  declarations: [StudentsComponent, StudentDetailComponent, StudentListComponent]
})
export class StudentsModule { }
