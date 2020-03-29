import { Injectable } from "@angular/core";
import { HttpClientModule,HttpClient } from "@angular/common/http";
import { UsersModel } from "../_models/users.model";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  register(user: UsersModel) {
    return this.http.post("http://127.0.0.1:8000/api/register/", user);
  }
}
