import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateBookComponent} from "./create-book/create-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {DeleteBookComponent} from "./delete-book/delete-book.component";
import {BookListComponent} from "./book-list/book-list.component";
import {DetailBookComponent} from "./detail-book/detail-book.component";
import {BookComponent} from "./book.component";
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BookRoutingModule} from "./book-routing.module";



@NgModule({
  declarations: [
    CreateBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    BookListComponent,
    DetailBookComponent,
    BookComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BookRoutingModule
  ]
})
export class BookModule { }
