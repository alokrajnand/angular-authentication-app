import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/****************************************
 * Component Import
 * **************************************/

import { PostsComponent } from "src/app/pages/posts/posts.component";

import { MatSidenavModule } from "@angular/material/sidenav";
import { SignupComponent } from "../../pages/signup/signup.component";
import { SigninComponent } from "../../pages/signin/signin.component";
import { ForgetpasswordComponent } from "../../pages/forgetpassword/forgetpassword.component";
import { ResetpasswordComponent } from "../../pages/resetpassword/resetpassword.component";
import { RestpasswordauthComponent } from "../../pages/restpasswordauth/restpasswordauth.component";
import { HomeComponent } from "../../pages/home/home.component";
import { CourseComponent } from "../../pages/course/course.component";
import { PostdetailComponent } from "../../pages/postdetail/postdetail.component";
/// The shared  module corrosponds to the shared component header , footer, sidebar
import { SharedModule } from "src/app/shared/shared.module";

/****************************************
 * Angular Material Component Import
 * **************************************/

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ScrollingModule } from "@angular/cdk/scrolling";

import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    PostdetailComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    CourseComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    RestpasswordauthComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    FlexLayoutModule,
    ScrollingModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
  ],
})
export class DefaultModule {}
