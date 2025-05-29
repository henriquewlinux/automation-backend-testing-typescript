import BookingBuilder from "./booking-builder";

export default class Booking {

    firstname: string
    lastname: string
    totalprice: number
    depositpaid: boolean
    bookingdates: {
        checkin: string
        checkout: string
    }
    additionalneeds: string

    constructor(builder: BookingBuilder) {
        this.firstname =  builder.firstname;
        this.lastname =  builder.lastname;
        this.totalprice =  builder.totalprice;
        this.depositpaid =  builder.depositpaid;
        this.bookingdates = builder.bookingdates
        this.additionalneeds =  builder.additionalneeds;
    }
}