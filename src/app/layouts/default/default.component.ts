import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/_services/users.service";

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"],
})
export class DefaultComponent implements OnInit {
  sideBarOpen = true;

  constructor(public _UsersService: UsersService) {}

  ngOnInit() {}

  sideBarToggler(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
