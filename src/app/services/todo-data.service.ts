import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private url: string = 'https://angulartodo-e8d78-default-rtdb.firebaseio.com'
  private dataBaseFolders: Array<string> = ['active', 'archive']

  constructor(private http: HttpClient) { }

  fetchAll() {
    // logic here
  }

  add(todo: any): Observable<any> {
     return this.http.post(`${this.url}/todos/${this.dataBaseFolders[0]}.json`, todo)
  }

  edit(id: string) {
    // logic here
  }

  delete() {
    // logic here 
  }


  fetchArchive() {
    // logic here 
  }

  emptyArchive(): Observable<any> {
    return this.http.delete(`${this.url}/todos/${this.dataBaseFolders[1]}.json`)
  }

  moveToArchive() {

  }

}
