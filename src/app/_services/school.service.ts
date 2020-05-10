import { Injectable } from "@angular/core";
import {
  SchoolModel,
  SchoolFeeModel,
  SchoolFacilityModel,
  SchoolGalleryModel,
} from "../_models/school.model";
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

  getallschoolfee(name: String): Observable<SchoolFeeModel> {
    return this.http.get<SchoolFeeModel>(this.base_school_url + "fee/" + name);
  }

  getallschoolfacility(name: String): Observable<SchoolFacilityModel> {
    return this.http.get<SchoolFacilityModel>(
      this.base_school_url + "facilities/" + name
    );
  }

  getallschoolGallery(name: String): Observable<SchoolGalleryModel> {
    return this.http.get<SchoolGalleryModel>(
      this.base_school_url + "gallery/" + name
    );
  }
}
