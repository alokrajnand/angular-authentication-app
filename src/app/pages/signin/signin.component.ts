import { Component, OnInit } from "@angular/core";
import { UsersModel } from "src/app/_models/users.model";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { UsersService } from "src/app/_services/users.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  users: UsersModel = new UsersModel();
  signInForm: FormGroup;
  public errorMsg = null;
  constructor(
    private _FormBuilder: FormBuilder,
    private _UserService: UsersService,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    //this is required for the form group
    this.signInForm = this._FormBuilder.group({
      username: [
        this.users.username,
        [Validators.required, Validators.maxLength(7)],
      ],
      password: [this.users.password, Validators.required],
    });
  }
  // this is for the vialidation and showing error massage
  get username(): any {
    return this.signInForm.get("username");
  }
  // function triggered on the click of submit button
  onSubmit() {
    console.log(this.signInForm.value);
    // stop here if sign In form is invalid
    if (this.signInForm.invalid) {
      return;
    }
    // If the sign IN form is valid do the follwing
    this._UserService
      .login(this.signInForm.value)
      .pipe(first())
      .subscribe(
        (response: any) => {
          console.log(response);
          localStorage.setItem("token", response.token);
          localStorage.setItem("name", response.name);
          this._Router.navigate(["/dashboard"]);
        },
        (error) => (this.errorMsg = error)
      );
  }
}
