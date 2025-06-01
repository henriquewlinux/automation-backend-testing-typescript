import Book from "../../builders/book";
import request from "supertest"
import HeadersBuilder from "../../builders/headers-builder";

export async function postCreateBook(body: Book) {
    const headers = new HeadersBuilder()
            .withContentType('application/json')
            .withAccept('application/json')
            .build()
            
    return await
        request('https://restful-booker.herokuapp.com')
        .post('/booking')
        .set(headers)
        .send(body)
    }