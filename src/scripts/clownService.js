import { reservationForm } from "./reservationForm.js"
import { reservations } from "./reservations.js"

export const clownService = () => {
    return `
    <h1>Button's Clown Rental</h1>
    <section class="reservationForm">
        ${reservationForm()}
    </section>
    
    <section class="reservationRequests">
        <h2>Reservation Requests</h2>
        ${reservations()}`
}