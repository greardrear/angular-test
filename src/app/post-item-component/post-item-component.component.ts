import { Component, OnInit } from '@angular/core';
import { PostComponentService } from '../post-component.service';
@Component({
  selector: 'app-post-item-component',
  templateUrl: './post-item-component.component.html',
  styleUrls: ['./post-item-component.component.scss']
})
export class PostItemComponentComponent implements OnInit {
detail: boolean = false;
  posts: any;
  postComponentService;
  
  
  
    constructor(postComponentService: PostComponentService) { 
      this.postComponentService = postComponentService;
    }
  
    ngOnInit(): void {
      this.postComponentService.fetchPosts().subscribe((response) => {
      
        this.posts = response;
        });
    }
  
    
}
