import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {HttpClient} from "@angular/common/http";
import {BookService} from "../../service/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
book = new Book(0, "", "", "");
  id!: number
  constructor(private http: HttpClient, private bookService: BookService,private router:ActivatedRoute) {
    this.router.paramMap.subscribe((param)=>{
      this.id = Number(<string>param.get('id'))
      this.detailBook();
    })
  }

  ngOnInit(): void {
  }

  detailBook() {
    this.bookService.findById(this.id).subscribe(data => {
      this.book = data;

    }, error => {

    })
  }

}
