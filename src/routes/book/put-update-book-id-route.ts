import request from "supertest"
import Book from "../../builder/book"

export async function putBook(id: number, token: string, body: Book){
    return await
        request('https://restful-booker.herokuapp.com')
        .put(`/booking/${id}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Cookie', `token=${token}`)
        .send(body)
    }