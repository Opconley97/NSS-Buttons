export const serviceForm = () => {
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