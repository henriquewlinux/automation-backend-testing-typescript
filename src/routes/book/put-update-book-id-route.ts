import request from "supertest"
import Book from "../../builders/book"
import HeadersBuilder from "../../builders/headers-builder"

export async function putBook(id: number, token: string, body: Book){
    const headers = new HeadersBuilder()
            .withAccept('application/json')
            .withContentType('application/json')
            .withCookie(token)
            .build()

    return await
        request('https://restful-booker.herokuapp.com')
        .put(`/booking/${id}`)
        .set(headers)
        .send(body)
    }