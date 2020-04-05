import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UsersService } from "../_services/users.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private _UsersService: UsersService, private _Router: Router) {}
  canActivate(): boolean {
    if (this._UsersService.loggedIn()) {
      return true;
    } else {
      this._Router.navigate(["/signin"]);
      return false;
    }
  }
}
