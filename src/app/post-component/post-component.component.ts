import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {


show: boolean = false;


  constructor() { 
    
  }

  ngOnInit(): void {
  }
  showForm() {
    this.show = !this.show
  }

}
