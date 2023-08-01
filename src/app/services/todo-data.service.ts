import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private url: string = 'https://angulartodo-e8d78-default-rtdb.firebaseio.com'
  private dataBaseFolders: Array<string> = ['todos', 'archive']

  constructor(private http: HttpClient) { }

  fetchAll() {
    // logic here
  }

  add(todo: any): Observable<any> {
     return this.http.post(`${this.url}/${this.dataBaseFolders[0]}.json`, todo)
  }

  edit(){
    // logic here 
  }

  delete() {
    // logic here 
  }


  fetchArchive() {
    // logic here 
  }

  deleteAll() {
    // logic here 
  }

}
