import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UsersModel } from "../_models/users.model";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient, private _Router: Router) {}

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
    this._Router.navigate(["/"]);
  }

  ///logged In method for authenticaion

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error.non_field_errors || "server Error");
  }
}
