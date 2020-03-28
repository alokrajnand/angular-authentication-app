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

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "posts", component: PostsComponent }
    ]
  },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent },
  { path: "forgetpassword", component: ForgetpasswordComponent },
  { path: "resetpassword", component: ResetpasswordComponent },
  { path: "authresetpassword", component: RestpasswordauthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
