import { Component, OnInit } from '@angular/core';
import { PostComponentService } from '../post-component.service';
import { Post } from '../posts';
import { ActivatedRoute } from '@angular/router';
import { PostGuard } from '../post.guard'


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {


post?: Post;



  constructor(private postComponentService: PostComponentService, private route: ActivatedRoute, private canActivate: PostGuard) { 
    
  }

  ngOnInit(): void {
    let id = parseInt( this.route.snapshot.paramMap.get('id'));
    this.getPost(id);
    
  
  
  }

getPost(id: number) {
    this.postComponentService.getPost(id).subscribe((res) =>
    {
      this.post = res
      
    })
  }
}



