import { Component, OnInit } from "@angular/core";
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { CourseService } from "src/app/_services/course.service";

@Component({
  selector: "app-coursedetail",
  templateUrl: "./coursedetail.component.html",
  styleUrls: ["./coursedetail.component.scss"],
})
export class CoursedetailComponent implements OnInit {
  deviceXs: boolean;
  deviceSm: boolean;
  deviceMd: boolean;
  deviceLg: boolean;
  deviceXl: boolean;
  medisub: Subscription;
  name = "";
  coursedetail: any = "";

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _CourseService: CourseService,
    public _MediaObserver: MediaObserver
  ) {}

  ngOnInit(): void {
    this.name = this._ActivatedRoute.snapshot.params.name;
    console.log(this.name);
    this._CourseService.getcoursedetail(this.name).subscribe((data) => {
      this.coursedetail = data;
      console.log(this.coursedetail);
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
