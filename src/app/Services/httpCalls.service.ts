import { PostComments } from './../Models/postComments.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../Models/Post.model';

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

constructor(private http:HttpClient) { }
 getPosts()
  {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
   getPostComments(id:number)
  {
    return this.http.get<PostComments[]>('https://jsonplaceholder.typicode.com/comments?postId=' + id);
  }
}
