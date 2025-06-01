import request from "supertest"
import HeadersBuilder from "../../builders/headers-builder"

export async function getBookId(id: number){
    const headers = new HeadersBuilder()
            .withAccept('application/json')
            .build()
            
    return await
        request('https://restful-booker.herokuapp.com')
        .get(`/booking/${id}`)
        .set(headers)
    }