import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  archive: any = []
  isLoading!: boolean

  constructor(private todoDataSerive: TodoDataService) {}

  delete() {
    this.todoDataSerive.emptyArchive().subscribe()
  }

  ngOnInit(): void {
    this.isLoading = true
    this.todoDataSerive.archive().subscribe(data => {
      this.archive = data
      this.isLoading = false
    })
  }

}
