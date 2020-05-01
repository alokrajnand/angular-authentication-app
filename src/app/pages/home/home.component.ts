import { Component, OnInit } from "@angular/core";
import { PostService } from "src/app/_services/post.service";
import { PostModel } from "src/app/_models/post.model";
import { CourseService } from "src/app/_services/course.service";
import { CourseModel } from "src/app/_models/course.model";

export interface Tile {
  color: string;
  text: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  posts: PostModel[] = [];
  courses: CourseModel[] = [];
  constructor(
    private _PostService: PostService,
    private _CourseService: CourseService
  ) {}

  ngOnInit(): void {
    ////  Get all Posts
    this._PostService.getAllPost().subscribe((data: any) => {
      this.posts = data;
      console.log(data);
    });

    ////  Get all Posts
    this._CourseService.getAllCourses().subscribe((data: any) => {
      this.courses = data;
      console.log(data);
    });
  }
}
