import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { DefaultComponent } from "./layouts/default/default.component";
import { PostsComponent } from "./modules/posts/posts.component";
import { SignupComponent } from "./modules/signup/signup.component";
import { SigninComponent } from "./modules/signin/signin.component";

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
  { path: "signin", component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
