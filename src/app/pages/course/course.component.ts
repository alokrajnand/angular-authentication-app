import { Component, OnInit } from "@angular/core";

export interface Tile {
  color: string;
  text: string;
}

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.scss"],
})
export class CourseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.tiles);
  }
  tiles: Tile[] = [
    { text: "One", color: "lightblue" },
    { text: "Two", color: "lightgreen" },
    { text: "Three", color: "lightpink" },
    { text: "Four", color: "#DDBDF1" },
    { text: "Five", color: "lightblue" },
    { text: "Six", color: "lightgreen" },
    { text: "Seven", color: "lightpink" },
  ];
}
