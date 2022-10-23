import { PostComments } from './postComments.model';
export interface Post {
  id:number,
  title:string,
  userId:string,
  body:string,
  postComments:PostComments[]
}
