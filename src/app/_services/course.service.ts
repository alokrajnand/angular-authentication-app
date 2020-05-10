import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
  HttpHeaders,
} from "@angular/common/http";
import { CourseModel } from "../_models/course.model";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  base_url = "http://127.0.0.1:8000/api/courses/";

  constructor(private _HttpClient: HttpClient) {}

  getAllCourses(): Observable<CourseModel[]> {
    return this._HttpClient.get<CourseModel[]>(this.base_url);
  }

  getcoursedetail(name: String): Observable<CourseModel> {
    return this._HttpClient.get<CourseModel>(this.base_url + name);
  }
}
