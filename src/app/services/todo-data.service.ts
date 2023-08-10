import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private url: string = 'https://angulartodo-e8d78-default-rtdb.firebaseio.com'
  private dataBaseFolders: Array<string> = ['todos', 'archive']

  constructor(private http: HttpClient) {}

  fetchAll(): Observable<any> {
    return this.http.get<{[key: string]: Todo}>(`${this.url}/${this.dataBaseFolders[0]}.json`).pipe(map(data => {
      const allTodos = []
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          allTodos.push({...data[key], id: key})
        }
      }
      return allTodos
    }))
  }

  add(todo: any): Observable<any> {
     return this.http.post(`${this.url}/${this.dataBaseFolders[0]}.json`, todo)
  }

  edit(todo: Todo): Observable<any> {
    // logic here
    return this.http.put(`${this.url}/${this.dataBaseFolders[0]}/${todo.id}.json`, todo)
  }

  delete(id: string) {
    // logic here 
    return this.http.delete(`${this.url}/${this.dataBaseFolders[0]}/${id}.json`)
  }

  archive(): Observable<any> {
    return this.http.get<{[key: string]: Todo}>(`${this.url}/${this.dataBaseFolders[1]}.json`).pipe(map(data => {
      const archiveData = []
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          archiveData.push({...data[key], id: key})
        }
      }
      return archiveData
    }))
  }

  emptyArchive(): Observable<any> {
    return this.http.delete(`${this.url}/${this.dataBaseFolders[1]}.json`)
  }

  moveToArchive(todo: Todo): Observable<any> {
    // logic here
    return this.http.post(`${this.url}/${this.dataBaseFolders[1]}.json`, todo)
  }

}
