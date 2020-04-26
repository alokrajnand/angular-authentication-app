import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "src/app/_services/post.service";
import { PostModel } from "src/app/_models/post.model";

@Component({
  selector: "app-postdetail",
  templateUrl: "./postdetail.component.html",
  styleUrls: ["./postdetail.component.scss"],
})
export class PostdetailComponent implements OnInit {
  name = "";
  postdetail: any = "";

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _PostService: PostService
  ) {}

  ngOnInit(): void {
    this.name = this._ActivatedRoute.snapshot.params.name;
    this._PostService.getpostdetail(this.name).subscribe((data) => {
      this.postdetail = data;
      console.log(this.postdetail);
    });
  }
}
