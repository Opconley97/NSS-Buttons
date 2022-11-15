import { sendReservation } from "./dataAccess.js"

export const reservationForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numOfChildren">Number of children</label>
            <input type="number" name="numOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Party Address</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationDate">Reservation Date</label>
            <input type="date" name ="reservationDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationLength">Length of Reservation</label>
            <input type="number" name ="reservationLength" class="input" />
        </div>
        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userChildAmount = document.querySelector("input[name='numOfChildren']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userReservationDate = document.querySelector("input[name='reservationDate']").value
        const userReservationLength = document.querySelector("input[name='reservationLength']").value
    
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            childAmount: userChildAmount,
            address: userAddress,
            reservationDate: userReservationDate,
            reservationLength: userReservationLength
        }

        sendReservation(dataToSendToAPI)
    }
})