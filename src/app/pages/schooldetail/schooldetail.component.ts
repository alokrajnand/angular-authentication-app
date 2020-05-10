import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
} from "ngx-gallery-9";
import { SchoolService } from "src/app/_services/school.service";
import {
  SchoolFeeModel,
  SchoolGalleryModel,
  SchoolFacilityModel,
} from "src/app/_models/school.model";
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { Subscription } from "rxjs";

@Component({
  selector: "app-schooldetail",
  templateUrl: "./schooldetail.component.html",
  styleUrls: ["./schooldetail.component.scss"],
})
export class SchooldetailComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  schoolgallery: NgxGalleryImage[];

  name = "";
  schooldetail: any = "";
  schoolfeedetail: SchoolFeeModel[] = [];
  galleryImages: SchoolGalleryModel[] = [];
  schoolfacility: any = "";

  /*  variable for screen size */
  deviceXs: boolean;
  deviceSm: boolean;
  deviceMd: boolean;
  deviceLg: boolean;
  deviceXl: boolean;
  medisub: Subscription;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _SchoolService: SchoolService,
    public _MediaObserver: MediaObserver
  ) {}

  ngOnInit(): void {
    /**** School detail data  */
    this.name = this._ActivatedRoute.snapshot.params.name;
    this._SchoolService.getschooldetail(this.name).subscribe((data) => {
      this.schooldetail = data;
      console.log(this.schooldetail);
    });

    /**** School detail data  process ends here */

    /**** School fee detail data  process ends here */
    this.name = this._ActivatedRoute.snapshot.params.name;
    this._SchoolService.getallschoolfee(this.name).subscribe((data: any) => {
      this.schoolfeedetail = data;
      console.log(this.schoolfeedetail);
    });
    /**** School fee detail data  process ends here */

    /**** School facility detail data  process ends here */

    /**** School facility detail data  process ends here */
    this.name = this._ActivatedRoute.snapshot.params.name;
    this._SchoolService.getallschoolfacility(this.name).subscribe((data) => {
      this.schoolfacility = data;
      console.log(this.schoolfacility);
    });

    /***** The gallary section  */

    //****  Get school gallery data*/
    this.name = this._ActivatedRoute.snapshot.params.name;
    this._SchoolService
      .getallschoolGallery(this.name)
      .subscribe((data: any) => {
        this.galleryImages = data;
        console.log(this.galleryImages);
      });

    this.galleryOptions = [
      {
        width: "95%",
        height: "650px",
        thumbnailsColumns: 6,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true,
        thumbnailsRows: 2,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: "100%",
        height: "600px",
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
      },
    ];

    /*** Gallary section ends here */
    /*** code for the screen size variable section ends here */
    this.medisub = this._MediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.deviceXs = result.mqAlias === "xs" ? true : false;
        this.deviceSm = result.mqAlias === "sm" ? true : false;
        this.deviceMd = result.mqAlias === "md" ? true : false;
        this.deviceLg = result.mqAlias === "lg" ? true : false;
        this.deviceXl = result.mqAlias === "xl" ? true : false;
      }
    );
  } /* end of ng oninit */
} /* end of component */
