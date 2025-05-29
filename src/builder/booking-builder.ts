import Booking from "./booking"
import * as test_data from '../data/test_data.json'

export default class BookingBuilder {
    firstname: string
    lastname: string
    totalprice: number
    depositpaid: boolean
    bookingdates: {
        checkin: string
        checkout: string
    }
    additionalneeds: string

    constructor() {
    const data = test_data.requestBody.createBooking;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.totalprice = data.totalprice;
    this.depositpaid = data.depositpaid;
    this.bookingdates = {
      checkin: data.bookingdates.checkin,
      checkout: data.bookingdates.checkout
    };
    this.additionalneeds = data.additionalneeds;
  }

    withWriter(firstname: string, lastname: string) {
        this.firstname = firstname
        this.lastname = lastname
        return this
    }

    // setTotalPrice(price: number) {
    //     this.totalprice = price
    //     return this
    // }

    // setPaid(depositpaid: boolean) {
    //     this.depositpaid = depositpaid
    //     return this
    // }

    // setBookingDates(bookingdates: { checkin: string, checkout: string }) {
    //     this.bookingdates = bookingdates
    //     return this;
    // }

    // setAddicionalNeeds(additionalneeds: string) {
    //     this.additionalneeds = additionalneeds
    //     return this
    // }

    getBooking (): Booking {
        return new Booking(this);
    }

}