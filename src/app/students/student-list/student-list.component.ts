import { Component, OnInit } from '@angular/core';
import {EventEmitter} from "@angular/common/src/facade/async";
import {Student} from "../../common/interfaces/student.interface";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  inputs: ['students', 'selectedStudent'],
  outputs: ['showStudentDetail', 'deleteStudentDetail']
})
export class StudentListComponent implements OnInit {

  private students;
  private selectedStudent;
  deleteStudentDetail: EventEmitter<number> = new EventEmitter<number>();
  showStudentDetail: EventEmitter<Student> = new EventEmitter<Student>();

  constructor() { }

  ngOnInit() {
  }

  handleDefaultEvent(event){
    event.preventDefault();
    event.stopPropagation();
  }

  showDetail(event, student){
    this.handleDefaultEvent(event);
    this.showStudentDetail.emit(student);
  }

  deleteDetail(event, id){
    this.handleDefaultEvent(event);
    this.deleteStudentDetail.emit(id);
  }


}
