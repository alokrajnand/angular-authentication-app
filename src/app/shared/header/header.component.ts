import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { UsersService } from "../../_services/users.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(public _UsersService: UsersService) {}

  ngOnInit(): void {}

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }
}
