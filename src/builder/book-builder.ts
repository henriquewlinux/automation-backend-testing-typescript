import Book from "./book"
import * as testData from '../data/test-data.json'

export default class BookBuilder {
    private book: Book

    constructor() {
      this.book = new Book()
      this.book = testData.requestBody.createBooking;
    }

    withWriter(firstname: string, lastname: string) {
      this.book.firstname = firstname
      this.book.lastname = lastname
      return this
    }

    build (): Book {
      return this.book
    }

}