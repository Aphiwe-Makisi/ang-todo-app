import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading!: boolean
  isOverDue: boolean = false
  todos: any[] = []
  date = new Date()
  today = this.date.toISOString().split('T')[0]

  constructor(private todoDataService: TodoDataService) {}

  ngOnInit(): void {
    this.isLoading = true
    this.fetchData()
  }

  fetchData() {
    this.todoDataService.fetchAll().subscribe(data => {
      this.todos = data
      this.isLoading = false
    })
  }
}
