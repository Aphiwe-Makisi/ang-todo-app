import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  url: string = 'https://angulartodo-e8d78-default-rtdb.firebaseio.com/'
  dataBaseItems: Array<string> = ['todos', 'archive']

  constructor(private http: HttpClient) { }

  fetchAll() {
    // login here
  }

  add(todo: any) {
     this.http.post(`${this.url}/todos`, todo)
  }

  edit() {
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
