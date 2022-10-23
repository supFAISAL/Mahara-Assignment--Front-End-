import { PostComments } from './../Models/postComments.model';
import { Post } from './../Models/Post.model';
import { HttpCallsService } from './../Services/httpCalls.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-Posts',
  templateUrl: './Posts.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  styleUrls: ['./Posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[] = [];
  dataSource = new MatTableDataSource<Post>(this.posts);
  currentComments: PostsComponent[] = []
  columnsToDisplay = ['userId', 'id', 'title', 'body'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Post | null = null

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpcalls:HttpCallsService) { }

  ngOnInit() {
    this.getPosts()

  }

getPosts(){
  this.httpcalls.getPosts().subscribe({
    next: (data) => {
      this.posts = data;
        for (let index = 0; index < this.posts.length; index++) {
          this.httpcalls.getPostComments(this.posts[index].id).subscribe(response=>{
            this.posts[index].postComments = response;
          })
        }
          this.dataSource = new MatTableDataSource<Post>(this.posts);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
    }, error:(e) => {
      console.log(e.message)
    }});

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

  //  PostComments(id:number):PostComments[]{
  //   this.httpcalls.getPostComments(id).subscribe(response=>{
  //     return response
  //   })

  // }
  onRowClick(element:Post){
    if(this.expandedElement==null || this.expandedElement!=element){
      this.httpcalls.getPostComments(element.id).subscribe(response=>{
        this.posts[element.id].postComments = response
        console.log(this.posts[element.id])
        this.expandedElement = this.expandedElement === element ? null : element
      })
    }



  }


}
export interface PeriodicElement {
  userId: number;
  id: number;
  title: string;
  body: string;
}
