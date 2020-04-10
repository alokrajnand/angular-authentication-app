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
  constructor(private _HttpClient: HttpClient) {}

  getAllCourses(): Observable<CourseModel[]> {
    return this._HttpClient.get<CourseModel[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
  }
}
