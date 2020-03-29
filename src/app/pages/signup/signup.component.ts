import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { UsersModel } from "../../_models/users.model";
import { Router } from "@angular/router";
import { UsersService } from "../../_services/users.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})

//
export class SignupComponent implements OnInit {
  //assign variable for the user model and form group
  users: UsersModel = new UsersModel();
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService
  ) {}

  ngOnInit() {
    //this is required for the form group
    this.signUpForm = this.formBuilder.group({
      user_name: [
        this.users.user_name,
        [Validators.required, Validators.maxLength(7)]
      ],
      phone_number: [this.users.phone_number, Validators.required],
      name: [this.users.name, Validators.required],
      email_address: [this.users.email_address, Validators.required],
      date_of_birth: [this.users.date_of_birth, Validators.required],
      password: [this.users.password, Validators.required]
    });
  }

  // this is for the vialidation and showing error massage
  get user_name(): any {
    return this.signUpForm.get("user_name");
  }

  // function triggered on the click of submit button
  onSubmit() {
    console.log(this.signUpForm.value);

    // stop here if sign up form is invalid
    if (this.signUpForm.invalid) {
      return;
    }
    // If the sign up form is valid do the follwing

    this.userService
      .register(this.signUpForm.value)
      .pipe(first())
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }
}
