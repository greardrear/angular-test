import { Component, OnInit } from '@angular/core';
import { PostComponentService } from '../post-component.service';


@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {


show: boolean = false;
posts: Array<object> = []

  constructor(private postComponentService: PostComponentService) { 
    
  }

  ngOnInit(): void {
    this.postComponentService.fetchPosts().subscribe((response) => {
      
      this.posts = response;
      });
  }
  showForm() {
    this.show = !this.show
  }

}
