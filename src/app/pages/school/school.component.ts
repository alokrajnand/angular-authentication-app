import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SchoolService } from "src/app/_services/school.service";
import { SchoolModel } from "src/app/_models/school.model";

@Component({
  selector: "app-school",
  templateUrl: "./school.component.html",
  styleUrls: ["./school.component.scss"],
})
export class SchoolComponent implements OnInit {
  schools: SchoolModel[] = [];

  constructor(private _SchoolService: SchoolService) {}

  ngOnInit(): void {
    ////  Get all school card
    this._SchoolService.getallschool().subscribe((data: any) => {
      this.schools = data;
      console.log(this.schools);
    });
  }
}
