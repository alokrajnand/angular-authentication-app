import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { UsersService } from "../../_services/users.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  //Input the the screen size from the default component
  @Input() deviceMd: boolean;
  @Input() deviceSm: boolean;
  @Input() deviceXs: boolean;
  @Input() deviceLg: boolean;

  constructor(public _UsersService: UsersService) {}

  ngOnInit(): void {}

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }
}
