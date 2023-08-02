import { Component } from '@angular/core';
import { TodoDataService } from 'src/app/services/todo-data.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {

  constructor(private todoDataSerive: TodoDataService) {}

  archive: any[] = [1]

  delete() {
    this.todoDataSerive.emptyArchive().subscribe()
  }

}
