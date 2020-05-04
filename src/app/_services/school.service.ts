import { Injectable } from "@angular/core";
import { SchoolModel } from "../_models/school.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SchoolService {
  base_school_url = "http://127.0.0.1:8000/api/schools/";

  constructor(private http: HttpClient) {}

  getallschool(): Observable<SchoolModel[]> {
    return this.http.get<SchoolModel[]>(this.base_school_url);
  }

  getschooldetail(name: String): Observable<SchoolModel> {
    return this.http.get<SchoolModel>(this.base_school_url + name);
  }
}
