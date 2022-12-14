import { fetchReservations } from "./dataAccess.js";
import { clownService } from "./clownService.js";
import { deleteReservation } from "./dataAccess.js";
import { fetchClowns } from "./dataAccess.js";
import { fetchCompletions } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations().then(
        () => fetchClowns())
        .then(() => fetchCompletions())
        .then (
            () => {
            mainContainer.innerHTML = clownService();
        }
    )
}

render()

mainContainer.addEventListener("stateChanged", customEvent => {
    render()
})

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("reservation--")) {
        const [,reservationId] = clickEvent.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})