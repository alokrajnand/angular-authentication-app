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
import { CoursedetailComponent } from "../../pages/coursedetail/coursedetail.component";
import { LessonComponent } from "../../pages/lesson/lesson.component";
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
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatBadgeModule } from "@angular/material/badge";
import { MatChipsModule } from "@angular/material/chips";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatListModule } from "@angular/material/list";
// for HttpClient import:
import { LoadingBarHttpClientModule } from "@ngx-loading-bar/http-client";
// for Router import:
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
// for Core import:
import { LoadingBarModule } from "@ngx-loading-bar/core";

import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { SchoolComponent } from "../../pages/school/school.component";
import { SchooldetailComponent } from "../../pages/schooldetail/schooldetail.component";

import { NgxGalleryModule } from "ngx-gallery-9";

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
    SchoolComponent,
    SchooldetailComponent,
    CoursedetailComponent,
    LessonComponent,
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
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatChipsModule,
    MatListModule,
    FlexLayoutModule,
    ScrollingModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    InfiniteScrollModule,
    NgxGalleryModule,
  ],
})
export class DefaultModule {}
