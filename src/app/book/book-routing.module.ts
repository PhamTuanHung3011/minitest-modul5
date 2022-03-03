import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateBookComponent} from "./create-book/create-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {DeleteBookComponent} from "./delete-book/delete-book.component";
import {BookListComponent} from "./book-list/book-list.component";
import {DetailBookComponent} from "./detail-book/detail-book.component";


const routes: Routes = [
  { path: 'create-book', component: CreateBookComponent },
  { path: 'edit-book/:id', component: EditBookComponent },
  { path: 'delete-book/:id', component: DeleteBookComponent },
  { path: 'list-book', component: BookListComponent },
  { path: 'detail-book/:id', component: DetailBookComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
