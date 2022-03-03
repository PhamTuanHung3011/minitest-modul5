import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../book/model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private  http:HttpClient) { }

  findAll(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8080/books');
  }

  create(book: Book): Observable<any> {
    return this.http.post('http://localhost:8080/books', book);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`http://localhost:8080/books/${id}`);
  }

  findById(id: number): Observable<Book>{
    return this.http.get<Book>(`http://localhost:8080/books/${id}`);
  }

  edit(book: Book): Observable<any>{
    return this.http.put('http://localhost:8080/books', book);
  }
}
