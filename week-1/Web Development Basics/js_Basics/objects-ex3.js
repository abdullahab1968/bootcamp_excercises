// Ex3
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

let customer = "teD";
customer = customer.toLowerCase();

for (let key of Object.keys(reservations)) {
  if (key.toLowerCase() === customer.toLowerCase()) {
    customer = key;
  }
}
const reservation = reservations[customer];

if (reservation) {
  if (reservation.claimed === false) {
    console.log("Welcome, " + customer);
  } else if (reservation.claimed === true) {
    console.log("Hmm, someone already claimed this reservation");
  }
} else {
  reservations[customer] = { claimed: true };
  console.log(reservations[k]);
}
