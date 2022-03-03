import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  formCreate!: FormGroup;


  constructor(private http: HttpClient, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      nameBook: new FormControl("", Validators.minLength(6)),
      author: new FormControl(0, Validators.pattern('[1-4]')),
      description: new FormControl("")

    })
  }

  create() {
    this.bookService.create(this.formCreate.value).subscribe(data =>{
      alert("create Ok")
      this.router.navigate(["/book/list-book"]);
    })
  }

}
