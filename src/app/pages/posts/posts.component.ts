import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { PostService } from "../../_services/post.service";
import { PostModel } from "src/app/_models/post.model";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
  posts: PostModel[] = [];

  constructor(private _PostService: PostService) {}

  ngOnInit() {
    ////  Get all Posts
    this._PostService.getAllPost().subscribe((data: any) => {
      this.posts = data;
      console.log(data);
    });

  }
}
