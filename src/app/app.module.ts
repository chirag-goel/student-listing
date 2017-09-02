import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./home/home.module";
import {NavModule} from "./common/widgets/nav/nav.module";
import {StudentsModule} from "./students/students.module";
import {StudentService} from "./common/services/local/student.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    NavModule,
    HomeModule,
    StudentsModule
  ],
  providers: [
    {provide: 'student', useClass: StudentService},
    {provide: 'api', useValue: 'http://localhost:8080/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
