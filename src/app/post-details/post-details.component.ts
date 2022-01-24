import { Component, OnInit } from '@angular/core';
import { PostComponentService } from '../post-component.service';
import { Post } from '../posts';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {


post?: Post;
id: number;

  constructor(private postComponentService: PostComponentService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.queryParams.filter((params) => params.id).subscribe(
      (params) => {console.log(params);
        

        this.id = params.id
    })
   this.getPost(this.id)
  }

getPost(id: number) {
    this.postComponentService.getPost(id).subscribe((res) =>
    {
      this.post = res
    })
  }
}



