const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }


const checkReservation = function () {
    const input = document.getElementById("input")
    const name = input.value
    const toShow = toCheck(name)
    document.body.appendChild(toShow)
    
}

function toCheck (name) {
    const toShow = document.createElement("h2")
    if (reservations[name] != undefined) {
        if (!reservations[name].claimed) {
            toShow.innerHTML = "Welcome, " + name
        }
        else {
            toShow.innerHTML = "Hmm, someone already claimed this reservation"


        }
    }
    else {
        toShow.innerHTML = "You have no reservation"
    }
    return toShow

}