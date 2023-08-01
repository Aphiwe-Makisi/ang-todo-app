import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  date = new Date()
  today = this.date.toISOString().split('T')[0]

  constructor() {
    console.log(this.today);
    
  }

  save(todoForm: NgForm) {
    // Some logic here
    console.log(todoForm);
    
  }
}
