import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { DefaultComponent } from "./layouts/default/default.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { SigninComponent } from "./pages/signin/signin.component";
import { ForgetpasswordComponent } from "./pages/forgetpassword/forgetpassword.component";
import { ResetpasswordComponent } from "./pages/resetpassword/resetpassword.component";
import { RestpasswordauthComponent } from "./pages/restpasswordauth/restpasswordauth.component";
import { HomeComponent } from "./pages/home/home.component";
import { AuthGuard } from "./_authguard/auth.guard";
import { CourseComponent } from "./pages/course/course.component";
import { PostdetailComponent } from "./pages/postdetail/postdetail.component";
import { SchooldetailComponent } from "./pages/schooldetail/schooldetail.component";
import { SchoolComponent } from "./pages/school/school.component";
import { CoursedetailComponent } from "./pages/coursedetail/coursedetail.component";
import { LessonComponent } from "./pages/lesson/lesson.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      { path: "", component: HomeComponent },
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      { path: "posts", component: PostsComponent },
      { path: "posts/:name", component: PostdetailComponent },

      { path: "courses", component: CourseComponent },
      { path: "courses/:name", component: CoursedetailComponent },
      { path: "lesson/:name", component: LessonComponent },
      { path: "schools", component: SchoolComponent },
      { path: "schools/:name", component: SchooldetailComponent },
      { path: "signup", component: SignupComponent },
      { path: "signin", component: SigninComponent },
    ],
  },

  { path: "forgetpassword", component: ForgetpasswordComponent },
  { path: "resetpasswordauth", component: RestpasswordauthComponent },
  { path: "resetpassword", component: ResetpasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
