import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lesson",
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.scss"],
})
export class LessonComponent implements OnInit {
  test = "test123";
  constructor() {}

  ngOnInit(): void {}
}
