import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostComponentService } from '../post-component.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


reactivForm: FormGroup;


  constructor(private postComponentService: PostComponentService, private fb: FormBuilder) { 
    
  
  }

  

  ngOnInit(): void {
    this.reactivForm = this.fb.group({
      title:['', [
        Validators.required,
        Validators.minLength(2)
        
      ]],
      body:['', [
        Validators.required,
        Validators.minLength(10)
      ]]
    })
    this.reactivForm.valueChanges.subscribe(console.log);
  }

get title() {
  return this.reactivForm.get('title')
}

get body() {
  return this.reactivForm.get('body')
}

submitForm(data: any) {
  
  this.postComponentService.submitForm(data.value).subscribe();
  this.postComponentService.fetchPosts();
  this.reactivForm.reset();

}
}
