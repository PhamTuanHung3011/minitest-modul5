
export class Book{
  id!: number;
  nameBook!: String;
  author!: String;
  description!: String;


  constructor(id: number, nameBook: String, author: String, description: String) {
    this.id = id;
    this.nameBook = nameBook;
    this.author = author;
    this.description = description;
  }

}
