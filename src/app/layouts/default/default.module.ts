import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { PostsComponent } from "src/app/pages/posts/posts.component";
import { SharedModule } from "src/app/shared/shared.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SignupComponent } from "../../pages/signup/signup.component";
import { SigninComponent } from "../../pages/signin/signin.component";
import { ForgetpasswordComponent } from "../../pages/forgetpassword/forgetpassword.component";
import { ResetpasswordComponent } from "../../pages/resetpassword/resetpassword.component";
import { RestpasswordauthComponent } from "../../pages/restpasswordauth/restpasswordauth.component";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";

import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    SignupComponent,
    SigninComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    RestpasswordauthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule {}
