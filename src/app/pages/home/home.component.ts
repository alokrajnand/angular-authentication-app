import { Component, OnInit } from "@angular/core";

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
  constructor() {}

  ngOnInit(): void {}
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
