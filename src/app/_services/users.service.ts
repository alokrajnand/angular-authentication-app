import { Injectable } from "@angular/core";
import {
  HttpClientModule,
  HttpClient,
  HttpErrorResponse,
} from "@angular/common/http";
import { UsersModel } from "../_models/users.model";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  // method register
  register(user: UsersModel) {
    return this.http.post("http://127.0.0.1:8000/api/register/", user);
  }

  ///method login
  login(user: UsersModel): Observable<UsersModel[]> {
    return this.http
      .post<UsersModel[]>("http://127.0.0.1:8000/api/login/", user)
      .pipe(catchError(this.errorHandler));
  }

  //method logout
  logout() {
    localStorage.removeItem("token");
  }

  ///logged In method for authenticaion

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error.non_field_errors || "server Error");
  }
}
