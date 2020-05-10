import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
  HttpHeaders,
} from "@angular/common/http";
import { PostModel } from "../_models/post.model";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PostService {
  base_url = "http://127.0.0.1:8000/api/posts/";

  constructor(private _HttpClient: HttpClient) {}

  getAllPost(): Observable<PostModel[]> {
    return this._HttpClient.get<PostModel[]>(this.base_url);
  }
  getpostdetail(name: String): Observable<PostModel> {
    return this._HttpClient.get<PostModel>(this.base_url + name);
  }
}
