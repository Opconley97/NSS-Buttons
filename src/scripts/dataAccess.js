const applicationState = {
    reservations: [],
}

const API = "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
    .then(response => response.json())
    .then(
        (serviceReservation) => {
            applicationState.reservations = serviceReservation
        }
    )
}

export const sendReservation = (userServiceReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceReservation)
    }

    return fetch(`${API}/reservations`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}