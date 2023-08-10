import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  todoID!: any
  todoArray: Todo[] = []
  currentTodo!: any
  isLoading!: boolean
  date = new Date()
  today = this.date.toISOString().split('T')[0]

  constructor(private todoDataService: TodoDataService, private activatedRoute: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit(): void {
    // Get the values from the activated Route when the component is init.
    this.activatedRoute.paramMap.subscribe(value => {
      this.todoID = value.get('id')
    })

    this.isLoading = true
    // assign the data fetched by the service to the array when the component is init.
    this.fetchData()
  }

  fetchData() {
    this.todoDataService.fetchAll().subscribe(data => {
      this.todoArray = data
      this.setCurrentTodo()
      this.isLoading = false
    })
  }

  setCurrentTodo() {
    // declare a local todo variable which will have it's assignment later
    let currentTodo!: any

    // loop through the array of todos looking for one that has a matching ID
    // when found assign the todo object to the varieble declared earlier
    for (let todo of this.todoArray) {
      if (todo.id === this.todoID) {
        currentTodo = todo
      }
    }
    // then assign the global current todo with the local current todo
    this.currentTodo = currentTodo
  }

  completeTodo() {
    let completedTodo = {...this.currentTodo, completed: true}
    this.isLoading = true
    this.todoDataService.edit({...completedTodo, id: this.currentTodo.id}).subscribe()
    this.todoDataService.moveToArchive(completedTodo).subscribe()
    this.todoDataService.delete(completedTodo.id).subscribe()
    this.fetchData()
    this.isLoading = false
    this.router.navigate([''])
  }

  deleteTodo(id: string) {
    this.isLoading = true
    this.todoDataService.delete(id).subscribe(() => {
      this.isLoading = false
      this.router.navigate([''])
    })
    
  }

  editTodo(editForm: NgForm) {
    let updatedtodo: Todo = {title: editForm.value.title, description: editForm.value.desc, dateCreated: this.currentTodo.dateCreated , dueDate: editForm.value.date, completed: false}
    this.todoDataService.edit({...updatedtodo, id: this.currentTodo.id}).subscribe()
  }
}
