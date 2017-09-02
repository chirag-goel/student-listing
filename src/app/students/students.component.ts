import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {Student} from "../common/interfaces/student.interface";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];
  selectedStudent;

  constructor(@Inject('student') private studentService, private router: Router) { }

  ngOnInit() {
    this.studentService.findStudents()
      .subscribe(res => this.students = res);
  }

  deleteStudentDetail(studentId){
    console.log(studentId);
    this.studentService.deleteStudent(studentId)
      .subscribe(res =>
        this.students = this.students
          .filter(student => student.id != studentId));
  }

  showStudentDetail(student){
    this.selectedStudent = student;
  }

  closeStudentDetail(){
    this.selectedStudent = undefined;
  }
}
