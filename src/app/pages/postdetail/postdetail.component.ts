import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "src/app/_services/post.service";
import { PostModel } from "src/app/_models/post.model";
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { Subscription } from "rxjs";

@Component({
  selector: "app-postdetail",
  templateUrl: "./postdetail.component.html",
  styleUrls: ["./postdetail.component.scss"],
})
export class PostdetailComponent implements OnInit {
  deviceXs: boolean;
  deviceSm: boolean;
  deviceMd: boolean;
  deviceLg: boolean;
  deviceXl: boolean;
  medisub: Subscription;
  name = "";
  postdetail: any = "";

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _PostService: PostService,
    public _MediaObserver: MediaObserver
  ) {}

  ngOnInit(): void {
    this.name = this._ActivatedRoute.snapshot.params.name;
    console.log(this.name);
    this._PostService.getpostdetail(this.name).subscribe((data) => {
      this.postdetail = data;
      console.log(this.postdetail);
    });

    //
    this.medisub = this._MediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.deviceXs = result.mqAlias === "xs" ? true : false;
        this.deviceSm = result.mqAlias === "sm" ? true : false;
        this.deviceMd = result.mqAlias === "md" ? true : false;
        this.deviceLg = result.mqAlias === "lg" ? true : false;
        this.deviceXl = result.mqAlias === "xl" ? true : false;
      }
    );
  }
}
