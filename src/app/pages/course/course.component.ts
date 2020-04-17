import { Component, OnInit } from "@angular/core";
import { CourseService } from "src/app/_services/course.service";
import { CourseModel } from "src/app/_models/course.model";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.scss"],
})
export class CourseComponent implements OnInit {
  /// Declear  variable
  courses: CourseModel[] = [];

  constructor(private _CourseService: CourseService) {}

  ngOnInit(): void {
    ////  Get all Posts
    this._CourseService.getAllCourses().subscribe((data: any) => {
      this.courses = data;
      console.log(data);
    });
  }
  onScroll() {
    console.log("scrolled!!");
  }
}
