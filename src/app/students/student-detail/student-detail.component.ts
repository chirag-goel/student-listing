import { Component, OnInit } from '@angular/core';
import {EventEmitter} from "@angular/common/src/facade/async";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
  inputs: ['selectedStudent'],
  outputs: ['closeStudentDetail']
})
export class StudentDetailComponent implements OnInit {

  private selectedStudent;
  closeStudentDetail: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  closeDetail() {
    this.closeStudentDetail.next(true);
  }

}
