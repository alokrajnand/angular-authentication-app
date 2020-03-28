import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { UsersModel } from "../../_models/users.model";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})

//
export class SignupComponent implements OnInit {
  //assign variable
  users: UsersModel = new UsersModel();
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
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

  get user_name(): any {
    return this.signUpForm.get("user_name");
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
