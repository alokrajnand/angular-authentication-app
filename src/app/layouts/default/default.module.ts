import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { DashboardComponent } from "../../modules/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { PostsComponent } from "src/app/modules/posts/posts.component";
import { SharedModule } from "src/app/shared/shared.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SignupComponent } from "../../modules/signup/signup.component";
import { SigninComponent } from "../../modules/signin/signin.component";

import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class DefaultModule {}
