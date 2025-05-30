import request from "supertest"
import HeadersBuilder from "../../builder/headers-builder"

export async function getBookId(id: number){
    const headers = new HeadersBuilder()
            .withAccept('application/json')
            .build()
            
    return await
        request('https://restful-booker.herokuapp.com')
        .get(`/booking/${id}`)
        .set(headers)
    }