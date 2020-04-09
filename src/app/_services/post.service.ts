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
  url = "http://127.0.0.1:8000/api/posts/";

  constructor(private http: HttpClient) {}

  getAllPost(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.url);
  }

  getpostdetail(id): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
  }
}
