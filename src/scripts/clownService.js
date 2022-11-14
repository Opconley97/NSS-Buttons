import { reservationForm } from "./reservationForm.js"

export const clownService = () => {
    return `
    <h1>Button's Clown Rental</h1>
    <section class="reservationForm">
        ${reservationForm()}`
}