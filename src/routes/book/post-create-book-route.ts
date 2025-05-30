import Book from "../../builder/book";
import request from "supertest"

export async function postCreateBook(body: Book){
    return await
        request('https://restful-booker.herokuapp.com')
        .post('/booking')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(body)
    }