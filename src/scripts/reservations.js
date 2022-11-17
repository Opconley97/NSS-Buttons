import { getReservations , getClowns , saveCompletion } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

export const reservations = () => {
    
    const reservationList = getReservations()
    const clowns = getClowns();
    
    /*This wasnt working, was saying cannot read 
    properties of undefined (reading 'map'). It seems that the problem was 
    it needed to be fetched from the API into main first, in the render function.
    */
    

    const convertReservationToListElement = (reservation) => {
        return `<li class="reservationLi">
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
            <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${
        clowns.map(
            clown => {
                return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
            }
        ).join("")
    }
</select>
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

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reservationId, clownId] = event.target.value.split("--")
            const completion = { reservationId, clownId, date_created: new Date().toDateString() }
            saveCompletion(completion);
        }
    }
)