import { Component, OnInit } from '@angular/core';
import { PostComponentService } from '../post-component.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


postComponentService;


  constructor(postComponentService: PostComponentService) { 
    this.postComponentService = postComponentService;
  
  }

  ngOnInit(): void {
  }
submitForm(data: any) {
  if (data.invalid) {
    return;
  }
  
  this.postComponentService.submitForm(data.value).subscribe();
  console.log(data.value)
  this.postComponentService.fetchPosts()
  

}
}
