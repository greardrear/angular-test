import { Component, OnInit, Input } from '@angular/core';
import { PostComponentService } from '../post-component.service';
@Component({
  selector: 'app-post-item-component',
  templateUrl: './post-item-component.component.html',
  styleUrls: ['./post-item-component.component.scss']
})
export class PostItemComponentComponent implements OnInit {
detail: boolean = false;
  
 
  
  
  
    constructor(private postComponentService: PostComponentService) { 
      
    }

    @Input() post: any;
  
    ngOnInit(): void {
    
       
    }
  
    
}
