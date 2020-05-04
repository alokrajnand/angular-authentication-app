import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
} from "ngx-gallery-9";
import { SchoolService } from "src/app/_services/school.service";

@Component({
  selector: "app-schooldetail",
  templateUrl: "./schooldetail.component.html",
  styleUrls: ["./schooldetail.component.scss"],
})
export class SchooldetailComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  name = "";
  schooldetail: any = "";

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _SchoolService: SchoolService
  ) {}

  ngOnInit(): void {
    /**** School detail data  */
    this.name = this._ActivatedRoute.snapshot.params.name;
    this._SchoolService.getschooldetail(this.name).subscribe((data) => {
      this.schooldetail = data;
      console.log(this.schooldetail);
    });

    /**** School detail data  process ends here */

    /***** The gallary section  */
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

    this.galleryImages = [
      {
        small: "https://preview.ibb.co/jrsA6R/img12.jpg",
        medium: "https://preview.ibb.co/jrsA6R/img12.jpg",
        big: "https://preview.ibb.co/jrsA6R/img12.jpg",
      },
      {
        small: "https://preview.ibb.co/jrsA6R/img12.jpg",
        medium: "https://preview.ibb.co/jrsA6R/img12.jpg",
        big: "https://preview.ibb.co/jrsA6R/img12.jpg",
      },
      {
        small: "https://preview.ibb.co/jrsA6R/img12.jpg",
        medium: "https://preview.ibb.co/jrsA6R/img12.jpg",
        big: "https://preview.ibb.co/jrsA6R/img12.jpg",
      },
    ];
  }
  /*** Gallary section ends here */
}
