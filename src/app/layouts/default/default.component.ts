import { Component, OnInit, OnDestroy } from "@angular/core";
import { UsersService } from "src/app/_services/users.service";
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { Subscription } from "rxjs";

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"],
})
export class DefaultComponent implements OnInit, OnDestroy {
  sideBarOpen: boolean;
  sideBar: Subscription;
  medisub: Subscription;
  deviceXs: boolean;
  deviceSm: boolean;
  deviceMd: boolean;
  deviceLg: boolean;
  mode = "";

  constructor(
    public _UsersService: UsersService,
    public _MediaObserver: MediaObserver
  ) {}

  ngOnInit() {
    this.medisub = this._MediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.deviceXs = result.mqAlias === "xs" ? true : false;
        this.deviceSm = result.mqAlias === "sm" ? true : false;
        this.deviceMd = result.mqAlias === "md" ? true : false;
        this.deviceLg = result.mqAlias === "lg" ? true : false;
        this.deviceLg = result.mqAlias === "xl" ? true : false;
      }
    );

    this.sideBar = this._MediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        if ((this.sideBarOpen = result.mqAlias === "xs")) {
          this.sideBarOpen = false;
          this.mode = "over";
        } else if ((this.sideBarOpen = result.mqAlias === "sm")) {
          this.sideBarOpen = false;
          this.mode = "over";
        } else if ((this.sideBarOpen = result.mqAlias === "md")) {
          this.sideBarOpen = true;
          this.mode = "side";
        } else if ((this.sideBarOpen = result.mqAlias === "lg")) {
          this.sideBarOpen = true;
          this.mode = "side";
        } else {
          this.sideBarOpen = true;
          this.mode = "side";
        }
      }
    );
  }

  ngOnDestroy() {
    this.medisub.unsubscribe();
  }

  sideBarToggler(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
