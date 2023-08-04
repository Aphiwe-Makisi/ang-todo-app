import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
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

  constructor(private todoDataService: TodoDataService) { }

  save(todoForm: NgForm) {
    let todo: Todo = {title: todoForm.value.title, description: todoForm.value.description, dateCreated: this.today , dueDate: todoForm.value.date, completed: true}
    this.todoDataService.add(todo).subscribe()
    todoForm.reset()
  }
}
