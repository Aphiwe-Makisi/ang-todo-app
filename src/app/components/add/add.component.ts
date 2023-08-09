import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  date = new Date()
  today = this.date.toISOString().split('T')[0]

  constructor(private todoDataService: TodoDataService, private router: Router) { }

  save(todoForm: NgForm) {
    let todo: Todo = {title: todoForm.value.title, description: todoForm.value.description, dateCreated: this.today , dueDate: todoForm.value.date, completed: false}
    try {
      this.todoDataService.add(todo).subscribe(() => {
        this.router.navigate([''])
      })
    } catch (error) {}
    todoForm.reset()
  }
}
