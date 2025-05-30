import request from "supertest"

export async function getBookId(id: number){
    return await
        request('https://restful-booker.herokuapp.com')
        .get(`/booking/${id}`)
        .set('Accept', 'application/json')
    }