import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      title: '',
      body: ''
    })
    this.reactivForm.valueChanges.subscribe(console.log)
  }




submitForm(data: any) {
  if (data.invalid) {
    alert('Please fill out both fields');
    return;
  }
  
  this.postComponentService.submitForm(data.value).subscribe();
  console.log(data.value)
  this.postComponentService.fetchPosts()
  this.reactivForm.reset()

}
}
