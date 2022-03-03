import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: Book[] = [];
  constructor(private http: HttpClient, private bookService: BookService) {
    this.findAll()
  }

  book: Book = new Book(0,"", "", "")
  ngOnInit(): void {
  }

  findAll() {
    this.bookService.findAll().subscribe(data => {
      this.books = data;
    }, error => {

    })
  }
}
