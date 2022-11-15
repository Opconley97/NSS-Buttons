import { getReservations } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

export const reservations = () => {

    const reservationList = getReservations();

    const convertReservationToListElement = (reservation) => {
        return `<li>
        <button class="reservation__delete"
                id="reservation--${reservation.id}">
            Delete
        </button>
            Date: ${reservation.reservationDate}
            Length: ${reservation.reservationLength} hours
            Address: ${reservation.address}
            Parent Name: ${reservation.parentName} 
            Child Name: ${reservation.childName} 
            Number of children: ${reservation.childAmount} 
            </li>`
    }

    let html = `
        <ul>
            ${
                reservationList.map(convertReservationToListElement).join("")
            }
        </ul>
`
return html

}

