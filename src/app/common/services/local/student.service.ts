import {Injectable, Inject}    from '@angular/core';
import {Jsonp, URLSearchParams, Response, Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {Student} from "../../interfaces/student.interface";

@Injectable()
export class StudentService {

  constructor(private http: Http, @Inject('api') private API) { }

  findStudents() {
    const endPoint = 'students';

    return this.http
      .get(this.API + endPoint)
      .map(response => <string[]> response.json());
  }

  findStudentById(id: string) {
    const endPoint = `students/${id}`;

    return this.http
      .get(this.API + endPoint)
      .map(response => <Student> response.json())
      .catch((error: Response) => Observable.throw(error.json()));

  }

  saveStudent(student: Student) {
    const endPoint = `students`;

    return this.http
      .post(this.API + endPoint, student)
      .map(response => <Student> response.json())
      .catch((error: Response) => Observable.throw(error.json()));

  }

  updateStudent(student: Student) {
    const endPoint = `students/${student.id}`;

    return this.http
      .put(this.API + endPoint, student)
      .map(response => <Student> response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteStudent(studentId) {
    const endPoint = `students/${studentId}`;

    return this.http
      .delete(this.API + endPoint)
      .map(response => <Student> response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
