import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../../common/interfaces/student.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  private sub:any;
  private student = {};
  complexForm : FormGroup;

  constructor(private route: ActivatedRoute, @Inject('student') private studentService, private router: Router, private fb: FormBuilder) {
    this.complexForm = fb.group({
      'name' : [null, Validators.compose([Validators.required, Validators.minLength(5)])]
    })
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let studentId = params['id'];
      this.studentService.findStudentById(studentId)
        .subscribe(student => this.student = student);
    });
  }

  updateStudentDetails(){
    this.studentService.updateStudent(this.student)
      .subscribe(res => this.router.navigate(['/students']));
  }

  createStudentsDetails(){
    this.studentService.saveStudent(this.student)
      .subscribe(res => this.router.navigate(['/students']));
  }

  onSubmit(id){
    if(parseInt(id)){
      this.updateStudentDetails();
    }else{
      this.createStudentsDetails();
    }
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }


}
