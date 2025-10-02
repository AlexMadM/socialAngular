import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CommentCreateDto,
  Post,
  PostComment,
  PostCreateDto,
} from '../interfaces/post.interface';
import { map, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  http = inject(HttpClient);
  baseApiUrl = 'https://icherniakov.ru/yt-course/';

  posts = signal<Post[]>([]);

  getPosts() {
    return this.http.get<Post[]>(`${this.baseApiUrl}post/`).pipe(
      tap(res => this.posts.set(res)))

  }

  createPost(post: PostCreateDto) {
    return this.http.post<Post>(`${this.baseApiUrl}post/`, post).pipe(
      switchMap(() => this.getPosts())
    )
  }
  createComment(payload: CommentCreateDto) {
    return this.http.post<PostComment>(`${this.baseApiUrl}comment/`, payload);
  }

  getCommentsByPostId(postId: number) {
    return this.http
      .get<Post>(`${this.baseApiUrl}post/${postId}`)
      .pipe(map((res) => res.comments));
  }
}
